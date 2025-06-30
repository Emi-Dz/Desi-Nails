import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import type { Client, NailDesign, InspirationHistoryItem } from './types';
import useLocalStorage from './hooks/useLocalStorage';

import Layout from './components/Layout';
import Dashboard from './components/pages/Dashboard';
import ClientsPage from './components/pages/ClientsPage';
import PortfolioPage from './components/pages/PortfolioPage';
import InspirationPage from './components/pages/InspirationPage';
import ClientDetailPage from './components/pages/ClientDetailPage';

const App: React.FC = () => {
  const [clients, setClients] = useLocalStorage<Client[]>('desi_nails_clients', []);
  const [designs, setDesigns] = useLocalStorage<NailDesign[]>('desi_nails_designs', []);
  const [inspirationHistory, setInspirationHistory] = useLocalStorage<InspirationHistoryItem[]>('desi_nails_inspiration_history', []);

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard clients={clients} designs={designs} inspirationHistory={inspirationHistory} />} />
          <Route path="/clientes" element={<ClientsPage clients={clients} setClients={setClients} />} />
          <Route path="/clientes/:clientId" element={<ClientDetailPage clients={clients} setClients={setClients} designs={designs} />} />
          <Route path="/portafolio" element={<PortfolioPage designs={designs} setDesigns={setDesigns} />} />
          <Route path="/inspiracion" element={<InspirationPage designs={designs} setDesigns={setDesigns} inspirationHistory={inspirationHistory} setInspirationHistory={setInspirationHistory} />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;