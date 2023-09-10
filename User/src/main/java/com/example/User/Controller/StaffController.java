/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.User.Controller;

import com.example.User.Entity.Staff;
import com.example.User.Service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *
 * @author fathima shazna
 */
@RestController
@CrossOrigin("http://localhost:3000")
public class StaffController {
    
     @Autowired
    private StaffService staffService;
    
    @GetMapping(path = "/staffs")
    public List<Staff> getAllStaffs(){
        return staffService.getAllStaffs();
    }
    
    @GetMapping(path = "/staffs/{staffId}")
    public Staff getStaffById(@PathVariable int staffId){
        return staffService.getStaffById(staffId);
    }
    
    @PostMapping(path = "/staffs")
    public Staff createStaff(@RequestBody Staff staff){
        return staffService.createStaff(staff);
    }

    @GetMapping(path = "/staffs/count")
    public Long getAllStaffCount(){
        return staffService.getAllStaffCount();
    }

    @PutMapping(path = "/staffs")
    public Staff updateStaff(@RequestBody Staff staff){
        return staffService.updateStaff(staff);
    }
    
    @DeleteMapping(path = "/staffs/{staffId}")
    public void deleteStaffById(@PathVariable int staffId){
        staffService.deleteStaffById(staffId);
    }
    
     @PostMapping(path="/staff-login")
    public Staff staffLogin(@RequestBody Staff staff) throws Exception{
        String tempUsername = staff.getUsername();
        String tempPassword = staff.getPassword();
    
        if(tempUsername != null && tempPassword != null){
            staff =staffService.fetchStaffByUsernameAndPassword(tempUsername, tempPassword);
        }
        if(staff == null){
            throw new Exception("Input Login Information");
        }
        return staff;
    }
}
