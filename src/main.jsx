import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css'
import './index.css'

createRoot(document.getElementById('root')).render(<App />)