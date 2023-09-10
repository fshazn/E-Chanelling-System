package com.example.Treatment.Service;

import com.example.Treatment.Entity.Prescription;
import com.example.Treatment.Repository.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrescriptionService {
    @Autowired
    public PrescriptionRepository prescriptionRepository;

    public List<Prescription> getAllPrescriptions() {
        return prescriptionRepository.findAll();
    }

    public Prescription createPrescription(Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    public void deletePrescriptionById(int id) {
        prescriptionRepository.deleteById(id);
    }
    public List<Prescription> getAllPrescriptionsForGivenDoctor(int doctorId) {
        return prescriptionRepository.getAllPrescriptionsForGivenDoctor(doctorId);
    }


}
