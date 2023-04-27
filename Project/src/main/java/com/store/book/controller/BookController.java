/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.controller;

import com.store.book.model.Book;
import com.store.book.model.Category;
import com.store.book.model.Feature;
import com.store.book.model.Role;
import com.store.book.model.User;
import com.store.book.repository.BookRepository;
import com.store.book.repository.CategoryRepository;
import com.store.book.repository.FeatureRepository;
import com.store.book.repository.RoleRepository;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nhat
 */
@CrossOrigin(origins = {"*"})
@RestController
public class BookController {

    @Autowired
    BookRepository bookRepository;
    
    @Autowired
    CategoryRepository categoryRepository;
    
    @RequestMapping(value = "book", method = RequestMethod.GET)
    public List<Book> getAllFeature() {
        List<Book> list = bookRepository.findAll();
        return list;
    }
    
    @RequestMapping(value = "book/user/{username}", method = RequestMethod.GET)
    public List<Book> getByUser(@PathVariable String username) {
        List<Book> books = bookRepository.findByUsername(username);
        return books;
    }
    
        @GetMapping(value = "/pdf/{fileId}", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<InputStreamResource> getFile(@PathVariable String fileId) throws IOException {
        String filePath = "pdf/" + fileId + ".pdf";
        File file = new File(filePath);
        InputStream inputStream = new FileInputStream(file);
        InputStreamResource inputStreamResource = new InputStreamResource(inputStream);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=" + fileId);
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(inputStreamResource);
    }
    
    
    @GetMapping(value = "/cover/{fileId}", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<InputStreamResource> getImage(@PathVariable String fileId) throws IOException {
        String filePath = "cover/" + fileId + ".jpg";
        File file = new File(filePath);
        InputStream inputStream = new FileInputStream(file);
        InputStreamResource inputStreamResource = new InputStreamResource(inputStream);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=" + fileId);
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.IMAGE_JPEG)
                .body(inputStreamResource);
    }

    
    @RequestMapping(value = "book/category/{categoryId}", method = RequestMethod.GET)
    public List<Book> getByCategory(@PathVariable int categoryId) {
        List<Book> books = bookRepository.getByCategoryId(categoryId);
        return books;
    }
    
    @RequestMapping(value = "book/bookDetail/{bookId}", method = RequestMethod.GET)
    public Book getByBookId(@PathVariable int bookId) {
        Book book = bookRepository.getByBookId(bookId);
        return book;
    }
    
    @PostMapping(value = "/book/update")
    public ResponseEntity<String> updateUserInformation(@RequestBody Book book) {
        Book temp = bookRepository.getByBookId(book.getBookId());
        if (temp == null) {
            return ResponseEntity.notFound().build();
        }
        temp.setIsApproved(1);
        bookRepository.save(temp);
        return ResponseEntity.ok("User information updated successfully");
    }
    
    @Transactional
    @DeleteMapping("/delete/{id}")
    public void deleteBook(@PathVariable("id") int id) {
        Optional<Book> book = bookRepository.findById(id);
        
        categoryRepository.deleteCategory(book.get().getBookId());
        bookRepository.delete(book.get());
        
    }
    
}
