package org.example.backend.presentation;

import jakarta.annotation.security.PermitAll;
import org.example.backend.logic.Service;
import org.example.backend.logic.model.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("{id}")
    public Cliente getClienteById(@PathVariable("id") Integer id)
    {
        return service.getCliente(id);
    }

    @GetMapping
    public List<Cliente> getClientes()
    {
        List<Cliente> clientes = service.getClientes();
        System.out.println("Controller-Clientes: " + clientes.size());

        return clientes;
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCliente(@PathVariable("id") Integer id)
    {
        System.out.println("Controller-DeleteCliente: " + id);
        service.deleteCliente(id);
        return ResponseEntity.ok("Cliente eliminado");
    }
}
