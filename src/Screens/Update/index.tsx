import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';

import * as C from './styles';

const UpdatePassword: React.FC = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [mode] = useState(true);


    const auth = useAuth();
    const navigate = useNavigate();

    const handleUpdatePassword = async () => {

        
        if (password && confirmPassword) {
            
            if (password !== confirmPassword) {
                return setError('As senhas devem ser iguais.')
            }

            if (mode) 
              return  navigate('/user')

            else if (!mode)
              return  navigate('/login')

            const update = await auth.updatePass(password);
            setError(auth.message);
            return update;
        }
    }

    return (
        <C.Container>
            <C.Form>
                <h1>Bem-vindo, {auth.user?.fullname}</h1>
                <h3>Por favor, altere a sua senha.</h3>
            <C.LabelError>{error}</C.LabelError>
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
                <C.InputGroup>
                <C.Input 
                        type="password" 
                        name="confirmPassword" 
                        placeholder='Repeat Password...'
                        value={confirmPassword}
                        onChange={e => [setConfirmPassword(e.target.value), setError('')]}
                        required
                    />
                </C.InputGroup>
                <C.ContentBtnSubmit>
                    <C.Button onClick={e => {
                        e.preventDefault();
                        handleUpdatePassword();
                    }}>SIGN UP</C.Button>
                </C.ContentBtnSubmit>
            </C.Form>
        </C.Container>
  );    
}

export default UpdatePassword;