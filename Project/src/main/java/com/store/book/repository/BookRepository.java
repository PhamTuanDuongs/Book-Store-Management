/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.store.book.repository;

import com.store.book.model.Book;
import com.store.book.model.Category;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

/**
 *
 * @author nhat
 */
public interface BookRepository extends JpaRepository<Book, Integer> {

    @Query(value = "select * from Book join User on Book.createdBy = User.username where User.username = ?", nativeQuery = true)
    List<Book> findByUsername(String username);

    @Query(value = "SELECT * FROM Book b join Book_Category bc on b.bookId = bc.bookId where bc.categoryId = ?", nativeQuery = true)
    List<Book> getByCategoryId(int categoryId);

    @Query(value = "SELECT * FROM Book where bookId = ?", nativeQuery = true)
    Book getByBookId(int bookId);
}
