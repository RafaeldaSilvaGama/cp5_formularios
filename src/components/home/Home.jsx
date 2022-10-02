import React from 'react'
import PetCadastro from '../petCadastro/PetCadastro'


export default function Home() {
    const home = {

        backgroundColor: '#FFFAFA',
        height: '75vh',
        textAlign: 'center',
        color: '#000',
    }
    return (
        <div style={home}>
            <h1>Formulario PET</h1>
            <PetCadastro />

        </div>
    )
}