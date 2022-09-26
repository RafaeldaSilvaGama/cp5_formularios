import React from 'react';



export default function Cabecalho() {
    const cabecalho = {
        backgroundColor: '#00f',
        color: 'white',
        height: '15vh',
        width: '100%',
        textAlign: 'left',
    }


  return (
    <div style = {cabecalho}>
        <header>
            <ul>
                <li>Ontem</li>
                <li>Hoje</li>
                <li>Amanhã</li>
            </ul>

        </header>
    </div>
  )
}

