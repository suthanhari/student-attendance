import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Carousel from './carousel';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Studentlist from './form';
import Attendancelist from './attendancelist';
import Addattendance from './addattendance';
import Addattendancelist from './addattendancelist';



function App() {
  return (
    <>
      <BrowserRouter>
        <div class=" sidebar bg-primary bg-gradient">

          <Sidebar />

        </div>
        <div class="container">

          <Routes>
            <Route path="/" element={<Carousel />}></Route>
            <Route path="/studentlist" element={<Attendancelist />}></Route>
            <Route path="/studentattendance" element={<Studentlist />}></Route>
            <Route path="/addattendance/:id" element={<Addattendance />}></Route>
            <Route path="/history/:id" element={<Addattendancelist/>}></Route>

          </Routes>


        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
