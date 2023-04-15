/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.model;

import com.store.book.modelkey.Book_CategoryKey;
import com.store.book.modelkey.FeatureRoleKey;
import java.io.Serializable;
import javax.persistence.Embedded;
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
@Table(name="Book_Category")
public class Book_Category {
    @EmbeddedId
    Book_CategoryKey id;
    
    @ManyToOne
    @MapsId("bookId")
    @JoinColumn(name = "bookId")
    Book book;

    @ManyToOne
    @MapsId("categoryId")
    @JoinColumn(name = "categoryId")
    Category category;
}
