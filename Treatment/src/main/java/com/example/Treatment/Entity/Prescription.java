package com.example.Treatment.Entity;

import javax.persistence.*;

@Entity(name="prescription")
@Table(name="prescription")
public class Prescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "doctor_id")
    private int doctorId;

    @Column(name = "schedule_id")
    private int scheduleId;

    @Column(name = "appointment_id")
    private int appointmentId;

    public int getScheduleId() {
        return scheduleId;
    }

    public void setScheduleId(int scheduleId) {
        this.scheduleId = scheduleId;
    }

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
    }

    public Prescription() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }


    public Prescription(int id, int doctorId, int scheduleId, int appointmentId) {
        this.id = id;

        this.doctorId = doctorId;
        this.scheduleId = scheduleId;
        this.appointmentId = appointmentId;
    }
}
