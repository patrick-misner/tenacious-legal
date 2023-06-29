import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageLayout from './components/Page-layout';
import DashboardPage from './components/pages/dashboard';
import FaqPage from './components/pages/faq';
import ContactPage from './components/pages/contact';

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
