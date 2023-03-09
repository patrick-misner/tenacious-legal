import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageLayout from "./components/Page-layout";
import DashboardPage from "./components/pages/dashboard";
import MissionPage from "./components/pages/mission";
import ContactPage from "./components/pages/contact";

function App() {
  return (
    <BrowserRouter>
    <PageLayout>
      <Routes>
        <Route exact path="/" element={<DashboardPage/>}/>
        <Route path="/mission" element={<MissionPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      </PageLayout>
      </BrowserRouter>
  );
};

export default App;
