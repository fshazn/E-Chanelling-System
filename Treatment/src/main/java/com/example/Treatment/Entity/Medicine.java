package com.example.Treatment.Entity;
import javax.persistence.*;

@Entity
@Table(name="medicine")
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
    @Column(name = "name")
private String name;
    @Column(name = "dosage")
private String dosage;
    @Column(name = "price")
private double price;

    public Medicine() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Medicine(int id, String name, String dosage, double price) {
        this.id = id;
        this.name = name;
        this.dosage = dosage;
        this.price = price;
    }
}
