package org.example.backend.presentation;

import jakarta.annotation.security.PermitAll;
import org.example.backend.logic.Service;
import org.example.backend.logic.model.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@PermitAll
@RestController
@RequestMapping("/api/cliente")
public class ClienteController
{
    //------------------------------------------------------------------------------------------------------------------
    // Atributos
    //------------------------------------------------------------------------------------------------------------------
    @Autowired
    private Service service;

    //------------------------------------------------------------------------------------------------------------------
    // Metodos
    //------------------------------------------------------------------------------------------------------------------
    @GetMapping
    public List<Cliente> getClientes()
    {
        List<Cliente> clientes = service.getClientes();
        System.out.println("Controller-Clientes: " + clientes.size());
        System.out.println("Controller-Clientes: " + clientes.get(0).toString());

        return clientes;
    }
}
