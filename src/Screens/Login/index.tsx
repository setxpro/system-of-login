import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';

import * as C from './styles';

const Login = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleClick = async () => {
        if (!email) {
            setError('Insira ao menos um Login...')
        }
        if (!password) {
            setError('Insira ao menos uma senha...')
        }
        
        if (email && password) {

            const isLogged = await auth.signIn(email, password);
            if (isLogged) {
                navigate('/user');
            }
            
            else {
                setError('Não foi possível realizar login.')
            }
        }
    }

  return (
    <C.Container>
        <C.Form>
            <C.LabelError>{error}</C.LabelError>
            <C.InputGroup>
                <C.Input 
                    type="text" 
                    name="login" 
                    placeholder='Login...'
                    value={email}
                    onChange={e => [setEmail(e.target.value), setError('')]}
                />
            </C.InputGroup>
            <C.InputGroup>
                <C.Input 
                    type="password" 
                    name="password" 
                    placeholder='Password...'
                    value={password}
                    onChange={e => [setPassword(e.target.value), setError('')]}
                    required
                />
            </C.InputGroup>
            <C.ContentBtnSubmit>
                <C.Button onClick={e => {
                    e.preventDefault();
                    handleClick();
                }}>SIGN IN</C.Button>
            </C.ContentBtnSubmit>
        </C.Form>
    </C.Container>
  );
}

export default Login;