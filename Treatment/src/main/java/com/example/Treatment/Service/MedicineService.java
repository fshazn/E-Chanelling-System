package com.example.Treatment.Service;

import com.example.Treatment.Entity.Medicine;
import com.example.Treatment.Repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicineService {

    @Autowired
    public MedicineRepository medicineRepository;
    public List<Medicine> getAllMedicine(){return medicineRepository.findAll();}

    public Medicine getMedicineById(int id){
        Optional<Medicine> medicineOptional = medicineRepository.findById(id);
        return medicineOptional.get();
    }
    public Medicine addMedicine(Medicine medicine){return medicineRepository.save(medicine);}

    public Medicine updateMedicine(Medicine medicine){return medicineRepository.save(medicine);}

    public void deleteMedicineById(int id){medicineRepository.deleteById(id);}

    public Integer getAllMedicinesWithDetails(String name){
    return medicineRepository.getAllMedicinesWithDetails(name);
    }
    public List<Object> getAllMedicineNamesForGivenMedicineId(int id){
        return medicineRepository.getAllMedicineNamesForGivenMedicineId(id);
    }
}
