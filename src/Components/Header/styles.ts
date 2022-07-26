import styled from 'styled-components';

export const Container = styled.div`
    height: 90px;
    background: #212529;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1rem;

    .left-side {
        button {
            padding: 1rem 1.5rem;
            border-radius: 1rem;
            border: none;
            background: darkblue;
            color: #FFF;
            font-size: 1em;
            font-weight: bold;
            cursor: pointer;

            &:hover {
                opacity: 0.89;
            }
        }
    }
    .right-side {
        display: flex;
        gap: .5rem;
    }
    .content-name {
        > p {
            color: #EEE;
            &:nth-child(2) {
                text-align: end;
            }
        }
    }
    .content-avatar {
        
        > div {
            position: relative;

            ::after {
                content: '';
                width: 20px;
                height: 20px;
                border-radius: 12.5px;
                background: #0f0;
                position: absolute;
                bottom: 3.5px;
                right: 10px;

                border: 3px solid lightblue;
            }

            img {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                border: 3px solid #059;
                padding: 3px;
            }
        }
    }
`;
