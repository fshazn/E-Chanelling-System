package com.example.Bill.Service;

import com.example.Bill.Entity.Bill;
import com.example.Bill.Repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BillService {
    @Autowired
    public BillRepository billRepository;

    public List<Bill> getAllBills(){
        return billRepository.findAll();
    }
    public Bill getBillById(int billId) {
        Optional<Bill> billOptional = billRepository.findById(billId);
        return billOptional.get();
    }
    public Bill createBill(Bill bill) {
        return billRepository.save(bill);
    }

}
