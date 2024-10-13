import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
// import App from './App.jsx'
import './index.css'
import Header  from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MainContent from './components/MainContent.jsx'

const root = createRoot(document.getElementById('root'))

function Page() {
  return (
  <StrictMode>
    <div className="reactFacts">
      <Header />
      <MainContent />
      <Footer />
      </div>
  </StrictMode>
  )
}
root.render(<Page />)


// const element = (
//   <StrictMode>
//     <div className="reactFacts">
//       <img src="/src/images/react-logo.png" className="reactLogo"></img>
//       <h1>Fun Facts about React</h1>
//       <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on GitHub</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//       </div>
//   </StrictMode>
// )
// root.render(element)
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <h1>Hello</h1>
//     <h2>It is {new Date().toLocaleTimeString()}.</h2>
//   </StrictMode>,
// )
