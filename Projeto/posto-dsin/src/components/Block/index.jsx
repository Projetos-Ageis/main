import { BlockContainer } from "./styles";
import Bandeira  from '../../assets/logoDsin.svg'

export function Block({ onClick,information }) {
    return (
        <BlockContainer onClick={onClick}>
            <img src={Bandeira} alt="Bandeira Posto" className="bandeira" />
            <h1>{information?.nomePosto}</h1>
            <div className="prices">
                <div className="price">
                    <span>Gasolina</span>
                    <strong className="down">R$ {information?.gasolina}</strong>
                </div>
                <div className="price">
                    <span>Etanol</span>
                    <strong className="up">R$ {information?.etanol}</strong>
                </div>
                <div className="price">
                    <span>Diesel</span>
                    <strong className="down">R$ {information?.diesel}</strong>
                </div>
            </div>
        </BlockContainer>
    )
}