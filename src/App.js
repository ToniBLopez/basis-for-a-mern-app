import './App.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import LoginPage from './scenes/loginPage'
// import HomePage from './scenes/homePage'
import AddDates from './pages/AddDates'
import SeeDates from './pages/SeeDates'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme.js'
// import { useSelector } from 'react-redux'

const App = () => {
  // const { mode } = useSelector(state => state)
  // const isAuth = Boolean(useSelector(state => state.token))
  // const theme = createTheme(themeSettings(mode), [mode])
  const theme = createTheme(themeSettings())

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home'>
              <Route index element={<AddDates />}/>
              <Route path='check' element={<SeeDates />}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
