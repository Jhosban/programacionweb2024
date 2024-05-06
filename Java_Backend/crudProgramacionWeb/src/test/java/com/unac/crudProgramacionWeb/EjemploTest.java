package com.unac.crudProgramacionWeb;

import com.unac.crudProgramacionWeb.dao.UserDAO;
import com.unac.crudProgramacionWeb.dto.UserDTO;
import com.unac.crudProgramacionWeb.entity.UserEntity;
import com.unac.crudProgramacionWeb.services.impl.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class EjemploTest {
    @MockBean
    private UserDAO userDAO;
    @Autowired
    private UserServiceImpl userService;
    private List<UserEntity> userList = new ArrayList<>();
    @BeforeEach
    void setUp() {
        UserEntity obj = new UserEntity();
        obj.setIdUser(1);
        obj.setName("test");
        obj.setEmail("test@example.com");
        obj.setBirthdate(new Date());
        userList.add(obj);
    }

    @Test
    @DisplayName("Sould get users")
    void listarDatos() {
        when(userDAO.findAll()).thenReturn(userList);
        List<UserDTO> users = userService.getUsers();
        assert users.size() == 1;
        assert users.get(0).getName().equals("test");
    }

    @Test
    @DisplayName("Sould save users")
    void saveUser() {
        UserEntity obj = new UserEntity();
        obj.setIdUser(1);
        obj.setName("test");
        obj.setEmail("test@example.com");
        obj.setBirthdate(new Date());

        UserDTO userDTO = new UserDTO();
        userDTO.setIdUser(1);
        userDTO.setName("test");
        userDTO.setEmail("test@example.com");
        userDTO.setBirthdate(new Date());

        when(userDAO.save(Mockito.any(UserEntity.class))).thenReturn(obj);

        UserDTO expected = userService.saveUser(userDTO);

        assert expected.getIdUser() == 1;
    }


}
