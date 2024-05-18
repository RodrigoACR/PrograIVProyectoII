package org.example.backend.logic.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "emisoractividad")
public class Emisoractividad {
    @Id
    @Column(name = "idemisoractividad", nullable = false)
    private Integer id;

    @Column(name = "idemisor")
    private Integer idemisor;

    @Size(max = 6)
    @Column(name = "idactividad", length = 6)
    private String idactividad;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdemisor() {
        return idemisor;
    }

    public void setIdemisor(Integer idemisor) {
        this.idemisor = idemisor;
    }

    public String getIdactividad() {
        return idactividad;
    }

    public void setIdactividad(String idactividad) {
        this.idactividad = idactividad;
    }

}