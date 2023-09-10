/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.User.Repository;
import com.example.User.Entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *
 * @author fathima shazna
 */
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer>{
    public Doctor findByUsernameAndPassword(String username, String password);

    @Query("Select u from Doctor u where u.specializationId=?1")
    public List<Doctor> getAllDoctorsBySpecialization(int specializationId);

    @Query("Select u.firstName , u.lastName from Doctor u where u.doctorId=?1")
    public List<Object> getDoctorNameForGivenDoctorId(int doctorId);
}
