import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClientSetup';


import ScrollToTop from './components/scrollToTop.tsx';

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'non.geist';

createRoot(document.getElementById('root')!).render(
 
  <React.StrictMode>
  <BrowserRouter>
  <ScrollToTop /> {/* Integrate the ScrollToTop component here */}
  <ApolloProvider client={client}>
   <App />
  </ApolloProvider>

 </BrowserRouter>
</React.StrictMode>,
)
