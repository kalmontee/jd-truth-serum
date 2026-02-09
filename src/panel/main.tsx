import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../../index.css';
import App from './App.tsx';

const panelRootId = 'jd-truth-serum-panel-root';
const panelRoot = document.getElementById(panelRootId);

if (panelRoot) {
  createRoot(panelRoot).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error(`[JD Truth Serum] React root not found: #${panelRootId}`);
}
