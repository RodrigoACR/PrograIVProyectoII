package org.example.backend.logic.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "facturadetalle")
public class Facturadetalle {
    @Id
    @Column(name = "idfacturadetalle", nullable = false)
    private Long id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idfacturamaestro", nullable = false)
    private Facturamaestro idfacturamaestro;

    @Column(name = "lineadetalle")
    private Short lineadetalle;

    @Column(name = "idproducto")
    private Integer idproducto;

    @Column(name = "cantidad")
    private Short cantidad;

    @Size(max = 45)
    @Column(name = "detalle", length = 45)
    private String detalle;

    @Column(name = "preciounitario")
    private Long preciounitario;

    @Column(name = "montototal")
    private Long montototal;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Facturamaestro getIdfacturamaestro() {
        return idfacturamaestro;
    }

    public void setIdfacturamaestro(Facturamaestro idfacturamaestro) {
        this.idfacturamaestro = idfacturamaestro;
    }

    public Short getLineadetalle() {
        return lineadetalle;
    }

    public void setLineadetalle(Short lineadetalle) {
        this.lineadetalle = lineadetalle;
    }

    public Integer getIdproducto() {
        return idproducto;
    }

    public void setIdproducto(Integer idproducto) {
        this.idproducto = idproducto;
    }

    public Short getCantidad() {
        return cantidad;
    }

    public void setCantidad(Short cantidad) {
        this.cantidad = cantidad;
    }

    public String getDetalle() {
        return detalle;
    }

    public void setDetalle(String detalle) {
        this.detalle = detalle;
    }

    public Long getPreciounitario() {
        return preciounitario;
    }

    public void setPreciounitario(Long preciounitario) {
        this.preciounitario = preciounitario;
    }

    public Long getMontototal() {
        return montototal;
    }

    public void setMontototal(Long montototal) {
        this.montototal = montototal;
    }

}