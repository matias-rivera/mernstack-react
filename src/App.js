import React from 'react'
import Container from './components/Container'
import ProductList from './components/ProductList'
import data from './examples/products.json'

const App = () => {
    return (
    <Container>
        <ProductList products={data.products}/>
    </Container>
    )
}

export default App