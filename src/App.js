import { Main } from './components/main/Main';
import {Header} from "./components/header/Header"
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Main/>
    </BrowserRouter>
  );
}

export default App;
