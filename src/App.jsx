import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import CharacterList from './pages/characterList'
import CharacterDetail from './pages/CharacterDetail'
import EpisodesList from './pages/EpisodesList'
import MainHTML from './components/layout/MainHTML'

function App() {

  return (
    <>
      <Header/>
      
      <MainHTML>
        <Routes>
          <Route path='/' element={<CharacterList />} />
          <Route path='/characters/:id' element={<CharacterDetail />} />
          <Route path='/episodes' element={< EpisodesList />} />
        </Routes>
      </MainHTML>

      <Footer/>
    </>
  )
}

export default App
