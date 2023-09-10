package com.example.Treatment.Controller;

import com.example.Treatment.Entity.Prescription;
import com.example.Treatment.Entity.PrescriptionItem;
import com.example.Treatment.Service.PrescriptionItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PrescriptionItemController {

    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    public PrescriptionItemService prescriptionItemService;

    @PostMapping(path = "/prescription-items")
    public PrescriptionItem createPrescriptionItem(@RequestBody PrescriptionItem prescriptionItem) {
        return prescriptionItemService.createPrescriptionItem(prescriptionItem);
    }

    @GetMapping(path = "/prescription-items/{appointmentId}")
    public List<PrescriptionItem> getAllItemsForGivenPrescription(@PathVariable int appointmentId) {
        return prescriptionItemService.getAllItemsForGivenPrescription(appointmentId);
    }
    @DeleteMapping(path = "prescription-items/{appointmentId}")
    public void deletePrescriptionItemsById(@PathVariable int appointmentId){
        prescriptionItemService.deletePrescriptionItemsById(appointmentId);
    }

    @GetMapping(path="/prescriptions/{appointmentId}/prescription-items")
    public List<Object> getAllMedicineIdForGivenPrescription(@PathVariable int appointmentId) {
        List<Object> medicineNameList = new ArrayList<>();
        List<String> idList= prescriptionItemService.getAllMedicineIdForGivenPrescription(appointmentId);
        for(int i=0;i<idList.size();i++){
            int medicineId=Integer.parseInt(idList.get(i));
            String url="http://localhost:8082/medicines/"+medicineId +"/names";
            Object medicineName=restTemplate.getForObject(url,Object.class);
            medicineNameList.add(medicineName);
        }
        return medicineNameList;
    }
}
