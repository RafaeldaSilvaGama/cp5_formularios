import React from 'react'


export default function Rodape() {
  const rodape = {
    backgroundColor: '#DCDCDC',
    height: '60hv',
    width: '100%',
    
  }

  return (
    <footer>
      <div style={rodape}>
        <p>&copy;Desenvolvido por <b>Pedro Pigari, Rafael Gama, Thais Spinoza, Vinicius Araújo</b> - Todos os direitos reservados - 2022</p>
      </div>
    </footer>
  )
}