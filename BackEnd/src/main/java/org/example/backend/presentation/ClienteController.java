package org.example.backend.presentation;

import jakarta.annotation.security.PermitAll;
import org.example.backend.logic.Service;
import org.example.backend.logic.model.Cliente;
import org.example.backend.logic.model.Emisor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping
    public void addCliente(@RequestBody Cliente cliente)
    {
        cliente.setIdEmisor(service.getEmisor(1));
        System.out.println("Controller-AddCliente: " + cliente.toString());
        service.addCliente(cliente);
    }

    @GetMapping
    public List<Cliente> getClientes()
    {
        List<Cliente> clientes = service.getClientes();
        System.out.println("Controller-Clientes: " + clientes.size());
        System.out.println("Controller-Clientes: " + clientes.get(0).toString());
        System.out.println("Controller-Clientes: " + clientes.get(1).toString());

        return clientes;
    }
}
