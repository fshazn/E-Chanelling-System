package com.example.Bill.Controller;
import com.example.Bill.Entity.Chargers;
import com.example.Bill.Service.ChargersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ChargersController {
    @Autowired
    private ChargersService chargersService;

    @GetMapping(path = "/chargers/{id}")
    public Chargers getAllChargers(@PathVariable int id){
        return chargersService.getAllChargers(id);
    }
    @PutMapping(path="/chargers")
    public Chargers updateCharge(@RequestBody Chargers chargers) {
        return chargersService.updateChargers(chargers);
    }
}
