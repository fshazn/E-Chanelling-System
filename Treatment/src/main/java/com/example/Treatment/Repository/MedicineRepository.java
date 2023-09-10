package com.example.Treatment.Repository;

import com.example.Treatment.Entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MedicineRepository extends JpaRepository<Medicine,Integer> {
@Query("Select u.id from Medicine u where u.name=?1")
    public Integer getAllMedicinesWithDetails(String name);
    @Query("Select u.name,u.dosage from Medicine u where u.id=?1")
    public List<Object> getAllMedicineNamesForGivenMedicineId(int id);
}
