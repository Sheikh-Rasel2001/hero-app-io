
import './App.css'
import Home from './Pages/Home/Home'

function App({promiseApps}) {

  return (
   <>
   <Home promiseApps={promiseApps}></Home>
   </>
  )
}

export default App
