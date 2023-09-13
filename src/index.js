import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./pages/home";
import { createRoot } from 'react-dom/client';
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
