package com.store.book;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller

public class BookApplication {
        @RequestMapping("/")
        public String test(){
            return ("authorization/login");
        }
	public static void main(String[] args) {
		SpringApplication.run(BookApplication.class, args);
                System.out.println("Pham Tuan Duong");
	}
        
        
}
