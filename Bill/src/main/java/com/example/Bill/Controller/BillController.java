package com.example.Bill.Controller;


import com.example.Bill.Entity.Bill;
import com.example.Bill.Service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class BillController {
    @Autowired
    private BillService billService;

    @GetMapping(path = "/bills")
    public List<Bill> getAllBills(){
        return billService.getAllBills();
    }
    @GetMapping(path = "/bills/{billId}")
    public Bill getBillById(@PathVariable int billId) {
        return billService.getBillById(billId);
    }
    @PostMapping(path = "/bills")
    public Bill createBill(@RequestBody Bill bill) {
        return billService.createBill(bill);
    }
}
