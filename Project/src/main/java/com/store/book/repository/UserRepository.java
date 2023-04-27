/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.store.book.repository;

import com.store.book.model.User;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author nhat
 */
public interface UserRepository extends JpaRepository<User, String>{
    User findByUsername(String username);
    
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM User_Role WHERE username = :username", nativeQuery = true)
    void deleteRolesOfUser(@Param("username") String username);
    
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM User WHERE username = :username", nativeQuery = true)
    void deleteById(@Param("username") String username);
    
    @Transactional
    default void deleteWithRoles(String username) {
        deleteRolesOfUser(username);
        deleteById(username);
    }

}
