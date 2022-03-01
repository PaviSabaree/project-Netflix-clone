
import './App.css';
import Banner from './component/Banner/Banner';
import NavBar from './component/NavBar/NavBar';
import RowPost from './component/RowPost/RowPost';
import {original,action,RomanceMovies,Documentaries,HorrorMovies,ComedyMovies} from './constants/constants'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={original} title={'Netflix Original'}/>
    <RowPost url={action}  title={'Action'} isSmall/>
    <RowPost url={HorrorMovies} title={'Horror'} isSmall/>
    <RowPost url={ComedyMovies} title={'Comedy'} isSmall/>
    <RowPost url={RomanceMovies} title={'Romance'} isSmall/>
    <RowPost url={Documentaries} title={'Documentary'} isSmall/>
    </div>
  );
}

export default App;
