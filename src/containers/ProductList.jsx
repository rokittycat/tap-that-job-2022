import React, { useState, useEffect } from 'react';
import {Card, ListGroup} from 'react-bootstrap';

function ProductList() {

    //creating a local state with the list of products, using React Hook useState and initializing the variable with an empty array []
    // https://reactjs.org/docs/hooks-state.html
    const [productList, setProductList] = useState([]);

    // using useEffect to hook into the component's lifecycle to perform a side effect -> aka calling the API 
    // https://reactjs.org/docs/hooks-effect.html
    // fetch is an async function, so is json, so we can chain them with .then()
    useEffect(() => {
        fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
        .then(reponse => reponse.json())
        .then(data => setProductList(data));
    }, [])

    //  going through the list of items, we reuse a React component for each item to create the ultimate UI list
    const listItems = productList.map((product, index) => {
            return <ListGroup.Item key={index}>{product.name} - Price: <strong>{product.price}</strong></ListGroup.Item>;
    });

    // conditional rendering 
    // if no products, show a message
    if (productList.length === 0) {
        return <div>No products :( </div>;
    }

    return (
        <Card style={{ width: '18rem', marginTop: '50px' }}>
            <Card.Header>Product list from MDN</Card.Header>
            <ListGroup variant="flush">
                {listItems}
            </ListGroup>
        </Card>
    )
}

export default ProductList;