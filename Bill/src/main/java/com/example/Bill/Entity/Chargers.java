package com.example.Bill.Entity;

import javax.persistence.*;

@Entity
@Table(name = "chargers")
public class Chargers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "doctor_charge")
    private double doctorCharge;
    @Column(name = "booking_charge")
    private double bookingCharge;
    @Column(name = "medicare_charge")
    private double medicareCharge;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getDoctorCharge() {
        return doctorCharge;
    }

    public void setDoctorCharge(double doctorCharge) {
        this.doctorCharge = doctorCharge;
    }

    public double getBookingCharge() {
        return bookingCharge;
    }

    public void setBookingCharge(double bookingCharge) {
        this.bookingCharge = bookingCharge;
    }

    public double getMedicareCharge() {
        return medicareCharge;
    }

    public void setMedicareCharge(double medicareCharge) {
        this.medicareCharge = medicareCharge;
    }
}
