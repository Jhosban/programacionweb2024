package com.unac.crudProgramacionWeb.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;

//Lo primero sera crear una clase entidad que sera la base de nuestro proyecto importando lombok y jakarta
//importante agregar la implementacion de serializable
@Table(name = "users") //Esto hara la base de datos de la clase bajo el nombre users
@Entity //Definimos los datos de la clase
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity implements Serializable{
    // agredamos los datos que vamos a utilizar en la calse
    @Id
    @Column(name = "id_user")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUser;
    private String name;
    @Column(unique = true)
    private String email;
    @Temporal(TemporalType.DATE)
    private Date birthdate;

}
