/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.model;

import com.store.book.modelkey.FeatureRoleKey;
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
@Table(name="Role_Feature")
public class Role_Feature {
    @EmbeddedId
    FeatureRoleKey id;
    
    @ManyToOne
    @MapsId("featureId")
    @JoinColumn(name = "featureId")
    Feature feature;

    @ManyToOne
    @MapsId("roleId")
    @JoinColumn(name = "roleId")
    Role role;
    
}