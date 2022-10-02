import React from "react";
import { DivEst,Botao } from "../../style/styled";

export default function Petdados(props){
  return(
    <DivEst>
       
               <h1>{props.titulo}</h1>
                <p>{props.nomeprops}</p> 
                <p>{props.idadeprops}</p>
                <p>{props.racaprops}</p>
                <p>{props.tamanhoprops}</p>
                <p>{props.nomedonoprops}</p>
                <p>{props.telefoneprops}</p>
                <p>{props.imgprops}</p>
                <p>{props.obsprops}</p>
                  <Botao>Enviar!</Botao> 
    </DivEst>
  )
}