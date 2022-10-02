import React from "react"
import { DivEst,Botao } from "../../style/styled.js"


export default function PetCadastro() {
    return (

        <DivEst>
            <h1>Cadastro do Pet</h1>
            <form action="">
                <label htmlFor="">Nome Pet:</label><input type="text" name="" id="" placeholder="Nome Pet" />
                    <br />
                <label htmlFor="">Idade:</label><input type="text" name="" id="" placeholder="idade"/>
                        <br />
                <label htmlFor="">Raça:</label><input type="text" name="" id="" placeholder="raça"/>
                    <br />
                <label htmlFor="">tamanho:</label><input type="text" name="" id="" placeholder="pequeno,medio,grande"/>
                    <br />
                <label htmlFor="">Nome Dono:</label><input type="text" name="" id="" placeholder="Nome dono"/>
                        <br />
                <label htmlFor="">Telefone Dono:</label><input type="text" name="" id="" placeholder="(11)000000000"/>
                            <br />
                <label htmlFor="">Image do Pet:</label><input type="text" name="" id="" placeholder="anexar"/>
                            <br />
                <label htmlFor="">Observações:</label><input type="text" name="" id="" placeholder="descreva"/>
                        <br />
                        <br />
                <Botao>enviar!</Botao>

            </form>
        </DivEst>
    )
}