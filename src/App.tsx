import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';
import Work from './components/Work';
import ContactPage from './pages/ContactPage';
import ThankYou from './components/ThankYouPage\''; // Update the import path

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define your routes here */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* Default route */}
          <Route path="/" element={
            <>
              <Sidenav />
              <Main />
              <Work />
              <Projects />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
