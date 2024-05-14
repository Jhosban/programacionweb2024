package com.unac.crudProgramacionWeb.services;

import com.unac.crudProgramacionWeb.dto.UserDTO;

import java.util.List;

//en esta interfaz se declararan los servicios que hagamos la implemntacion y servira como fachada

public interface UserService {
    UserDTO saveUser(UserDTO userDTO);

    List<UserDTO> getUsers();

    UserDTO getUserById(Integer id);

    void deleteUser(Integer id);

    UserDTO getUserByName(String name);

    UserDTO getUserByNameHSQL(String name);

    UserDTO updateUser(Integer id, UserDTO userDTO);

}
