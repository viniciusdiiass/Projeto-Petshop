const listaClientes = async () => {
    const resposta = await fetch(`http://localhost:3000/profile`)
    return await resposta.json()
}

const criaCliente = async (nome, email) => {
    const resposta = await fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            { nome: nome, email: email }
        )
    })
    if (resposta.body) {
        return await resposta.json()
    }
    throw new Error("Não foi possivel criar o cliente!")
}

const removeCliente = (id) => {
    const resposta = fetch(`http://localhost:3000/profile/${id}`, {method: 'DELETE'})
    if (!resposta.ok) {
        return resposta.body
    }
    throw new Error("Não foi possivel deletar o cliente!")
    
}


const detalhaCliente = async (id) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`)
    if (resposta.ok) {
        return await resposta.json()
    }
    throw new Error("Não foi possivel listar os clientes!")
}

const atualizaCliente = async (id, nome, email) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(
            { nome: nome, email: email }
        )
    })
    if (resposta.ok) {
        return await resposta.json()
    }
    throw new Error("Não foi possivel atualizar o cliente!")
    
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}
