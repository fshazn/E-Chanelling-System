package com.example.Treatment.Entity;

import javax.persistence.*;

@Entity
@Table(name = "prescription_item")
public class PrescriptionItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int itemId;
    @Column(name = "appointment_id")
    private int appointmentId;
    @Column(name = "medicine_id")
    private int medicineId;
    @Column(name = "duration")
    private String duration;

    public PrescriptionItem() {
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
    }

    public int getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(int medicineId) {
        this.medicineId = medicineId;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public PrescriptionItem(int itemId, int appointmentId, int medicineId, String duration) {
        this.itemId = itemId;
        this.appointmentId = appointmentId;
        this.medicineId = medicineId;
        this.duration = duration;
    }
}
