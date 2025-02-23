// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// src/App.jsx
import React from 'react'
import ProjectPreview from './components/ProjectPreview'

function App() {
  return (
    <ProjectPreview />
  )
}

export default App