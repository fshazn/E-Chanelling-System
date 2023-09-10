/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.User.Service;

import com.example.User.Entity.Admin;
import com.example.User.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author fathima shazna
 */@Service
public class AdminService {
    
     @Autowired
    public AdminRepository adminRepository;
    
    public List<Admin> getAllAdmins(){
        return adminRepository.findAll();
    }
    
    public Admin getAdminById(int adminId){
        Optional<Admin> adminOptional = adminRepository.findById(adminId);
        return adminOptional.get();
    }
    
    public Admin createAdmin(Admin admin){
        return adminRepository.save(admin);
    }
    
     public Admin updateAdmin(Admin admin){
        return adminRepository.save(admin);
    }
     
     public void deleteAdminById(int adminId){
        adminRepository.deleteById(adminId);
    }
     
      public Admin fetchAdminByUsernameAndPassword(String username,String password){
         return adminRepository.findByUsernameAndPassword(username, password);
     }
}
