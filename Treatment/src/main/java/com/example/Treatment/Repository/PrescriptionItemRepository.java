package com.example.Treatment.Repository;

import com.example.Treatment.Entity.PrescriptionItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PrescriptionItemRepository extends JpaRepository<PrescriptionItem,Integer> {
    @Query("Select u from PrescriptionItem u where u.appointmentId=?1")
    public List<PrescriptionItem> getAllItemsForGivenPrescription(int appointmentId);

    @Query("Select u.medicineId from PrescriptionItem u where u.appointmentId=?1")
    public List<String> getAllMedicineIdForGivenPrescription(int appointmentId);
}
