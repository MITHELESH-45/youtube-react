import { Provider } from 'react-redux'
import Body from './components/Body'
import Header from './components/Header'
import './index.css'
import appStore from './utils/store/appStore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import SearchResults from './components/SearchResults'

function App() {
  
  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Body />,
      children:[
        {
          path:'/',
          element:<MainContainer />
        },
        {
          path:'watch',
          element:<WatchPage />
        },
        {
           path: "search",
           element: <SearchResults />
        }
      ]
    }
  ])
  return (
    <Provider store={appStore} >
    <div className=''>
      
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  )
}

export default App
