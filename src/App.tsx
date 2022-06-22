import {useState, useEffect} from 'react';
import List from './components/List'
import './App.css';

interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

interface AppState {
  subs: Sub[]
  newSubsNumber: number
}

const INITIAL_STATE = [
  { 
    nick: 'liber',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=liberto',
    description: 'Liberto description del primer avatar',
  },
  { 
    nick: 'juan',
    subMonths: 5,
    avatar: 'https://i.pravatar.cc/150?u=juan',
  },
]

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])

  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  })

  return (
    <div className="App">
      <h1>Liber subs</h1>
      <List subs={subs}/>
    </div>
  );
}

export default App;
