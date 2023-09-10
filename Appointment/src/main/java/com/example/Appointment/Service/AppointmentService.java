package com.example.Appointment.Service;

import com.example.Appointment.Entity.Appointment;
import com.example.Appointment.Repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {
    @Autowired
    public AppointmentRepository appointmentRepository;

    public List<Appointment> getAllAppointmentForGivenSchedule(int scheduleId) {
        return appointmentRepository.getAllAppointmentsForGivenSchedule(scheduleId);
    }

    public List<Appointment> getAllAppointmentsForGivenContactNumber(int contact) {
        return appointmentRepository.getAllAppointmentsForGivenContactNumber(contact);
    }

    public Appointment getAppointmentByAppointmentId(int appointmentId) {
        Optional<Appointment> appointmentOptional = appointmentRepository.findById(appointmentId);
        return appointmentOptional.get();
    }

    public Long getAppointmentCount(){
        return appointmentRepository.count();
    }
    public List<String> getDoctorIdForGivenAppointment(int contact) {
        return appointmentRepository.getDoctorIdForGivenAppointment(contact);
    }

    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    public void deleteAppointmentById(int appointmentId) {
        appointmentRepository.deleteById(appointmentId);
    }

    public Long getCountOfAllAppointmentsForGivenSchedule(int scheduleId){
        return appointmentRepository.getCountOfAllAppointmentsForGivenSchedule(scheduleId);
    }
    public List<String> getScheduleDetailsForGivenAppointment(int contact) {
        return appointmentRepository.getScheduleDetailsForGivenAppointment(contact);
    }

}
