package org.example.backend.data.repository;

import jakarta.transaction.Transactional;
import org.example.backend.logic.model.Cliente;
import org.example.backend.logic.model.Emisor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, String>
{
    //------------------------------------------------------------------------------------------------------------------
    // Delete by Id
    //------------------------------------------------------------------------------------------------------------------
    @Modifying
    @Transactional
    @Query("DELETE FROM Cliente c WHERE c.id = :id")
    void deleteClienteById(@Param("id") Integer id);
}
