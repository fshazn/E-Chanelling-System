package com.example.Treatment.Service;

import com.example.Treatment.Entity.Prescription;
import com.example.Treatment.Entity.PrescriptionItem;
import com.example.Treatment.Repository.PrescriptionItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrescriptionItemService {
    @Autowired
    public PrescriptionItemRepository prescriptionItemRepository;

    public PrescriptionItem createPrescriptionItem(PrescriptionItem prescriptionItem){
        return prescriptionItemRepository.save(prescriptionItem);
    }
    public List<PrescriptionItem> getAllItemsForGivenPrescription(int appointmentId) {
        return prescriptionItemRepository.getAllItemsForGivenPrescription(appointmentId);
    }
    public void deletePrescriptionItemsById(int appointmentId){
        prescriptionItemRepository.deleteById(appointmentId);
    }

    public List<String> getAllMedicineIdForGivenPrescription(int appointmentId){
        return prescriptionItemRepository.getAllMedicineIdForGivenPrescription(appointmentId);
    }



}
