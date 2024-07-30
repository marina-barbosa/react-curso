
import reactLogo from './assets/react.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import Desafio2 from './components/Desafio2'
import Pokemon from './components/Pokemon'
import MeuForm from './components/MeuForm'

function App() {

  return (
    <div>
      <Pokemon />
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Desafio2 />
      <div>
        <h1>Form</h1>
        <MeuForm user={{ name: 'Isaac' }} />
      </div>
    </div>
  )
}

export default App
