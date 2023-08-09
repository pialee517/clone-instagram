import logo from './logo.svg';
import './App.css';
import Login from './feature/pages/Login';
import Viewing from './feature/pages/Viewing';
import router from './router'
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
function App() {
  return (
    <div className="App">
        <CssBaseline />
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
