package com.example.Treatment.Controller;

import com.example.Treatment.Entity.Prescription;
import com.example.Treatment.Service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PrescriptionController {
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    public PrescriptionService prescriptionService;

    @GetMapping(path="/prescriptions")
    public List<Prescription> getAllPrescriptions(){
        return prescriptionService.getAllPrescriptions();
    }

    @PostMapping("/prescriptions")
    public Prescription createPrescription(@RequestBody Prescription prescription){
        return prescriptionService.createPrescription(prescription);
    }
    @DeleteMapping(path="/prescriptions/{id}")
    public void deletePrescriptionsById(@PathVariable int id){prescriptionService.deletePrescriptionById(id);}

    //get the prescription for a given doctor id//
    @GetMapping(path = "/doctors/{doctorId}/prescriptions")
    public List<Prescription> getAllPrescriptionsForGivenDoctor(@PathVariable int doctorId){
        return prescriptionService.getAllPrescriptionsForGivenDoctor(doctorId);
    }





}
