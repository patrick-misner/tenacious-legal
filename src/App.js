import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TagManager from 'react-gtm-module';
import PageLayout from './components/PageLayout';
import HomePage from './components/pages/HomePage';
import FaqPage from './components/pages/FaqPage';
import ContactPage from './components/pages/ContactPage';

const tagManagerArgs = {
  gtmId: 'G-CZ7YPHQ3Q1',
};
TagManager.initialize(tagManagerArgs);

const App = () => {
  useEffect(() => {
    // Pushing the 'pageview' event to the dataLayer when a route is accessed
    window.dataLayer.push({
      event: 'pageview',
    });
  }, []);
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;
