/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.controller;

import com.store.book.model.Feature;
import com.store.book.model.Role;
import com.store.book.model.User;
import com.store.book.repository.FeatureRepository;
import com.store.book.repository.RoleRepository;
import com.store.book.repository.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nhat
 */
@RestController
@RequestMapping("users")
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping
    public List<User> getAllFeature() {
        return userRepository.findAll();
    }    
    @GetMapping("/login/{user}")
    User getUser(@PathVariable String user) {
        if(userRepository.findByUsername(user)!=null){
            return userRepository.findByUsername(user);
        }else{
            return null;
        }
    }
    
       @PostMapping("/login")
    User loginUser(@RequestBody User user) {
        User foundUser = userRepository.findByUsername(user.getUsername());
        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            return foundUser;
        } else {
            return null;
        }
    }

        
}
