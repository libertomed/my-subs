import {useState, useEffect} from 'react';
import List from './components/List'
import Form from './components/Form'
import {Sub} from './types'
import './App.css';

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
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App">
      <h1>Liber subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
