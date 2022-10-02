import React from "react"
import { useState } from "react"
import { DivEst,Botao } from "../../style/styled"
import Petdados from "./Petdados"

export default  function PetCadastro(){

    const [petdados,setPetdados]=useState([
        {
           titulo:"Cadastro do Pet", 
           nome:"nome do pet", 
           idade:"idade do pet",
           raca:"raça do pet",
           tamanho:"tamanho do pet",
           nomedono:"nome do dono",
           telefone:"tel do dono",
           img:"imagem do pet",
           obs:"obs", 
        }
    ])
    
        return (
            
            <>
                
                {petdados.map((pet,i)=>
                <Petdados
                    key ={i}
                    tituloprops={pet.titulo}
                    nomeprops={pet.nome}
                    idadeprops={pet.idade}
                    racaprops={pet.raca}
                    tamanhoprops={pet.tamanho}
                    nomedonoprops={pet.nomedono}
                    telefoneprops={pet.telefone}
                    imgprops={pet.img}
                    obsprops={pet.obs}
                    />    
               )}
               
            </>
        )
}

   