import React, { useState, useEffect } from 'react'
import './styles.css'

export default function ClientScreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [store, setStore] = useState([])

    useEffect(() => {
        const clients = JSON.parse(localStorage.getItem('clients'))
        if (clients) {
            setStore(clients)
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        let data = {
            name, email, country
        }

        let newClients = JSON.stringify([...store || [], data])

        localStorage.setItem('clients', newClients)

        setStore(JSON.parse(newClients))

        setName('')
        setEmail('')
        setCountry('')

    }
    return (
        <div className="container">
            <div className="header">
                <h1>Clientes</h1>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:<input type="text" value={name} onChange={e => setName(e.target.value)} required minLength={2} />
                    </label>
                    <label>
                        E-mail:<input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Estado:
                        <select id="country" value={country} onChange={e => setCountry(e.target.value)} required>
                            <option value="">Selecione</option>
                            <option value="saopaulo">São Paulo</option>
                            <option value="riodejaneiro">Rio de Janeiro</option>
                            <option value="minasgerais">Minas Gerais</option>
                            <option value="espiritosanto">Espirito Santo</option>
                        </select>
                    </label>
                    <button className="btn-add" type="submit">Adicionar</button>
                </form>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.map((client, idx) => (
                            <tr key={idx}>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

