import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_USER } from "../../graphql/queries";
import { AUTH_TOKEN } from '../../constants';
import { User } from "../../typings/user";
import { useQuery, useMutation } from "@apollo/client";
import './styles.css'

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    name: ''
  });

  const [signIn, { data }] = useMutation(LOGIN_USER, { variables: { input: { email: formState.email, password: formState.password }}, onCompleted: ({ login }) => {
    localStorage.setItem(AUTH_TOKEN, login.token);
    navigate('/');
  }});

  console.log(signIn, data, "testeeeeeeeeeeeeeee")
  

  return (
    <>
      <div className="main">
        <div className="greeting">
          <h2 className="greeting__title">Olá, entre com e-mail e senha.</h2>
        </div>
        <form className="form" id="login__form">
          <div className="erro">
            <div className="form__input-email">
              <label className="form__label" htmlFor="email-input">
                Seu E-mail
              </label>
              <input type="email" className="email-input" name="email-input" id="email-input" placeholder="exemplo@email.com" required
                value={formState.email}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value
                  })
                }
              ></input>
              <em id="error-message" className="error-message">Este e-mail não existe, você tem outro?</em>
            </div>
          </div>
            <div className="form__input-password">
              <label className="form__label" htmlFor="password-input">
                Sua Senha
              </label>
              <input className="password-input" type="password" name="password-input" id="password-input" placeholder="Digite sua senha" required
                value={formState.password}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    password: e.target.value
                  })
                }
              ></input>
              <svg id="eye_icon" className="password-input__icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3127 15.313C15.0131 15.6345 14.6518 15.8924 14.2503 16.0713C13.8489 16.2502 13.4155 16.3464 12.9761 16.3541C12.5367 16.3619 12.1002 16.281 11.6927 16.1164C11.2852 15.9518 10.915 15.7068 10.6042 15.3961C10.2934 15.0853 10.0484 14.7151 9.88383 14.3076C9.71923 13.9001 9.63839 13.4636 9.64615 13.0242C9.6539 12.5847 9.75008 12.1514 9.92896 11.7499C10.1078 11.3484 10.3657 10.9871 10.6873 10.6875M19.48 19.4803C17.6152 20.9017 15.3445 21.6892 13 21.7275C5.36364 21.7275 1 13.0002 1 13.0002C2.35697 10.4714 4.23906 8.262 6.52 6.52025L19.48 19.4803ZM10.7091 4.53479C11.46 4.35903 12.2288 4.27116 13 4.27298C20.6364 4.27298 25 13.0002 25 13.0002C24.3378 14.2391 23.5481 15.4054 22.6436 16.4802L10.7091 4.53479Z" stroke="#425DC7" stroke-width="1.5"/>
                <path id="eye_bar" d="M1 1L25 25" stroke="#142159" stroke-width="1.5"/>
              </svg>                    
            </div>
            <div className="form__login-options">
              <div className="logins-options__input">
                <input type="checkbox" className="checkbox-input" id="checkbox-input" checked></input>
                <label className="checkbox-input-label" htmlFor="checkbox-input">Manter conectado</label>
              </div>
              <a href="/" className="logins-options__link">
                Esqueci minha senha
              </a>
            </div>
            <button type="submit" className="form__button" id="login_button_id"
              onClick={(e) =>
                setFormState({
                  ...formState,
                  login: !formState.login
                })
              }
            >
              Entrar
            </button>
        </form>
      </div>
    </>
  );
};