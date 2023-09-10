/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.User.Controller;

import com.example.User.Entity.Admin;
import com.example.User.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *
 * @author fathima shazna
 */@RestController
@CrossOrigin("http://localhost:3000")
public class AdminController {
    
     @Autowired
    private AdminService adminService;
    
    @GetMapping(path = "/admins")
    public List<Admin> getAllAdmins(){
        return adminService.getAllAdmins();
    }
    
    @GetMapping(path = "/admins/{adminId}")
    public Admin getAdminById(@PathVariable int adminId){
        return adminService.getAdminById(adminId);
    }
    
    @PostMapping(path = "/admins")
    public Admin createAdmin(@RequestBody Admin admin){
        return adminService.createAdmin(admin);
    }
    
    @PutMapping(path = "/admins")
    public Admin updateAdmin(@RequestBody Admin admin){
        return adminService.updateAdmin(admin);
    }
    
    @DeleteMapping(path = "/admins/{adminId}")
    public void deleteAdminById(@PathVariable int adminId){
        adminService.deleteAdminById(adminId);
    }
    
    @PostMapping(path="/admin-login")
    public Admin adminLogin(@RequestBody Admin admin) throws Exception{
        String tempUsername = admin.getUsername();
        String tempPassword = admin.getPassword();
    
        if(tempUsername != null && tempPassword != null){
            admin =adminService.fetchAdminByUsernameAndPassword(tempUsername, tempPassword);
        }
        if(admin == null){
            throw new Exception("Input Login Information");
        }
        return admin;
    }
}
