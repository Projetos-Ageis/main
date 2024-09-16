import {HeaderContainer} from './styles'
import Header from "../../assets/Header.svg"
import User from "../../assets/user.svg"

export function HeaderComp() {
    return(
        <HeaderContainer>
            <img src={Header} alt="" className='logo'/>
            <input type="text" />
            <div style={{display: "flex",alignItems: "center",gap: '15px'}}>
                <div className='details'>
                    <p className='h2'>Bem Vindo,</p>
                    <p>UserName</p>
                </div>
                <img src={User} alt="" className='user'/>
            </div>
        </HeaderContainer>
    )
}