package com.unac.crudProgramacionWeb.dto;

import lombok.*;

// esto los que nos va a permitir es anñadir mensajes de confirmacion al reponder los controles
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDTO {
    private int status;
    private String message;
    private Object result;

}
