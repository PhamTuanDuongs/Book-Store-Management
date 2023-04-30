/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.controller;

import com.store.book.model.Feature;
import com.store.book.repository.FeatureRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nhat
 */
@RestController
//@Configurable
public class FeatureController {

    @Autowired
    FeatureRepository featureRepository;

    @RequestMapping(value = "feature", method = RequestMethod.GET)
    public List<Feature> getAllFeature() {
        List<Feature> list = featureRepository.findAll();
        return list;
    }
}
