/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.store.book.repository;

import com.store.book.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author nhat
 */
public interface UserRepository extends JpaRepository<User, String>{
    
}
