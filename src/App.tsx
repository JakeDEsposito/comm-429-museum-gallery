import { lazy, Suspense } from 'react'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Choice from './Choice'
import Topic from './Topic'

const Artist = lazy(() => import("./Artist"))

const HomePageLink = () => (
  <Link to="/">
    <button>Pick New Topic</button>
  </Link>
)

const App = () => (
  <div className="App">
    <header className="App-header">
      <HashRouter>
        <Routes>

          <Route path="/" element={
            <Choice />
          } />
          
          <Route path="/topic/:topic/:page" element={
            <>
              <Topic />
              <HomePageLink />
            </>
          } />

          <Route path="/artist/:artist" element={
            <>
              <Suspense>
                <Artist />
              </Suspense>
              <HomePageLink />
            </>
          } />

        </Routes>
      </HashRouter>
    </header>
  </div>
)

export default App
