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
    </Route>
   </Routes>
  


   <Routes>
     <Route path='/admin' element={<Adminnav/>}>
      <Route index element={<Adminhome/>}/>
      <Route path='film' element={<Filmrequest/>}/>
      <Route path='hcreq' element={<Hiringreq/>}/>
      <Route path='loreq' element={<Locationreq/>}/>
      <Route path='aprvdsk' element={<Approvedseekers/>}/>
      
    </Route>
   </Routes>
 

   <Routes>
    <Route path='/filmcompany' element={<Filmnav/>}>
      <Route index element={<Filmhome/>}/>
      <Route path='addanc' element={<Addannouncement/>}/>
      <Route path='vanc' element={<Viewannouncement/>}/>
      <Route path='fcviewhcreq' element={<Fcviewhcreq/>}/>
      <Route path='fcvloc' element={<Fcviewloc/>}/>
      <Route path='locdt' element={<Locdetail/>}/>
      <Route path='fclocreq' element={<Locreq/>}/>
      <Route path='locreqdetail' element={<Locreqdetail/>}/>
      <Route path='vprogress' element={<Viewprogress/>}/>
      <Route path='jobseekers' element={<Aprvdseekers/>}/>
      <Route path='hiringfd' element={<Hiringfd/>}/>
      
    </Route>
   </Routes>


  <Routes>
    <Route path='/hiring' element={<Hiringnav/>}>
    <Route index element={<Hiringhome/>}/>
    <Route path='hviewprofile' element={<Hviewprofile/>}/>
    <Route path='hviewanc' element={<Hviewanc/>}/>
    <Route path='hvancd' element={<Hvancdetail/>}/>
    <Route path='hancst' element={<Hancstatus/>}/>
    <Route path='hvloc' element={<Hvloc/>}/>
    <Route path='hlocdetail' element={<Hlocdetail/>}/>
    <Route path='hfclocst' element={<Hfclocstatus/>}/>
    <Route path='hlocpay' element={<Hlocpay/>}/>
    <Route path='hlcbookst' element={<Hlcbookst/>}/>
    <Route path='hlcfeed' element={<Hlcfeed/>}/>
    <Route path='addjob' element={<Addjob/>}/>
    <Route path='hviewjob' element={<Hviewjob/>}/>
    <Route path='hskreq' element={<Hskreq/>}/>
    <Route path='hviewp' element={<Hviewprogress/>}/>
    <Route path='haddp' element={<Haddprogress/>}/>
    <Route path='hviewfd' element={<Hviewfd/>}/>
    <Route path='hvpw' element={<Hvpreviousw/>}/>
    <Route path='hvpwd' element={<Hvpwd/>}/>
    </Route>
    </Routes>   
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
