package org.example.backend.presentation;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping({"", "/"})
public class MainController {
    //------------------------------------------------------------------------------------------
    //Atributos
    //------------------------------------------------------------------------------------------

    @GetMapping({"", "/"})
    public String showMain(Model model)
    {
        return "index.html";
    }
}
