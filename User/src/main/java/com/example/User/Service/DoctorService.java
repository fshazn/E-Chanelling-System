/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.User.Service;

import com.example.User.Entity.Doctor;
import com.example.User.Repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author fathima shazna
 */
@Service
public class DoctorService {

    @Autowired
    public DoctorRepository doctorRepository;

    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    public List<Doctor> getAllDoctorsBySpecialization(int specializationId) {
        return doctorRepository.getAllDoctorsBySpecialization(specializationId);
    }

    public Doctor getDoctorById(int doctorId) {
        Optional<Doctor> doctorOptional = doctorRepository.findById(doctorId);
        return doctorOptional.get();
    }

    public Long getAmountOfDoctors(){
        return doctorRepository.count();
    }
    public Doctor createDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    public Doctor updateDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    public void deleteDoctorById(int doctorId) {
        doctorRepository.deleteById(doctorId);
    }

    public List<Object> getDoctorNameForGivenDoctorId(int doctorId) {
        return doctorRepository.getDoctorNameForGivenDoctorId(doctorId);
    }

    public Doctor fetchDoctorByUsernameAndPassword(String username, String password) {
        return doctorRepository.findByUsernameAndPassword(username, password);
    }

}
