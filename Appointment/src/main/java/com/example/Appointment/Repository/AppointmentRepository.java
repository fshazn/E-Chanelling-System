package com.example.Appointment.Repository;

import com.example.Appointment.Entity.Appointment;
import com.example.Appointment.Entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {
    @Query("Select u from Appointment u where u.scheduleId=?1 ")
    public List<Appointment> getAllAppointmentsForGivenSchedule(int scheduleId);


    @Query("Select u.doctorId from Appointment u where u.contact =?1")
    public List<String> getDoctorIdForGivenAppointment(int contact);
    @Query("Select u from Appointment u where u.contact=?1")
    public List<Appointment> getAllAppointmentsForGivenContactNumber(int contact);
    @Query("Select COUNT (u.scheduleId ) from Appointment u where u.scheduleId=?1")
    public Long getCountOfAllAppointmentsForGivenSchedule(int scheduleId);
    @Query("Select u.scheduleId from Appointment u where u.contact =?1")
    public List<String> getScheduleDetailsForGivenAppointment(int contact);
}
