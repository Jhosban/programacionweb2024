package com.unac.crudProgramacionWeb.services.impl;

import com.unac.crudProgramacionWeb.dao.UserDAO;
import com.unac.crudProgramacionWeb.dto.UserDTO;
import com.unac.crudProgramacionWeb.entity.UserEntity;
import com.unac.crudProgramacionWeb.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

//Aqui seran la implementacion de de los servicios por lo tanto lo implementamos a UserService

@Service //importante para que lo pueda reconocer como servicios
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDAO userDAO; // Esto servira para poder acceder a la base de datos

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        UserEntity userEntity = UserEntity.builder()
                .idUser(userDTO.getIdUser())
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .birthdate(userDTO.getBirthdate())
                .build();
        UserEntity savedUser = userDAO.save(userEntity);
        return UserDTO.builder()
                .idUser(savedUser.getIdUser())
                .name(savedUser.getName())
                .email(savedUser.getEmail())
                .birthdate(savedUser.getBirthdate())
                .build();
    }

    @Override
    public List<UserDTO> getUsers() {
        List<UserEntity> userEntities = userDAO.findAll();
        return  userEntities.stream()
                .map(userEntity -> UserDTO.builder()
                        .idUser(userEntity.getIdUser())
                        .name(userEntity.getName())
                        .email(userEntity.getEmail())
                        .birthdate(userEntity.getBirthdate())
                        .build())
                .toList();
    }

    @Override
    public UserDTO getUserById(Integer id) {
        Optional<UserEntity> userEntity = userDAO.findById(id);
        return UserDTO.builder()
                .idUser(userEntity.get().getIdUser())
                .name(userEntity.get().getName())
                .email(userEntity.get().getEmail())
                .birthdate(userEntity.get().getBirthdate())
                .build();
    }

    @Override
    public void deleteUser(Integer id) {
        userDAO.deleteById(id);
    }

    @Override
    public UserDTO getUserByName(String name) {
        UserEntity userEntity = userDAO.findByName(name);
        return UserDTO.builder()
                .idUser(userEntity.getIdUser())
                .name(userEntity.getName())
                .email(userEntity.getEmail())
                .birthdate(userEntity.getBirthdate())
                .build();
    }

    @Override
    public UserDTO getUserByNameHSQL(String name) {
        List<Object[]> users = userDAO.findByUsername(name);
        UserDTO userDTO = new UserDTO();
        if (!users.isEmpty()) {
            userDTO.setIdUser((Integer) users.get(0)[0]);
            userDTO.setBirthdate((Date) users.get(0)[1]);
            userDTO.setEmail((String) users.get(0)[2]);
            userDTO.setName((String) users.get(0)[3]);
        }
        return userDTO;
    }

    @Override
    public UserDTO updateUser(Integer id, UserDTO userDTO) {
        Optional<UserEntity> userEntityOptional = userDAO.findById(id);
        UserEntity userEntity = userEntityOptional.get();
        userEntity.setName(userDTO.getName());
        userEntity.setEmail(userDTO.getEmail());
        userEntity.setBirthdate(userDTO.getBirthdate());
        UserEntity updatedUser = userDAO.save(userEntity);
        return UserDTO.builder()
                .idUser(updatedUser.getIdUser())
                .name(updatedUser.getName())
                .email(updatedUser.getEmail())
                .birthdate(updatedUser.getBirthdate())
                .build();
    }
}
