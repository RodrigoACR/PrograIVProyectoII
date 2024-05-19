package org.example.backend.logic.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "emisor")
public class Emisor {
    @Id
    @Column(name = "id_emisor", nullable = false)
    private Integer id;

    @Size(max = 45)
    @NotNull
    @Column(name = "nombre", nullable = false, length = 45)
    private String nombre;

    @Size(max = 16)
    @NotNull
    @Column(name = "tipo_identificacion", nullable = false, length = 16)
    private String tipoIdentificacion;

    @Size(max = 12)
    @NotNull
    @Column(name = "numero_identificacion", nullable = false, length = 12)
    private String numeroIdentificacion;

    @Size(max = 45)
    @NotNull
    @Column(name = "nombre_comercial", nullable = false, length = 45)
    private String nombreComercial;

    @Size(max = 60)
    @NotNull
    @Column(name = "direccion", nullable = false, length = 60)
    private String direccion;

    @Size(max = 12)
    @NotNull
    @Column(name = "telefono", nullable = false, length = 12)
    private String telefono;

    @Size(max = 128)
    @NotNull
    @Column(name = "correo_electronico", nullable = false, length = 128)
    private String correoElectronico;

    @Size(max = 64)
    @Column(name = "clave", length = 64)
    private String clave;

    public Emisor(int i) {
    }

    public Emisor() {

    }

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

    public String getNombreComercial() {
        return nombreComercial;
    }

    public void setNombreComercial(String nombreComercial) {
        this.nombreComercial = nombreComercial;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    @Override
    public String toString() {
        return "Emisor{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", tipoIdentificacion='" + tipoIdentificacion + '\'' +
                ", numeroIdentificacion='" + numeroIdentificacion + '\'' +
                ", nombreComercial='" + nombreComercial + '\'' +
                ", direccion='" + direccion + '\'' +
                ", telefono='" + telefono + '\'' +
                ", correoElectronico='" + correoElectronico + '\'' +
                ", clave='" + clave + '\'' +
                '}';
    }
}