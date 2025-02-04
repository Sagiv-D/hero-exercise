import './App.css';
import { useEffect, useState } from 'react';
import HomePage from './components/homePage/HomePage';
import Login from './components/login/Login';
import { Provider } from './components/ui/provider';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Provider>
      {isLoggedIn ? <HomePage /> : <Login />} {}
    </Provider>
  );
}

export default App;
