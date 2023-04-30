/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.store.book.model.Book;
import com.store.book.model.Category;
import com.store.book.model.Feature;
import com.store.book.model.Role;
import com.store.book.model.User;
import com.store.book.repository.BookRepository;
import com.store.book.repository.CategoryRepository;
import com.store.book.repository.FeatureRepository;
import com.store.book.repository.RoleRepository;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Files;
import org.springframework.http.MediaType;

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
    
    @Autowired
    StorageService storageService;
    
    

// public BookController(EntityManager entityManager, CategoryRepository categoryRepository) {
//        this.categoryRepository = categoryRepository;
//    }
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

//    @PostMapping("/book/add")
//    public ResponseEntity<Book> addNewBook(@RequestBody Book book,@RequestParam("coverPath") MultipartFile cover,
//                                        @RequestParam("pdfPath") MultipartFile pdf) {
//        bookRepository.save(book);
////        String coverPath = StorageService.store(cover);
////        String pdfPath = storageService.storeFile(pdf);
//
//    // Set the cover and pdf paths on the book object
////    book.setCoverPath(coverPath);
////    book.setPdfPath(pdfPath);
//        for (Category category : book.getCategories()) {
//            categoryRepository.saveBook_Category(book.getBookId(), category.getCategoryId());
//        }
//        return ResponseEntity.ok(book);
//    }
    @PostMapping(value="/book/add", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Book> addNewBook(@RequestParam("coverPath") MultipartFile file,
            @RequestParam("pdfPath") MultipartFile pdf,
            @RequestBody Book book) throws Exception {
        String coverFilename = StringUtils.cleanPath(file.getOriginalFilename());
        storageService.saveImg(file, coverFilename);
        book.setCoverPath(coverFilename);

        // Save PDF
        String pdfFilename = StringUtils.cleanPath(pdf.getOriginalFilename());
        storageService.savePdf(pdf, pdfFilename);
        book.setPdfPath(pdfFilename);

        bookRepository.save(book);

        for (Category category : book.getCategories()) {
            categoryRepository.saveBook_Category(book.getBookId(), category.getCategoryId());
        }

        return ResponseEntity.ok(book);
    }
}
