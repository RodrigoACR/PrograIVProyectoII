package org.example.backend.logic;

import org.example.backend.data.repository.ClienteRepository;
import org.example.backend.data.repository.EmisorRepository;
import org.example.backend.logic.model.Cliente;
import org.example.backend.logic.model.Emisor;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service("Service")
public class Service
{
    //------------------------------------------------------------------------------------------------------------------
    // Singleton
    //------------------------------------------------------------------------------------------------------------------
    private static Service instance;

    public static Service getInstance()
    {
        if (instance == null)
        {
            instance = new Service();
        }
        return instance;
    }

    //------------------------------------------------------------------------------------------------------------------
    // Atributos
    //------------------------------------------------------------------------------------------------------------------
    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private EmisorRepository emisorRepository;

    //------------------------------------------------------------------------------------------------------------------
    // Constructor
    //------------------------------------------------------------------------------------------------------------------
    public Service()
    {
        System.out.println("Service created");
    }

    //------------------------------------------------------------------------------------------------------------------
    // Emisores
    //------------------------------------------------------------------------------------------------------------------
    public Emisor getEmisor(Integer id)
    {
        return emisorRepository.findEmisorById(id).orElse(null);
    }

    //------------------------------------------------------------------------------------------------------------------
    // Clientes
    //------------------------------------------------------------------------------------------------------------------
    public void addCliente(Cliente cliente)
    {
        System.out.println("Service-AddCliente: " + cliente.toString());
        clienteRepository.save(cliente);
    }

    public List<Cliente> getClientes()
    {
        List<Cliente> clientes = clienteRepository.findAll();
        System.out.println("Service-Clientes: " + clientes.size());
        System.out.println("Service-Clientes: " + clientes.get(0).getNombre());
        return clientes;
    }
}
