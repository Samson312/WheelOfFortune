import {Routes, Route} from 'react-router-dom'

import Index from './pages/Index'
import GamePage from './pages/GamePage'
import WordListPage from './pages/WordListPage'
import AddWordPage from './pages/AddWordPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/GamePage" element={<GamePage />}/>
      <Route path="/WordListPage" element={<WordListPage />}/>
      <Route path="/AddWordPage" element={<AddWordPage />} />
    </Routes>
  )
}



export default App
