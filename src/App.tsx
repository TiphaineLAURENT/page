import logo from './logo.svg'
import './App.css'
import { settings } from './settings'


function App() {
  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <img src={logo} className={'App-logo'} alt={'logo'} />
        <p>Edit <code>src/App.tsx</code> and save to reload</p>
        <a
          className={'App-link'}
          href={'https://reactjs.org'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          Learn React
        </a>
        <p>Settings: {JSON.stringify(settings)}</p>
      </header>
    </div>
  )
}

export default App
