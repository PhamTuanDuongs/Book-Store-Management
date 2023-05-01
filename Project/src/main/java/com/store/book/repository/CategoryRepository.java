/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.store.book.repository;

import com.store.book.model.Category;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author nhat
 */
public interface CategoryRepository extends JpaRepository<Category, Integer>{
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM Book_Category WHERE bookId = :bookId", nativeQuery = true)
    void deleteCategory(@Param("bookId") int bookId);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO Book_Category(bookId, categoryId) VALUES ( :bookId, :categoryId);", nativeQuery = true)
    void saveBook_Category(@Param("bookId") Integer bookId, @Param("categoryId") Integer categoryId);
    
    @Modifying
    @Transactional
    @Query(value = "Update `Book_Category` set `categoryId` = ? where bookId = ?;", nativeQuery = true)
    void update_Book_Category(@Param("categoryId") Integer categoryId,@Param("bookId") Integer bookId);
    
    @Query(value = "Select * from Category c join Book_Category bc on c.categoryId = bc.categoryId Where bookId = ?;", nativeQuery = true)
    Category category(@Param("bookId") int bookId);
    
}
