package com.example.Treatment.Repository;

import com.example.Treatment.Entity.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrescriptionRepository extends JpaRepository<Prescription,Integer> {
    @Query("Select u from prescription u where u.doctorId=?1")
    public List<Prescription>getAllPrescriptionsForGivenDoctor(int doctorId);



}


