import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './index.scss';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

async function main() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>,
  );
}

main().catch((_) => console.error(_, 'Error during initialization'));
