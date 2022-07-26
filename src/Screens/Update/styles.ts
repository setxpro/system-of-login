import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #333333;
`;
export const Form = styled.form`
    height: 500px;
    width: 500px;
    box-shadow: 1px 1px 15px #666;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1 {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: #EEE;
    }
    h3 {
        color: #999; 
    }
`;

export const InputGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const Input = styled.input`
    width: 89%;
    max-width: 400px;
    padding: .5rem 0 0 0;
    border: 0;
    border-bottom: 2px solid #FFF;
    outline: none;
    
    color: #EEE;
    background: transparent;
    font-size: 1.5em;
`;
export const ContentBtnSubmit = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;
export const Button = styled.button`
    padding: .8rem 2rem;
    border: none;
    border-radius: 8px;
    background: #EEE;
    color: #333;
    font-weight: bold;
    cursor: pointer;

    transition: .5s;
    &:hover {
        opacity: 0.83;
    }
`;
export const LabelError = styled.label`
    font-size: 1.3em;
    color: #f00;
    font-weight: bold;
`;