
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import FindDoctor from './pages/FindDoctor';
import ViewSchedule from './pages/ViewSchedule';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import DoctorHome from './pages/Doctor/DoctorHome';
import DoctorProfile from './pages/Doctor/DoctorProfile';
import AddSchedule from './pages/Doctor/AddSchedule';
import ViewAppointments from './pages/Doctor/ViewAppointments';
import AppointmentDetails from './pages/Doctor/AppointmentDetails';
import AdminHome from './pages/Admin/AdminHome';
import DoctorSpeciality from './pages/Admin/DoctorSpeciality';
import Doctors from './pages/Admin/Doctors';
import EditDoctor from './pages/Admin/EditDoctor';
import AddNewDoctor from './pages/Admin/AddNewDoctor';
import ManagePatients from './pages/Admin/ManagePatients';
import EditPatient from './pages/Admin/EditPatient';
import Medicines from './pages/Admin/Medicines';
import Presc from './Tests/Presc';
import PatientSignup from './pages/Patient/PatientSignup';
import ManageSchedules from './pages/Doctor/ManageSchedules';
import MyBookings from './pages/Patient/MyBookings';
import Prescription3 from './pages/Doctor/Prescription3';
import StaffHomePage from './pages/Staff/StaffHomePage';
import StaffDoctors from './pages/Staff/StaffDoctors';
import StaffAppointment from './pages/Staff/StaffAppointment';
import AppBillPrint from './pages/Staff/AppBillPrint';
import StaffSignIn from './pages/Staff/StaffSignIn';
import AdminStaff from './pages/Admin/AdminStaff';
import AdminNewStaff from './pages/Admin/AdminNewStaff';
import AdminEditStaff from './pages/Admin/AdminEditStaff';
import AdminBilling from './pages/Admin/AdminBilling';
import EditProfile from './pages/Staff/EditProfile';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <div>

    <Router>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/specializations/:specializationId' element={<FindDoctor/>}/>
        <Route path='/specializations/:specializationId/doctors/:doctorId/schedules' element={<ViewSchedule/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/mybookings' element={<MyBookings/>}/>
        <Route path='/specializations/:specializationId/doctors/:doctorId/schedules/:id/signin' element={<PatientSignup/>}/>

        {/* Doctor Routing */}
        <Route path='/doctors/:doctorId' element={<DoctorHome/>}/>
        
        <Route path='/doctors/:doctorId/profile' element={<DoctorProfile/>}/>
        <Route path='/doctors/:doctorId/schedules' element={<AddSchedule/>}/>
        <Route path='/doctors/:doctorId/schedules/manage' element={<ManageSchedules/>}/>
        <Route path='/doctors/:doctorId/schedules/:id/appointments' element={<ViewAppointments/>}/>
        <Route path='/doctors/:doctorId/schedules/:scheduleId/appointments/:id/patients/:patientId/details' element={<AppointmentDetails/>}/>
        {/* <Route path='/doctors/:doctorId/schedules/:scheduleId/appointments/:id/patients/:patientId/prescription' element={<Prescription/>}/> */}
        {/* <Route path='/doctors/:doctorId/schedules/:scheduleId/appointments/:appointmentId' element={<Prescription/>}/> */}
        {/* Admin Routing */}
        <Route path='/admin' element={<AdminHome/>}/>
      
        <Route path='/admin/specialities' element={<DoctorSpeciality/>}/>
        <Route path='/admin/staff/new' element={<AdminNewStaff/>}/>
        <Route path='/admin/specialities/:specializationId/doctors' element={<Doctors/>}/>
        <Route path='/admin/specialities/:specializationId/doctors/:doctorId/edit' element={<EditDoctor/>}/>
        <Route path='/admin/staff/:staffId/edit' element={<AdminEditStaff/>}/>
        <Route path='/admin/specialities/:specializationId/doctors/new-doctor' element={<AddNewDoctor/>}/>
        <Route path='/admin/patients' element={<ManagePatients/>}/>
        <Route path='/admin/patients/:patientId' element={<EditPatient/>}/>
        <Route path='/admin/medicines' element={<Medicines/>}/>
        <Route path='/admin/staff' element={<AdminStaff/>}/>
        <Route path='/admin/billings' element={<AdminBilling/>}/>

        {/* Staff Routing */}
        <Route path='/staff/:staffId' element={<StaffHomePage/>}/>
        <Route path='/staff/signin' element={<StaffSignIn/>}/>
        <Route path='/staff/doctors' element={<StaffDoctors/>}/>
        <Route path='/staff/appointments' element={<StaffAppointment/>}/>
        <Route path='/staff/appointments/:appointmentId' element={<AppBillPrint/>}/>
        <Route path='/staff/:staffId/profile' element={<EditProfile/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>


        {/*For Testing*/}
        <Route path='/doctors/:doctorId/schedules/:scheduleId/appointments/:appointmentId' element={<Prescription3/>}/> 
        <Route path='/doctors/:doctorId/schedules/:scheduleId/appointments/:id/patients/:patientId/presc' element={<Presc/>}/> 
        
        

      </Routes>
    </Router>


    </div>
  );
}
export default App;
