import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import Navlanding from './Navlanding';
import { Login } from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Adminhome } from './Admin/Home';
import Adminnav from './Admin/Nav';
import { Filmrequest } from './Admin/Filmrequest';
import { Hiringreq } from './Admin/Hiringreq';
import { Locationreq } from './Admin/Locationreq';
import { Approvedseekers } from './Admin/Approvedseekers'; 
import { Fcregister } from './Fcregister'; 
import Filmnav from './Filmcompany/Filmnav';
import { Filmhome } from './Filmcompany/Filmhome';
import { Addannouncement } from './Filmcompany/Addannouncement'; 
import { Hiringreg } from './Hiringreg'; 
import { Locationregister } from './Locationregister'; 
import { Seekerreg } from './Seekerreg'; 
import { Viewannouncement } from './Filmcompany/Viewannouncement'; 
import { Fcviewhcreq } from './Filmcompany/Fcviewhcreq'; 
import { Fcviewloc } from './Filmcompany/Fcviewloc'; 
import { Locdetail } from './Filmcompany/Locdetail'; 
import { Locreq } from './Filmcompany/Locreq'; 
import { Locreqdetail } from './Filmcompany/Locreqdetail'; 
import { Viewprogress } from './Filmcompany/Viewprogress'; 
import { Aprvdseekers } from './Filmcompany/Aprvdseekers'; 
import { Hiringfd } from './Filmcompany/Hiringfd'; 
import { Hiringnav } from './Hiringteam/Hiringnav'; 
import { Hiringhome } from './Hiringteam/Hiringhome'; 
import { Hviewprofile } from './Hiringteam/Hviewprofile'; 
import { Hviewanc } from './Hiringteam/Hviewanc'; 
import { Hvancdetail } from './Hiringteam/Hvancdetail'; 
import { Hancstatus } from './Hiringteam/Hancstatus';
import { Hvloc } from './Hiringteam/Hvloc'; 
import { Hlocdetail } from './Hiringteam/Hlocdetail'; 
import { Hfclocstatus } from './Hiringteam/Hfclocstatus'; 
import { Hlocpay } from './Hiringteam/Hlocpay'; 
import { Hlcbookst } from './Hiringteam/Hlcbookst'; 
import { Hlcfeed } from './Hiringteam/Hlcfeed'; 
import { Addjob } from './Hiringteam/Addjob'; 
import { Hviewjob } from './Hiringteam/Hviewjob'; 
import { Hskreq } from './Hiringteam/Hskreq'; 
import { Hviewprogress } from './Hiringteam/Hviewprogress'; 
import { Haddprogress } from './Hiringteam/Haddprogress'; 
import { Hviewfd } from './Hiringteam/Hviewfd'; 
import { Hvpreviousw } from './Hiringteam/Hvpreviousw'; 
import { Hvpwd } from './Hiringteam/Hvpwd'; 
import { Usernav }  from './User/Usernav';
import { Userhome } from './User/Userhome'; 
import { Userprofile } from './User/Userprofile'; 
import { Uvanc } from './User/Uvanc'; 
import { Uvancd } from './User/Uvancd'; 
import { Ujobreqst } from './User/Ujobreqst'; 
import { Upw } from './User/Upw'; 
import { Uvpw } from './User/Uvpw'; 
import { Uvpwd } from './User/Uvpwd'; 
import { Ujob } from './User/Ujob'; 
import { Locnav } from './Location/Locnav'; 
import { Lhome } from './Location/Lhome'; 
import { Lprofile } from './Location/Lprofile'; 
import { Lvanc } from './Location/Lvanc'; 
import { Lancd } from './Location/Lancd'; 
import { Addloc } from './Location/Addloc';
import { Lviewlc } from './Location/Lviewlc';
import { Editloc } from './Location/Editloc';
import { Lbookingreq } from './Location/Lbookingreq';
import { Lvfd } from './Location/Lvfd';
import { Lvpay } from './Location/Lvpay';
import { Editanc } from './Filmcompany/Editanc';
import { Filmprofile } from './Filmcompany/Filmprofile';
import { Heditjob } from './Hiringteam/Heditjob';
import { Editpw } from './User/Editpw';
import { Hreqdescription } from './Hiringteam/Hreqdescription';
import { Hiringreqdetail } from './Filmcompany/Hiringreqdetail';
import { Addlocationnreq } from './Admin/Addlocationreq';
import { Locationdetail } from './Admin/Locationdetail';
import { Ujobdescription } from './User/Ujobdescription';
import { Seekerreqd } from './Hiringteam/Seekerreqd';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admincategory from './Admin/Admincategory.jsx';
import ViewCatJobs from "./ViewCatJobs.jsx"
import { Addpwk } from './Hiringteam/Addpwk.jsx';
import { Viewhpwk } from './Hiringteam/Viewhpwk.jsx';
import { Viewhpwkd } from './Hiringteam/Viewhpwkd.jsx';
import { Edithpwk } from './Hiringteam/Edithpwk.jsx';
import { Editcategory } from './Admin/Editcategory.jsx';
import Announcement from './Admin/Announcement.jsx';
import Announcementd from './Admin/Announcementd.jsx';
import Emailotp from './Emailotp.jsx';
import Changepwd from './Changepwd.jsx';
import Fcviewhpwk from './Filmcompany/Fcviewhpwk.jsx';
import Fcviewhpwkd from './Filmcompany/Fcviewhpwkd.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Navlanding/>}>
      <Route index element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='fcreg' element={<Fcregister/>}/>
      <Route path='hrreg' element={<Hiringreg/>}/>
      <Route path='loreg' element={<Locationregister/>}/>
      <Route path='skreg' element={<Seekerreg/>}/>
      <Route path='emailotp' element={<Emailotp/>}/>
      <Route path='changepwd/:Email' element={<Changepwd/>}/>
    </Route>
   </Routes>
  


   <Routes>
     <Route path='/admin' element={<Adminnav/>}>
      <Route index element={<Adminhome/>}/>
      <Route path='film' element={<Filmrequest/>}/>
      <Route path='hcreq' element={<Hiringreq/>}/>
      <Route path='loreq' element={<Locationreq/>}/>
      <Route path='aprvdsk' element={<Approvedseekers/>}/>
      <Route path='addlocreq' element={<Addlocationnreq/>}/>
      <Route path='locd/:id' element={<Locationdetail/>}/>
      <Route path='category' element={<Admincategory/>}/>
      <Route path='editcategory/:id' element={<Editcategory/>}/>
      <Route path='announcement' element={<Announcement/>}/>
      <Route path='announcementd/:id' element={<Announcementd/>}/>
    </Route>
   </Routes>
 

   <Routes>
    <Route path='/filmcompany' element={<Filmnav/>}>
      <Route index element={<Filmhome/>}/>
      <Route path='addanc' element={<Addannouncement/>}/>
      <Route path='vanc' element={<Viewannouncement/>}/>
      <Route path='editanc/:companyId' element={<Editanc/>}/>
      <Route path='fcviewhcreq' element={<Fcviewhcreq/>}/>
      <Route path='fcvloc' element={<Fcviewloc/>}/>
      <Route path='locdt/:id' element={<Locdetail/>}/>
      <Route path='fclocreq' element={<Locreq/>}/>
      <Route path='locreqdetail/:id' element={<Locreqdetail/>}/>
      <Route path='vprogress' element={<Viewprogress/>}/>
      <Route path='jobseekers' element={<Aprvdseekers/>}/>
      <Route path='hiringfd/:id' element={<Hiringfd/>}/>
      <Route path='filmprof' element={<Filmprofile/>}/>
      <Route path='hiringreqdetail/:id' element={<Hiringreqdetail/>}/>
      <Route path='viewpwk/:id' element={<Fcviewhpwk/>}/>
      <Route path='viewpwkd/:id' element={<Fcviewhpwkd/>}/>
    </Route>
   </Routes>


  <Routes>
    <Route path='/hiring' element={<Hiringnav/>}>
    <Route index element={<Hiringhome/>}/>
    <Route path='hviewprofile' element={<Hviewprofile/>}/>
    <Route path='hviewanc' element={<Hviewanc/>}/>
    <Route path='hvancd/:id' element={<Hvancdetail/>}/>
    <Route path='hancst' element={<Hancstatus/>}/>
    <Route path='hvloc' element={<Hvloc/>}/>
    <Route path='hlocdetail/:id' element={<Hlocdetail/>}/>
    <Route path='hfclocst' element={<Hfclocstatus/>}/>
    <Route path='hlocpay/:id/:locationId/:_id' element={<Hlocpay/>}/>
    <Route path='hlcbookst' element={<Hlcbookst/>}/>
    <Route path='hlcfeed/:id' element={<Hlcfeed/>}/>
    <Route path='addjob' element={<Addjob/>}/>
    <Route path='hviewjob' element={<Hviewjob/>}/>
    <Route path='hskreq' element={<Hskreq/>}/>
    <Route path='hviewp' element={<Hviewprogress/>}/>
    <Route path='haddp/:id' element={<Haddprogress/>}/>
    <Route path='hviewfd' element={<Hviewfd/>}/>
    <Route path='hvpw/:id' element={<Hvpreviousw/>}/>
    <Route path='hvpwd/:id' element={<Hvpwd/>}/>
    <Route path='heditjob/:id' element={<Heditjob/>}/>
    <Route path='hreqdescription/:id2' element={<Hreqdescription/>}/>
    <Route path='seekerreqd/:id' element={<Seekerreqd/>}/>
    <Route path='addpwk' element={<Addpwk/>}/>
    <Route path='viewhpwk' element={<Viewhpwk/>}/>
    <Route path='viewhpwkd/:id' element={<Viewhpwkd/>}/>
    <Route path='edithpwk/:userId' element={<Edithpwk/>}/>
    </Route>
    </Routes>   


  <Routes>
      <Route path='/location' element={<Locnav/>}>
      <Route index element={<Lhome/>}/>
      <Route path='lprofile' element={<Lprofile/>}/>
      <Route path='lvanc' element={<Lvanc/>}/>
      <Route path='lancd/:id' element={<Lancd/>}/>
      <Route path='addloc' element={<Addloc/>}/>
      <Route path='lviewlc' element={<Lviewlc/>}/>
      <Route path='editloc/:userId' element={<Editloc/>}/>
      <Route path='lbkreq' element={<Lbookingreq/>}/>
      <Route path='lvfd' element={<Lvfd/>}/>
      <Route path='lvpay/:id' element={<Lvpay/>}/>
      </Route>
  </Routes>




  <Routes>
    <Route path='/user' element={<Usernav/>}>
    <Route index element={<Userhome/>}/>
    <Route path='uprofile' element={<Userprofile/>}/>
    <Route path='uvanc' element={<Uvanc/>}/>
    <Route path='uvancd/:id' element={<Uvancd/>}/>
    <Route path='ujobreqst' element={<Ujobreqst/>}/>
    <Route path='upw' element={<Upw/>}/>
    <Route path='uvpw' element={<Uvpw/>}/>
    <Route path='uvpwd/:id' element={<Uvpwd/>}/>
    <Route path='ujob/:id' element={<Ujob/>}/>
    <Route path='editpw/:userId' element={<Editpw/>}/>
    <Route path='ujobdesc/:id2' element={<Ujobdescription/>}/>
    <Route path='viewjobs/category/:id' element={<ViewCatJobs/>}/>
    
    </Route>

  </Routes>
  <ToastContainer />

   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
