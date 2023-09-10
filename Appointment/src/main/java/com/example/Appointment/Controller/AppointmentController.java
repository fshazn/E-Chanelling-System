package com.example.Appointment.Controller;

import com.example.Appointment.Entity.Appointment;
import com.example.Appointment.Service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class AppointmentController {
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    AppointmentService appointmentService;

    @GetMapping(path = "/appointments/{contact}")
    public List<Appointment> getAllAppointmentsForGivenContactNumber(@PathVariable int contact) {
        return appointmentService.getAllAppointmentsForGivenContactNumber(contact);
    }
    @GetMapping(path = "/appointments/{appointmentId}/details")
    public Appointment getAppointmentByAppointmentId(@PathVariable int appointmentId){
        return appointmentService.getAppointmentByAppointmentId(appointmentId);
    }
    @GetMapping(path = "/appointments/schedules/{scheduleId}")
    public List<Appointment> getAllAppointmentsForGivenSchedule(@PathVariable int scheduleId) {
        return appointmentService.getAllAppointmentForGivenSchedule(scheduleId);
    }
    @GetMapping(path = "/appointments/{scheduleId}/count")
    public Long getCountOfAllAppointmentsForGivenSchedule(@PathVariable int scheduleId){
        return appointmentService.getCountOfAllAppointmentsForGivenSchedule(scheduleId);
    }
    @GetMapping(path = "/appointments/count")
    public Long getAppointmentCount(){
        return appointmentService.getAppointmentCount();
    }
    @PostMapping(path = "/appointments")
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentService.createAppointment(appointment);
    }

    @DeleteMapping(path = "/schedules/appointments/{id}")
    public void deleteAppointmentById(@PathVariable int id) {
        appointmentService.deleteAppointmentById(id);
    }

    @GetMapping(path = "/appointments/doctors/{contact}")
    public List<Object> getDoctorIdForGivenAppointment(@PathVariable int contact) {
        List<Object> doctorNameList = new ArrayList<>();
        List<String> idList = appointmentService.getDoctorIdForGivenAppointment(contact);
        for (int i = 0; i < idList.size(); i++) {
            int doctorId = Integer.parseInt(idList.get(i));
            String url = "http://localhost:8081/doctors/" + doctorId + "/names";
            Object doctorName = restTemplate.getForObject(url, Object.class);
            doctorNameList.add(doctorName);
        }
        return doctorNameList;
    }

    @GetMapping(path = "/appointments/schedules/{contact}/details")
    public List<Object> getScheduleDetailsForGivenAppointment(@PathVariable int contact) {
        List<Object> scheduleList = new ArrayList<>();
        List<String> idList = appointmentService.getScheduleDetailsForGivenAppointment(contact);
        for (int i = 0; i < idList.size(); i++) {
            int scheduleId = Integer.parseInt(idList.get(i));
            String url = "http://localhost:8080/schedules/" + scheduleId + "/details";
            Object schedule = restTemplate.getForObject(url, Object.class);
            scheduleList.add(schedule);
        }
        return scheduleList;
    }
}
