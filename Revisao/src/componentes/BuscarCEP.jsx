import { useState } from "react";

export default function BuscarCEP(){
    const [cep, setCEP] = useState('')
    const [endereco, setEndereco] = useState(null)

const fetchData = async () =>{
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        setEndereco(data)
    }catch(error){
        console.error(error)
    }
}

    return(
    <div>
        <h1>Buscar CEP</h1>
        <input value={cep} type="text" placeholder="Digite o CEP" onChange={(e) => setCEP(e.target.value)}/>
        <button onClick={fetchData()}>Buscar</button>
        {endereco &&(
            <div>
                <p>Rua: {endereco.logradouro}</p>
                <p>Bairro: {endereco.bairro}</p>
                <p>Cidade: {endereco.localidade}</p>
                <p>UF: {endereco.uf}</p>
            </div>
        )}
    </div>
    )
}