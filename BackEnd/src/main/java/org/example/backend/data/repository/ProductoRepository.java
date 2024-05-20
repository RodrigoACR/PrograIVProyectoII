package org.example.backend.data.repository;

import jakarta.transaction.Transactional;
import org.example.backend.logic.model.Cliente;
import org.example.backend.logic.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, String>
{
    //------------------------------------------------------------------------------------------------------------------
    // Find by Id
    //------------------------------------------------------------------------------------------------------------------
    @Query("SELECT e FROM Producto e WHERE e.id = :id")
    Optional<Producto> findProductoById(@Param("id") Integer id);

    //------------------------------------------------------------------------------------------------------------------
    // Delete by Id
    //------------------------------------------------------------------------------------------------------------------
    @Modifying
    @Transactional
    @Query("DELETE FROM Producto c WHERE c.id = :id")
    void deleteProductoById(@Param("id") Integer id);
}
