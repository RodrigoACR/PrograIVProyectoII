package org.example.backend.logic.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
@Table(name = "cliente")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idreceptor", nullable = false)
    private Integer id;

    @Size(max = 45)
    @Column(name = "nombre", length = 45)
    private String nombre;

    @Size(max = 16)
    @NotNull
    @Column(name = "TipoIdentificacion", nullable = false, length = 16)
    private String tipoIdentificacion;

    @Size(max = 12)
    @Column(name = "NumeroIdentificacion", length = 12)
    private String numeroIdentificacion;

    @Size(max = 12)
    @Column(name = "telefono", length = 12)
    private String telefono;

    @Size(max = 128)
    @Column(name = "correoelectronico", length = 128)
    private String correoelectronico;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idemisor")
    private Emisor idemisor;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTipoIdentificacion() {
        return tipoIdentificacion;
    }

    public void setTipoIdentificacion(String tipoIdentificacion) {
        this.tipoIdentificacion = tipoIdentificacion;
    }

    public String getNumeroIdentificacion() {
        return numeroIdentificacion;
    }

    public void setNumeroIdentificacion(String numeroIdentificacion) {
        this.numeroIdentificacion = numeroIdentificacion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreoelectronico() {
        return correoelectronico;
    }

    public void setCorreoelectronico(String correoelectronico) {
        this.correoelectronico = correoelectronico;
    }

    public Emisor getIdemisor() {
        return idemisor;
    }

    public void setIdemisor(Emisor idemisor) {
        this.idemisor = idemisor;
    }

    @Override
    public String toString() {
        return "Cliente{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", tipoIdentificacion='" + tipoIdentificacion + '\'' +
                ", numeroIdentificacion='" + numeroIdentificacion + '\'' +
                ", telefono='" + telefono + '\'' +
                ", correoelectronico='" + correoelectronico + '\'' +
                ", idemisor=" + idemisor +
                '}';
    }
}