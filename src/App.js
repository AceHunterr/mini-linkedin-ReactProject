import Heading from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import HomePage from './pages/home.jsx'
import AboutUs from './pages/About_Us'
import Jobs from './pages/Jobs'
import Profile from './pages/Profile'
import Recruitment from './pages/Recruitment'
import Referral from './pages/Referral'
import Resources from './pages/Resources'
import ScanResume from './pages/Scan_Resume'
import TrainingPrograms from './pages/Training_Programs'
import HomePageCards from "./components/HomePageCards";
import Sidenav from "./components/sidenav";


const App = () => {
    return (
      
      // <Router>
      // <Sidebar>
      //   <Routes>
      //     <Route path="/" element={<HomePage />} />
      //     <Route path="/about" element={<AboutUs />} />
      //     <Route path="/jobs" element={<Jobs />} />
      //     <Route path="/profile" element={<Profile />} />
      //     <Route path="/recruitment" element={<Recruitment />} />
      //     <Route path="/referral" element={<Referral />} />
      //     <Route path="/resources" element={<Resources />} />
      //     <Route path="/scan-resume" element={<ScanResume />} />
      //     <Route path="/training-programs" element={<TrainingPrograms />} />
      //   </Routes>
      // </Sidebar>
      //   </Router>

      <div className="hehe">
        {/* <Sidenav /> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />}></Route>
            <Route path="/jobs" exact element={<Jobs />}></Route>
            <Route path="/resources" exact element={<Resources />}></Route>
            <Route path="/recruitment" exact element={<Recruitment />}></Route>
            <Route path="/training-programs" exact element={<TrainingPrograms />}></Route>
            <Route path="/referral" exact element={<Referral />}></Route>
            <Route path="/scan-resume" exact element={<ScanResume />}></Route>
            <Route path="/about-us" exact element={<AboutUs />}></Route>
            <Route path="/profile" exact element={<Profile />}></Route>
          </Routes>
        </BrowserRouter>
        {/* <Sidenav /> */}
      </div>
          


      // {/* <h1>Hello World</h1> */}
      // <div>
      //   <HomePageCards />


      // </div>
      

    );
  };
  
  export default App;