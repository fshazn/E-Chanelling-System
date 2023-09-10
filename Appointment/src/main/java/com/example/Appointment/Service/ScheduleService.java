package com.example.Appointment.Service;

import com.example.Appointment.Entity.Schedule;
import com.example.Appointment.Repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScheduleService {
    @Autowired
    ScheduleRepository scheduleRepository;

    public List<Schedule> getScheduleListForGivenDoctor(int doctorId) {
        return scheduleRepository.getScheduleByDoctorId(doctorId);
    }

    public List<Schedule> getSchedulesForGivenId(int id) {
        return scheduleRepository.getSchedulesForGivenId(id);
    }

    public Long getScheduleCount() {
        return scheduleRepository.count();
    }

    public Schedule createScheduleForGivenDoctor(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    public Schedule updateSchedule(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    public void deleteScheduleById(int id) {
        scheduleRepository.deleteById(id);
    }

    public List<Object> getAllScheduleDetailsForGivenScheduleId(int scheduleId) {
        return scheduleRepository.getAllScheduleDetailsForGivenScheduleId(scheduleId);
    }
}
