import { Modal } from '../../components/Modal'
import { HeaderComp } from '../../components/Header'
import {HomeContainer} from './styles'

export function Home() {
    return(
        <HomeContainer>
            <HeaderComp/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Modal/>
            </div>
        </HomeContainer>
    )
}