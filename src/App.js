import React, { useEffect, useState } from 'react';
import './App.scss';
import styled from 'styled-components';
import Header from './componentes/Header/header';
import Main from './componentes/Main/main';
import Footer from './componentes/Footer/footer';
import Login from './componentes/Login/login';

function App() {
  const [telaLogin, setTelaLogin] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usuário, setUsuário] = useState([]);

  const handleAuth = () => {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
  };

  const usernameLoged = sessionStorage.getItem('username');
  const passwordLoged = sessionStorage.getItem('password');

  useEffect(() => {
      fetch('http://localhost:3001') 
        .then(response => response.json())
        .then(data => {
          setUsuário(data.usuário);
        })
        .catch(error => {
          console.error('Erro ao obter dados da API:', error);
        });
    
      setTelaLogin(usernameLoged === 'fiap' && passwordLoged === '1234');
  }, [usernameLoged, passwordLoged]);

  if (telaLogin) {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  } else {
    return (
      <LoginArea>
        <h1 style={{ color: '#222' }}>Login</h1>
        <Username
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Password
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" onClick={handleAuth}>
          Entrar
        </Button>
      </LoginArea>
    );
  }
}


const LoginArea = styled.form`
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 1rem;
`;

const Username = styled.input`
  padding: 0.8rem 0.5rem;
`;

const Password = styled.input`
  padding: 0.8rem 0.5rem;
`;

const Button = styled.button`
  padding: 0.8rem 0.5rem;
`;

export default App;
