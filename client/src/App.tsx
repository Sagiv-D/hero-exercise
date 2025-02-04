import './App.css'
import HomePage from './components/homePage/HomePage'
import { Provider } from './components/ui/provider'

function App() {


    return (
        <Provider>
            <HomePage/>
        </Provider>
        
    )
}

export default App
