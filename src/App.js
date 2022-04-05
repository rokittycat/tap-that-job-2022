import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/Header';
import ProductList from './containers/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid="md">
        <Row>
          <Col><ProductList /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
