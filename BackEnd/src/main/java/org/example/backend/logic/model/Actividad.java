package org.example.backend.logic.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "actividad")
public class Actividad {
    @Id
    @Size(max = 6)
    @Column(name = "idactividad", nullable = false, length = 6)
    private String idactividad;

    @Size(max = 45)
    @Column(name = "descripcion", length = 45)
    private String descripcion;

    public String getIdactividad() {
        return idactividad;
    }

    public void setIdactividad(String idactividad) {
        this.idactividad = idactividad;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

}