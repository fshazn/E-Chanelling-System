/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.User.Service;

import com.example.User.Entity.DocSpecialization;
import com.example.User.Repository.DocSpecializationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author fathima shazna
 */
@Service
public class DocSpecializationService {
    
    @Autowired
    public DocSpecializationRepository docSpecializationRepository;
    
     public DocSpecialization getSpecializationById(int id){
        Optional<DocSpecialization> specializationOptional = docSpecializationRepository.findById(id);
        return specializationOptional.get();
    }
     public List<DocSpecialization> getAllSpecs(){
         return docSpecializationRepository.findAll();
     }
      public DocSpecialization createSpecialization(DocSpecialization specialization){
        return docSpecializationRepository.save(specialization);
    }
}
