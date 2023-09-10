/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.User.Repository;

import com.example.User.Entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author fathima shazna
 */@Repository
public interface StaffRepository extends JpaRepository<Staff, Integer>{
      public Staff findByUsernameAndPassword(String username, String password);
}
