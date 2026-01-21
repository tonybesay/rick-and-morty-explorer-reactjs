import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/MainHTML'
import CharacterList from './pages/characterList'
import CharacterDetail from './pages/CharacterDetail'
import EpisodesList from './components/EpisodesList'
import MainHTML from './components/MainHTML'

function App() {

  return (
    <>
      <Header/>
      
      <MainHTML>
        <Routes>
          <Route path='/' element={<CharacterList />} />
          <Route path='/character/:id' element={<CharacterDetail />} />
          <Route path='/episodes' element={< EpisodesList />} />
        </Routes>
      </MainHTML>

      <Footer/>
    </>
  )
}

export default App
