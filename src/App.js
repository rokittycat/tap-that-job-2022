import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/Header';
import ProductList from './containers/ProductList';

export const PAGE_HOME = 'home';
export const PAGE_SECOND = 'second';
export const PAGE_PRODUCT_LIST = 'productlist';

function App() {
  const [page, setPage] = useState(PAGE_HOME);

  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      <Container fluid="md">
        {page === PAGE_HOME && 
          <div> HOME PAGE</div>
        }        
        {page === PAGE_SECOND && 
          <div> SECOND PAGE</div>
        }
        {page === PAGE_PRODUCT_LIST && 
          <Row>
            <Col><ProductList /></Col>
          </Row>
        }
      </Container>
    </div>
  );
}

export default App;
