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

    
}
