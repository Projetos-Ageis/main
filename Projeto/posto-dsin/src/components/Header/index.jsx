import {HeaderContainer} from './styles'
import Header from "../../assets/Header.svg"
import User from "../../assets/user.svg"
import { useState, useEffect } from 'react';
import { GetOdata } from './actions';

export function HeaderComp() {
    const [loginResponse, setLoginResponse] = useState(null);
    useEffect(() => {
        const information = async () => {
          
          try {
            const response = await GetOdata();
            setLoginResponse(response);
            console.log(response)
          } catch (error) {
            console.error("Erro ao tentar logar:", error);
          }
        };
    
        information();
      }, []);
      console.log(loginResponse?.nome)

    return(
        <HeaderContainer>
            <img src={Header} alt="" className='logo'/>
            <input type="text" />
            <div style={{display: "flex",alignItems: "center",gap: '15px'}}>
                <div className='details' >
                    <p className='h2'>Bem Vindo,</p>
                    <a href="/profile">{loginResponse?.nome}</a>
                </div>
                <img src={User} alt="" className='user'/>
            </div>
        </HeaderContainer>
    )
}