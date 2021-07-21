import React, { useState, useEffect } from 'react'
import './styles.css'

export default function ClientScreen() {
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    const [stock, setStock] = useState(0)
    const [store, setStore] = useState([])

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products'))
        if (products) {
            setStore(products)
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        let data = {
            product, price, category, stock
        }

        let newProducts = JSON.stringify([...store || [], data])

        localStorage.setItem('products', newProducts)

        setStore(JSON.parse(newProducts))
        setProduct('')
        setPrice(0)
        setCategory('')
        setStock(0)

    }
    return (
        <div className="container">
            <div className="header">
                <h1>Produtos</h1>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        Marca:
                        <select id="category" value={category} onChange={e => setCategory(e.target.value)} required>
                            <option value="">Selecione</option>
                            <option value="carters">Carter's</option>
                            <option value="brandili">Brandili</option>
                            <option value="tiptop">Tip Top</option>
                        </select>
                    </label>
                    <label>
                        Produto:
                        <select id="product" value={product} onChange={e => setProduct(e.target.value)} required>
                            <option value="">Selecione</option>
                            <option value="bebe">Bebês</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                        </select>
                    </label>
                    <label>
                        Preço:<input type="number" value={price} onChange={e => setPrice(e.target.value)} required min={1} max={5000} />
                    </label>
                    <label>
                        Quantidade:<input type="number" value={stock} onChange={e => setStock(e.target.value)} required />
                    </label>
                    <button className="btn-add" type="submit">Adicionar</button>
                </form>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Estoque</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.category}</td>
                                <td>{item.product}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}