import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeProvider';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import WritingPage from './pages/WritingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { CommandPalette } from './components/ui/CommandPalette';
import ArticlePage from './pages/ArticlePage';

// A helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="protocol-lattice-theme">
        <HashRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/writing" element={<WritingPage />} />
              <Route path="/writing/:slug" element={<ArticlePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
          <CommandPalette />
        </HashRouter>
    </ThemeProvider>
  );
}

export default App;