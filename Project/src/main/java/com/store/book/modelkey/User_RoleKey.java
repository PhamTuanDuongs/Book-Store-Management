/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.modelkey;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 *
 * @author nhat
 */
@Embeddable
public class User_RoleKey implements Serializable{
    @Column(name="username")
    String username;
    
    @Column(name="roleId")
    int roleId;
}
