package com.unac.crudProgramacionWeb.dao;

import com.unac.crudProgramacionWeb.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

// Hacemos nuestra interfaz que se va a encargar de poder acceder a la base de datos
// Esta va a extender de jpaRepository y recibira la clase UserEntity y el tipo de dato del id

public interface UserDAO extends JpaRepository<UserEntity, Integer> {
    @Query(value = "SELECT u FROM UserEntity u WHERE u.name = ?1")
    UserEntity findByName(String name);

    @Query(value = "SELECT * FROM users WHERE name = ?1", nativeQuery = true)
    List<Object[]> findByUsername(String name);
}
