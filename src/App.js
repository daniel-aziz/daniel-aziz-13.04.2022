import { Main } from './components/main/Main';
import { Header } from "./components/header/Header"
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPreferencesState } from './redux/preferencesReducer';
import { setFavoritesState } from './redux/favoritesReducer';
import { useDispatch, useSelector } from 'react-redux';
import { setCityState } from './redux/cityReducer';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styled-components/Global";
import { lightTheme, darkTheme } from "./components/styled-components/Theme"


function App() {
  const currentPreferences = useSelector(state => state.preferences.value)
  let dispach = useDispatch();

  useEffect(() => {
    dispach(setFavoritesState())
    dispach(setPreferencesState())
    dispach(setCityState());
  },[])


  return (
    <ThemeProvider theme={currentPreferences.darkMode ? darkTheme : lightTheme}>
    <>
    
      <BrowserRouter>
      <GlobalStyles/>
        <Header />
        <Main />
      </BrowserRouter>
    </>
    </ThemeProvider>
  );
}

export default App;
