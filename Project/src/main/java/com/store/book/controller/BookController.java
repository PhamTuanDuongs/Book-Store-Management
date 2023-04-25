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
import com.store.book.repository.FeatureRepository;
import com.store.book.repository.RoleRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
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
}


