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
public class Book_CategoryKey implements Serializable{
    @Column(name="bookId")
    int bookId;
    
    @Column(name="categoryId")
    int categoryId;
}
