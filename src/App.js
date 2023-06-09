import Heading from "./components/Header";
import Footer from "./components/Footer";
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
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginUpPage";
import JobDetail from "./pages/JobDetail";
import tagsPage from "./pages/tagsPage";
import Internships from "./pages/Internships";
import Freelancer from "./pages/Freelancer";
import EmployerRegistration from "./pages/EmployerRegistration";
import SavedPage from "./pages/SavedPage";

const App = () => {
    return (
      <div className="hehe">


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
            <Route path="/sign-up" exact element={<SignUpPage />}></Route>
            <Route path="/login" exact element={<LoginPage />}></Route>
            <Route path="/job-details" exact element={<JobDetail />}></Route>
            <Route path="/tags" exact element={<tagsPage />}></Route>
            <Route path="/internships" exact element={<Internships/>}></Route>
            <Route path="/freelancer" exact element={<Freelancer />}></Route>
            <Route path="/employer-registration" exact element={<EmployerRegistration />}></Route>
            <Route path="/saved" exact element={<SavedPage />}></Route>
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