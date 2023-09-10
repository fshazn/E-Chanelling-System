/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.User.Controller;

import com.example.User.Entity.DocSpecialization;
import com.example.User.Service.DocSpecializationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *
 * @author fathima shazna
 */
@RestController
@CrossOrigin("http://localhost:3000")
public class DocSpecializationController {
    
     @Autowired
    private DocSpecializationService docSpecializationService;



      @GetMapping(path = "/specializations/{id}")
    public DocSpecialization getSpecializationById(@PathVariable int id){
        return docSpecializationService.getSpecializationById(id);
    }

    @GetMapping(path = "/specializations")
    public List<DocSpecialization> getAllSpecs(){
          return docSpecializationService.getAllSpecs();
    }
    
    @PostMapping(path = "/specializations")
    public DocSpecialization createSpecialization(@RequestBody DocSpecialization specialization){
        return docSpecializationService.createSpecialization(specialization);
    }
}
