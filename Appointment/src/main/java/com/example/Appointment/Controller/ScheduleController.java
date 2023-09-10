package com.example.Appointment.Controller;

import com.example.Appointment.Entity.Schedule;
import com.example.Appointment.Service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ScheduleController {
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    ScheduleService scheduleService;

    @GetMapping(path = "/schedules/{doctorId}")
    public List<Schedule> getScheduleListForGivenDoctor(@PathVariable int doctorId){
        return scheduleService.getScheduleListForGivenDoctor(doctorId);
    }
    @GetMapping(path="/schedules/{id}/update")
    public List<Schedule> getSchedulesForGivenId(@PathVariable int id){
        return scheduleService.getSchedulesForGivenId(id);
    }
    @GetMapping(path = "/schedules/count")
    public Long getScheduleCount(){
        return scheduleService.getScheduleCount();
    }
    @PostMapping(path = "/schedules")
    public Schedule createScheduleForGivenDoctor(@RequestBody Schedule schedule){
        return scheduleService.createScheduleForGivenDoctor(schedule);
    }
    @PutMapping(path = "/schedules")
    public Schedule updateSchedule(@RequestBody Schedule schedule){
        return scheduleService.updateSchedule(schedule);
    }
    @DeleteMapping(path = "/schedules/{id}")
    public void deleteScheduleById(@PathVariable int id){
        scheduleService.deleteScheduleById(id);
    }

    @GetMapping("/schedules/{id}/details")
    public List<Object> getAllScheduleDetailsForGivenScheduleId(@PathVariable int id){
        return scheduleService.getAllScheduleDetailsForGivenScheduleId(id);
    }

}
