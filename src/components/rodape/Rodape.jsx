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
        <p>&copy;Desenvolvido por <b>Rafael Gama</b> - Todos os direitos reservados - 2022</p>
      </div>
    </footer>
  )
}