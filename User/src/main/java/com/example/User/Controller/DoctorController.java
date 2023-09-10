/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.User.Controller;

import com.example.User.Entity.Doctor;
import com.example.User.Service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author fathima shazna
 */
@RestController
@CrossOrigin("http://localhost:3000")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping(path = "/doctors")
    public List<Doctor> getAllDoctors() {
        return doctorService.getAllDoctors();
    }

    @GetMapping(path = "/doctors/{doctorId}")
    public Doctor getDoctorById(@PathVariable int doctorId) {
        return doctorService.getDoctorById(doctorId);
    }

    @GetMapping(path = "/doctors/specializations/{specializationId}")
    public List<Doctor> getAllDoctorsBySpecialization(@PathVariable int specializationId) {
        return doctorService.getAllDoctorsBySpecialization(specializationId);
    }

    @GetMapping(path = "/doctors/count")
    public Long getAmountOfDoctors() {
        return doctorService.getAmountOfDoctors();
    }

    @PostMapping(path = "/doctors")
    public Doctor createDoctor(@RequestBody Doctor doctor) {
        return doctorService.createDoctor(doctor);
    }

    @PutMapping(path = "/doctors")
    public Doctor updateDoctor(@RequestBody Doctor doctor) {
        return doctorService.updateDoctor(doctor);
    }

    @DeleteMapping(path = "/doctors/{doctor_id}")
    public void deleteDoctorById(@PathVariable int doctorId) {
        doctorService.deleteDoctorById(doctorId);
    }

    @GetMapping("doctors/{doctorId}/names")
    public List<Object> getDoctorNameForGivenDoctorId(@PathVariable int doctorId) {
        return doctorService.getDoctorNameForGivenDoctorId(doctorId);
    }

    @PostMapping(path = "/doctor-login")
    public Doctor doctorLogin(@RequestBody Doctor doctor) throws Exception {
        String tempUsername = doctor.getUsername();
        String tempPassword = doctor.getPassword();

        if (tempUsername != null && tempPassword != null) {
            doctor = doctorService.fetchDoctorByUsernameAndPassword(tempUsername, tempPassword);
        }
        if (doctor == null) {
            throw new Exception("Input Login Information");
        }
        return doctor;
    }
}
