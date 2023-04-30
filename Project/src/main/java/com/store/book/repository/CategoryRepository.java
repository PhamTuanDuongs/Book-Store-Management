/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.store.book.repository;

import com.store.book.model.Category;
import java.util.Optional;
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
    Optional<Category> findById(int categoryId);
    
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO Book_Category (bookId, categoryId) VALUES (:bookId, :categoryId)",nativeQuery = true)
    public void saveBook_Category(@Param("bookId") Integer bookId, @Param("categoryId") Integer categoryId);
}
