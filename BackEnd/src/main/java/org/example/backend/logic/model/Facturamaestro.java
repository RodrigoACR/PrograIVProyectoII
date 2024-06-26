package org.example.backend.logic.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.Instant;

@Entity
@Table(name = "facturamaestro")
public class Facturamaestro {
    @Id
    @Column(name = "idfacturamaestro", nullable = false)
    private Long id;

    @Size(max = 45)
    @NotNull
    @Column(name = "consecutivo", nullable = false, length = 45)
    private String consecutivo;

    @NotNull
    @Column(name = "fecha", nullable = false)
    private Instant fecha;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_emisor")
    private Emisor idEmisor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_receptor")
    private Cliente idReceptor;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getConsecutivo() {
        return consecutivo;
    }

    public void setConsecutivo(String consecutivo) {
        this.consecutivo = consecutivo;
    }

    public Instant getFecha() {
        return fecha;
    }

    public void setFecha(Instant fecha) {
        this.fecha = fecha;
    }

    public Emisor getIdEmisor() {
        return idEmisor;
    }

    public void setIdEmisor(Emisor idEmisor) {
        this.idEmisor = idEmisor;
    }

    public Cliente getIdReceptor() {
        return idReceptor;
    }

    public void setIdReceptor(Cliente idReceptor) {
        this.idReceptor = idReceptor;
    }

}