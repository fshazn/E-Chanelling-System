package com.example.Treatment.Controller;

import com.example.Treatment.Entity.Medicine;
import com.example.Treatment.Service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class MedicineController {
    @Autowired
    private MedicineService medicineService;

    @GetMapping(path ="/medicines")
    public List<Medicine> getAllMedicines(){return medicineService.getAllMedicine();}

    @GetMapping(path="/medicines/{id}")
    public Medicine getMedicineById(@PathVariable int id){return medicineService.getMedicineById(id);}

    @PostMapping(path="/medicines")
    public Medicine addMedicine(@RequestBody Medicine medicine){return medicineService.addMedicine(medicine);}

    @PutMapping(path="/medicines")
    public Medicine updateMedicine(@RequestBody Medicine medicine){return medicineService.updateMedicine(medicine);}

    @DeleteMapping(path="/medicines/{id}")
    public void deleteMedicineById(@PathVariable int id){medicineService.deleteMedicineById(id);}

    @GetMapping(path = "/medicines/{name}/details")
    public Integer getAllMedicinesWithDetails(@PathVariable String name)
    {return medicineService.getAllMedicinesWithDetails(name);}

    @GetMapping(path = "/medicines/{id}/names")
    public List<Object> getAllMedicineNamesForGivenMedicineId(@PathVariable int id)
    {return medicineService.getAllMedicineNamesForGivenMedicineId(id);}
}
