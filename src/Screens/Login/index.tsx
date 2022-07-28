import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';

import * as C from './styles';

const Login = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    const handleClick = async () => {
        if (!login) {
            setError('Insira ao menos um Login...')
        }
        if (!senha) {
            setError('Insira ao menos uma senha...')
        }
        if (login && senha) {
            const isLogged = await auth.signIn(login, senha);
            setMsg(auth.message);

            if (isLogged) {
                navigate('/update-password');
            }
            
        }
    }

  return (
    <C.Container>
        <C.Form autoComplete="off">
            <C.LabelError>{msg}{error}</C.LabelError>
            <C.InputGroup>
                <C.Input 
                    type="text" 
                    name="login" 
                    placeholder='Login...'
                    value={login}
                    onChange={e => 
                        [setLogin(e.target.value), setError(''), setMsg('')]
                    }
                    required
                />
            </C.InputGroup>
            <C.InputGroup>
                <C.Input 
                    type="password" 
                    name="password" 
                    placeholder='Password...'
                    value={senha}
                    onChange={e => 
                        [setSenha(e.target.value), setError(''), setMsg('')]
                    }
                    required
                />
            </C.InputGroup>
            <C.ContentBtnSubmit>
                <C.Button 
                    onClick={e => {
                    e.preventDefault();
                    handleClick();
                }}>SIGN IN</C.Button>
            </C.ContentBtnSubmit>
        </C.Form>
    </C.Container>
  );
}

export default Login;