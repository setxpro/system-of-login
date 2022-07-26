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
    const [msg, setMsg] = useState('');

    const handleClick = async () => {
        if (!email) {
            setError('Insira ao menos um Login...')
        }
        if (!password) {
            setError('Insira ao menos uma senha...')
        }
        if (email && password) {
            const isLogged = await auth.signIn(email, password);
            setMsg(auth.message);

            if (isLogged) {
                navigate('/update-password');
            }
            
        }
    }

  return (
    <C.Container>
        <C.Form>
            <C.LabelError>{msg}{error}</C.LabelError>
            <C.InputGroup>
                <C.Input 
                    type="text" 
                    name="login" 
                    placeholder='Login...'
                    value={email}
                    onChange={e => 
                        [setEmail(e.target.value), setError(''), setMsg('')]
                    }
                />
            </C.InputGroup>
            <C.InputGroup>
                <C.Input 
                    type="password" 
                    name="password" 
                    placeholder='Password...'
                    value={password}
                    onChange={e => 
                        [setPassword(e.target.value), setError(''), setMsg('')]
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