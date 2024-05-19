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
    @Column(name = "id_emisoractividad", nullable = false)
    private Integer id;

    @Column(name = "id_emisor")
    private Integer idEmisor;

    @Size(max = 6)
    @Column(name = "idactividad", length = 6)
    private String idactividad;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdEmisor() {
        return idEmisor;
    }

    public void setIdEmisor(Integer idEmisor) {
        this.idEmisor = idEmisor;
    }

    public String getIdactividad() {
        return idactividad;
    }

    public void setIdactividad(String idactividad) {
        this.idactividad = idactividad;
    }

}