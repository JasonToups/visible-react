import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './input.css';
import './output.css';
import Layout from './layout';
import Header from './components/ui/custom/header';
import Home from './components/pages/home/Home';
import CreateAppWithVite from './components/pages/getting-started/CreateAppWithVite';
import StylingAndUI from './components/pages/getting-started/StylingAndUI';
import DeployToGithubPages from './components/pages/getting-started/DeployToGitHubPages';

function App() {
  return (
    <Router basename='/visible-react'>
      <Layout>
        <Header />
        <Routes>
          {/* Home Route */}
          <Route path='/' element={<Home />} />

          {/* Getting Started Routes */}
          <Route
            path='getting-started/create-app-with-vite'
            element={<CreateAppWithVite />}
          />
          <Route
            path='getting-started/styling-and-ui'
            element={<StylingAndUI />}
          />
          <Route
            path='getting-started/deploy-to-github-pages'
            element={<DeployToGithubPages />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
