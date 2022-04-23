import { Main } from './components/main/Main';
import {Header} from "./components/header/Header"
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { setPreferencesState } from './redux/preferencesReducer';
import { setFavoritesState } from './redux/favoritesReducer';
import { useDispatch } from 'react-redux';
import { setCityState } from './redux/cityReducer';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"


function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

  let dispach = useDispatch();

  useEffect(()=>{
    dispach(setFavoritesState())
    dispach(setPreferencesState())
    dispach(setCityState());
  })


  return (
    <BrowserRouter>
        <Header/>
        <Main/>
    </BrowserRouter>
  );
}

export default App;
