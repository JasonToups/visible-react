import './input.css';
import './output.css';
import Layout from './layout';
import Header from './components/ui/custom/header';
import Hero from './components/pages/home/Hero';

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
    </Layout>
  );
}

export default App;
