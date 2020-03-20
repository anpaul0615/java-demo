package com.example.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class APIController {

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello";
    }

}