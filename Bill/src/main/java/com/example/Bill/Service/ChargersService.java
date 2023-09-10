package com.example.Bill.Service;

import com.example.Bill.Entity.Bill;
import com.example.Bill.Entity.Chargers;
import com.example.Bill.Repository.ChargersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class ChargersService {
    @Autowired
    public ChargersRepository chargersRepository;

    public Chargers getAllChargers(int id) {
        Optional<Chargers> chargersOptional = chargersRepository.findById(id);
        return chargersOptional.get();
    }
    public Chargers updateChargers(Chargers chargers) {
        return chargersRepository.save(chargers);
    }

}
