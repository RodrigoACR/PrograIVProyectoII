package org.example.backend.logic.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "producto")
public class Producto {
    @Id
    @Column(name = "idproducto", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idactividad")
    private Actividad idactividad;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_emisor")
    private Emisor idEmisor;

    @Size(max = 45)
    @Column(name = "descripcion", length = 45)
    private String descripcion;

    @Column(name = "precio")
    private Long precio;

    @Size(max = 45)
    @Column(name = "unidadmedida", length = 45)
    private String unidadmedida;

    //------------------------------------------------------------------------------------------------------------------
    // Getters and Setters
    //------------------------------------------------------------------------------------------------------------------

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Actividad getIdactividad() {
        return idactividad;
    }

    public void setIdactividad(Actividad idactividad) {
        this.idactividad = idactividad;
    }

    public Emisor getIdEmisor() {
        return idEmisor;
    }

    public void setIdEmisor(Emisor idEmisor) {
        this.idEmisor = idEmisor;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Long getPrecio() {
        return precio;
    }

    public void setPrecio(Long precio) {
        this.precio = precio;
    }

    public String getUnidadmedida() {
        return unidadmedida;
    }

    public void setUnidadmedida(String unidadmedida) {
        this.unidadmedida = unidadmedida;
    }

    @Override
    public String toString() {
        return "Producto{" +
                "id=" + id +
                ", idactividad=" + idactividad +
                ", idEmisor=" + idEmisor +
                ", descripcion='" + descripcion + '\'' +
                ", precio=" + precio +
                ", unidadmedida='" + unidadmedida + '\'' +
                '}';
    }
}