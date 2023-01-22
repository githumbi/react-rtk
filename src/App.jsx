
import './App.css'
import { CakeView } from './features/cake/cakeView'
import { IcecreamView } from './features/iceCream/icecreamView'
import { UserView } from './features/users/userView'

function App() {


  return (
    <div className="App">
     <CakeView />
     <IcecreamView />
     <UserView />
    </div>
  )
}

export default App
