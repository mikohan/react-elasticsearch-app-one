import { Container } from '@material-ui/core';
import ElasticsearchThree from './componenets/ElasticsearchThree';
import ElasticTwo from './componenets/ElasticTwo';
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
