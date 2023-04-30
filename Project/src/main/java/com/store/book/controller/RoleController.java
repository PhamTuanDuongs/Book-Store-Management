/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.controller;

import com.store.book.model.Feature;
import com.store.book.model.Role;
import com.store.book.repository.FeatureRepository;
import com.store.book.repository.RoleRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nhat
 */
@RestController
public class RoleController {
    @Autowired
    RoleRepository roleRepository;

    @RequestMapping(value = "role", method = RequestMethod.GET)
    public List<Role> getAllFeature() {
        List<Role> list = roleRepository.findAll();
        return list;
    }
}
