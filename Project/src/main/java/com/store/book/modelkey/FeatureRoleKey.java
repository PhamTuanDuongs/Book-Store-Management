/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.modelkey;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

/**
 *
 * @author nhat
 */
@Embeddable
public class FeatureRoleKey implements Serializable{
    
    @Column(name="roleId")
    int roleId;
    
    @Column(name="featureId")
    int featureId;

   
    
}
