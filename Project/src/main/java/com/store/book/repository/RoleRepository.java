/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.store.book.repository;

import com.store.book.model.Role;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author nhat
 */
public interface RoleRepository extends JpaRepository<Role, Integer>{
    
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM user_role WHERE roleId = :roleId", nativeQuery = true)
    void deleteUsersOfRole(@Param("roleId") int roleId);
    
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM Role WHERE roleId = :roleId", nativeQuery = true)
    void deleteById(@Param("roleId") int roleId);
    
    @Transactional
    default void deleteWithUsers(int roleId) {
        deleteUsersOfRole(roleId);
        deleteById(roleId);
    }
    
    
    
}
