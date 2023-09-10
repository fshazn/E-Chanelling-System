package com.example.Appointment.Repository;

import com.example.Appointment.Entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {

    @Query("Select u from schedule u where u.doctorId=?1")
    public List<Schedule> getScheduleByDoctorId(int doctorId);

    @Query("Select u from schedule u where u.id=?1")
    public List<Schedule> getSchedulesForGivenId(int id);

    @Query("Select u.date,u.time from schedule u where u.id=?1")
    public List<Object> getAllScheduleDetailsForGivenScheduleId(int id);
}
