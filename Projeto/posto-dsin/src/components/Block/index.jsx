import { BlockContainer } from "./styles";
import Bandeira  from '../../assets/imageIpirangaBlock.svg'

export function Block({ onClick }) {
    return (
        <BlockContainer onClick={onClick}>
            <img src={Bandeira} alt="Bandeira Posto" className="bandeira" />
            <h1>Auto Posto Universitário</h1>
            <div className="prices">
                <div className="price">
                    <span>Gasolina</span>
                    <strong className="down">R$ 5,96</strong>
                </div>
                <div className="price">
                    <span>Etanol</span>
                    <strong className="up">R$ 5,96</strong>
                </div>
                <div className="price">
                    <span>Diesel</span>
                    <strong className="down">R$ 5,96</strong>
                </div>
            </div>
        </BlockContainer>
    )
}