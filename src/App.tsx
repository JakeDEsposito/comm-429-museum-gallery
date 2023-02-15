import { lazy, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Choice from './Choice'

const Topic = lazy(() => import("./Topic"))
const Artist = lazy(() => import("./Artist"))

const App = () => (
  <div className="App">
    <header className="App-header">
      <HashRouter>
        <Routes>

          <Route path="/" element={
            <Choice />
          } />
          
          <Route path="/topic/:topic/:page" element={
            <Suspense>
              <Topic />
            </Suspense>
          } />

          <Route path="/artist/:artist" element={
            <Suspense>
              <Artist />
            </Suspense>
          } />

        </Routes>
      </HashRouter>
    </header>
  </div>
)

export default App
