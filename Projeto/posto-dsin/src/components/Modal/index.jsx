import { InformationsContainer, ModalContainer, PricesContainer } from "./styles"
import { IoMdArrowBack } from "react-icons/io";
import ipiranga from "../../assets/ipiranga.svg"
import arrowDown from '../../assets/arrowDown.svg'
import arrowUp from "../../assets/arrowUp.svg"
import mapa from "../../assets/mapa.svg"
import seta from "../../assets/seta.svg"


export function Modal() {

    return(
      <ModalContainer>
        <button className="buttonBack">
          <IoMdArrowBack />
          <p>Voltar</p>
        </button>
        <div className="container">
          <InformationsContainer>
            <img src={ipiranga} alt="Bandeira" className="flag"/>
            <h1>Universidade de Marília</h1>
            <p>Avenida Hygino Muzzy Filho, 1001, Marília-SP, Cep 17525–902</p>
            <p>(14) 2105-4000</p>
            <button><img src={seta} alt="Seta indicando para virar a direita" className="icon"/>Rotas</button>
          </InformationsContainer>
          <div>
            <PricesContainer>
              <div>
                <h2 className="type">Gasolina<img src={arrowUp} alt="" /></h2>
                <h2 className="up"><span>R$</span>5,96</h2>
              </div>
              <div>
                <h2 className="type">Etanol<img src={arrowUp} alt="" /></h2>
                <h2 className="up"><span>R$</span>5,96</h2>
              </div>
              <div>
                <h2 className="type">Diesel<img src={arrowDown}/></h2>
                <h2 className="down"><span>R$</span>5,96</h2>
              </div>
            </PricesContainer>
            <img src={mapa} alt="" className="maps"/>
          </div>
        </div>
      </ModalContainer>  
    )
}