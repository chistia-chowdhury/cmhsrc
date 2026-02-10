package com.example.cmhsrc;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello {
    @GetMapping("/")
    public String index() {
        return "Hello World! Visit /hello endpoint as well.";
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello World, We are here";
    }
    @GetMapping("/GetData")
    public String getData() {
        return "Get Data from a valid API";
    }
}
