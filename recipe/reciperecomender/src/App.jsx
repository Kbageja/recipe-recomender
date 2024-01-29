import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Recipepost from './components/recipepost';
import ListProvider from './store/procedurestore';
import { useContext } from 'react';
import { procedurelist } from './store/procedurestore';
function App(){
  const {list} = useContext(procedurelist);
  return(
    <>

<ListProvider>
<Recipepost></Recipepost>
</ListProvider>
</>
  );

}
export default App;
