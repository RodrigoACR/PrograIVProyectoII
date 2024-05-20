package org.example.backend.presentation;

import jakarta.annotation.security.PermitAll;
import org.example.backend.logic.Service;
import org.example.backend.logic.model.Actividad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@PermitAll
@RestController
@RequestMapping("/api/actividad")
public class ActividadController
{
    //------------------------------------------------------------------------------------------------------------------
    // Atributos
    //------------------------------------------------------------------------------------------------------------------
    @Autowired
    private Service service;

    //------------------------------------------------------------------------------------------------------------------
    // Metodos
    //------------------------------------------------------------------------------------------------------------------
    @GetMapping("{id}")
    public Actividad getActividadById(@PathVariable("id") Integer id)
    {
        return service.getActividad(id);
    }
}
