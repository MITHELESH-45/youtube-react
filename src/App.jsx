import { Provider } from 'react-redux'
import Body from './components/Body'
import Header from './components/Header'
import './index.css'
import appStore from './utils/store/appStore'

function App() {
  

  return (
    <Provider store={appStore} >
    <div className=''>
      <Header />
      <Body />
    </div>
    </Provider>
  )
}

export default App
