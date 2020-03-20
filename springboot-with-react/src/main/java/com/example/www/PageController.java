package com.example.www;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@Controller
public class PageController {

    @GetMapping("/")
    public String homeRedirect() {
        return "redirect:/www/home";
    }

    @GetMapping("/www")
    public String homeRedirect2() {
        return "redirect:/www/home";
    }

    @GetMapping("/www/{p}")
    public String page(@PathVariable String p, Model model) {
        switch (p) {
            // check from page dictionary
            case "home":
            case "about":
            case "message":
                model.addAttribute("page", p);
                return "page";
            default:
                return "404";
        }
    }
    
}