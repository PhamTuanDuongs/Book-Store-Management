/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.model;

import com.store.book.modelkey.FeatureRoleKey;
import com.store.book.modelkey.User_RoleKey;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author nhat
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="User_Role")
public class User_Role {
    @EmbeddedId
    User_RoleKey id;
    
    @ManyToOne
    @MapsId("roleId")
    @JoinColumn(name = "roleId")
    Role role;

    @ManyToOne
    @MapsId("username")
    @JoinColumn(name = "username")
    User user;
}
