package org.example.backend.logic;

import org.example.backend.data.repository.ActividadRepository;
import org.example.backend.data.repository.ClienteRepository;
import org.example.backend.data.repository.EmisorRepository;
import org.example.backend.data.repository.ProductoRepository;
import org.example.backend.logic.model.Actividad;
import org.example.backend.logic.model.Cliente;
import org.example.backend.logic.model.Emisor;
import org.example.backend.logic.model.Producto;
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
    private ProductoRepository productoRepository;

    @Autowired
    private EmisorRepository emisorRepository;

    @Autowired
    private ActividadRepository actividadRepository;

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
    public Actividad getActividad(Integer id)
    {
        return actividadRepository.findActividadById(id).orElse(null);
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

    public Cliente getCliente(Integer id)
    {
        return clienteRepository.findClienteById(id).orElse(null);
    }

    public List<Cliente> getClientes()
    {
        List<Cliente> clientes = clienteRepository.findAll();
        System.out.println("Service-Clientes: " + clientes.size());
        return clientes;
    }

    public void deleteCliente(Integer id)
    {
        System.out.println("Service-DeleteCliente: " + id);
        clienteRepository.deleteClienteById(id);
    }

    //------------------------------------------------------------------------------------------------------------------
    // Productos
    //------------------------------------------------------------------------------------------------------------------
    public void addProducto(Producto producto)
    {
        System.out.println("Service-AddProducto: " + producto.toString());
        productoRepository.save(producto);
    }

    public Producto getProducto(Integer id)
    {
        return productoRepository.findProductoById(id).orElse(null);
    }

    public List<Producto> getProductos()
    {
        List<Producto> productos = productoRepository.findAll();
        System.out.println("Service-Productos: " + productos.size());
        return productos;
    }

    public void deleteProducto(Integer id)
    {
        System.out.println("Service-DeleteProducto: " + id);
        productoRepository.deleteProductoById(id);
    }
}
