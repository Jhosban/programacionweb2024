package com.unac.crudProgramacionWeb.dto;

import lombok.*;

import java.util.Date;

//esta sera nuestra fachada la cual utilizaremos para no acceder a los datos de manera directa
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Integer idUser;
    private String name;
    private String email;
    private Date birthdate;

}

