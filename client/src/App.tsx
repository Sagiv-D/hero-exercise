import './App.css';
import { useEffect, useState } from 'react';
import HomePage from './components/homePage/HomePage';
import { Provider } from './components/ui/provider';
import RegisterOrLogin from './components/registerOrLogin/RegisterOrLogin';

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
      {isLoggedIn ? <HomePage /> :<RegisterOrLogin/>} {}
    </Provider>
  );
}

export default App;
