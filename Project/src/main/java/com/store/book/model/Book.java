/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.model;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
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
@Table(name="Book")
public class Book {
    @Id
    @Column(name="bookId")
    int bookId;
    @Column
    String title;
    String authorName;
    String description;
    String pdfPath;
    String coverPath;
    float price;
    boolean isApproved;
    int noSale;
    int noView;
    
    @OneToMany(mappedBy = "book")
    List<Book_Category> book_Category;
    
    @ManyToOne
    @MapsId("username")
    @JoinColumn(name = "createdBy")
    User createdBy;
}
