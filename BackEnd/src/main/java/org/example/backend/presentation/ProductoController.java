package org.example.backend.presentation;

import jakarta.annotation.security.PermitAll;
import org.example.backend.logic.Service;
import org.example.backend.logic.model.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@PermitAll
@RestController
@RequestMapping("/api/producto")
public class ProductoController
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
    public void addProducto(@RequestBody Producto producto)
    {
        System.out.println("Controller-AddProducto: " + producto.toString());
        service.addProducto(producto);
    }

    @GetMapping("{id}")
    public Producto getProductoById(@PathVariable("id") Integer id)
    {
        return service.getProducto(id);
    }

    @GetMapping
    public List<Producto> getClientes()
    {
        List<Producto> productos = service.getProductos();
        System.out.println("Controller-Productos: " + productos.size());

        return productos;
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProducto(@PathVariable("id") Integer id)
    {
        System.out.println("Controller-DeleteProducto: " + id);
        service.deleteProducto(id);
        return ResponseEntity.ok("Producto eliminado");
    }
}
