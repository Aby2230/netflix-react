import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import request from './components/request'
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row isLargeRow = {true} 
      title = "Netflix Orginal"
      fetchUrl ={request.fetchNetflixOriginals}/>
<Row title ="Trending" fetchUrl ={request.fetchTrending}/>
<Row title ="Top Rated " fetchUrl ={request.fetchTopRated}/>
<Row title ="Comedy" fetchUrl ={request.fetchComedyMovies}/>
<Row title ="Action" fetchUrl ={request.fetchActionMovies}/>
<Row title ="Horrror" fetchUrl ={request.fetchHorrorMovies}/>
<Row title ="Documentaries" fetchUrl ={request.fetchDocumentaries}/>
<Row title ="Romances" fetchUrl ={request.fetchRomanceMovies}/>


    </div>
  );
}

export default App;
