package org.example.backend.data.repository;

import org.example.backend.logic.model.Emisor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmisorRepository extends JpaRepository<Emisor, String>
{
    //------------------------------------------------------------------------------------------------------------------
    // Find by Id
    //------------------------------------------------------------------------------------------------------------------
    @Query("SELECT e FROM Emisor e WHERE e.id = :id")
    Optional<Emisor> findEmisorById(@Param("id") Integer id);
}
