import { Container } from '@material-ui/core';
import ElasticOne from './componenets/ElasticOne.jsx';
import ElasticTwo from './componenets/ElasticTwo.jsx';
import './App.css';

function App() {
  return (
    <Container maxWidth="lg">
      <h1>Main page</h1>
      <ElasticTwo />
    </Container>
  );
}

export default App;
