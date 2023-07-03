import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageLayout from './components/PageLayout';
import DashboardPage from './components/pages/DashBoardPage';
import FaqPage from './components/pages/FaqPage';
import ContactPage from './components/pages/ContactPage';

const App = () => (
  <BrowserRouter>
    <PageLayout>
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </PageLayout>
  </BrowserRouter>
);

export default App;
