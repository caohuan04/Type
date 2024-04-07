import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={App} />,
)
