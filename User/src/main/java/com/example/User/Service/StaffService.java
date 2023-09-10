/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.User.Service;


import com.example.User.Entity.Staff;
import com.example.User.Repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author fathima shazna
 */
@Service
public class StaffService {
    
    @Autowired
    public StaffRepository staffRepository;
    
    public List<Staff> getAllStaffs(){
        return staffRepository.findAll();
    }
    
    public Staff getStaffById(int staffId){
        Optional<Staff> staffOptional = staffRepository.findById(staffId);
        return staffOptional.get();
    }

    public Long getAllStaffCount(){
        return staffRepository.count();
    }
    public Staff createStaff(Staff staff){
        return staffRepository.save(staff);
    }
    
     public Staff updateStaff(Staff staff){
        return staffRepository.save(staff);
    }
     
     public void deleteStaffById(int staffId){
        staffRepository.deleteById(staffId);
    }
     
      public Staff fetchStaffByUsernameAndPassword(String username,String password){
         return staffRepository.findByUsernameAndPassword(username, password);
     }
}
