import React, { useState } from 'react'
import styled from "styled-components"
import { useSpring, animated, config } from 'react-spring';
import { useHistory } from "react-router-dom";
import axios from "axios";


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function LoginScreen() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: config.default }))

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await axios("http://localhost:5005/api/adminauth/login", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });
        console.log(email);
        const data = res.json();
        console.log(res);
        if (res.status === 400 || !data) {

            window.alert('Invalid Credentials');

        } else {
            window.alert('Login Successful');
            history.push("/");
        }

    };

    return (
        <Background>
            <GlassCard
                onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                    transform: props.xys.interpolate(trans)
                }}
            >
                <WelcomeText>Welcome to the3percent</WelcomeText>
                <InputContainer>
                    <Input type="text" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input type="password" placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputContainer>
                <ButtonContainer >
                    <Button
                        type="text" placeholder="Email"
                        onClick={loginUser}
                    >LOGIN</Button>
                </ButtonContainer>
            </GlassCard>
        </Background>
    )
}

export default LoginScreen

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-image : url('/images/background2.jpg');
    background-position : center;
    background-size : cover;
    background-repeat : no-repeat;
    display: flex;
    align-items : center;
    justify-content : center;
`
const GlassCard = styled(animated.div)`
    diplay: flex;
    align-items: center;
    flex-direction: column;
    height: 60vh;
    width: 30vw;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(6px);
    border-radius: 10px;
    color: #ffffff;
`

const Input = styled.input`
    margin-top: 10px;
    margin-right: 30px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    width: 70%;
    height: 3rem;
    padding: 1.5rem;
    border: none;
    outline: none;
    color: #3c354e;
    font-size: 1rem;
    
    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #b9abe0;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
    }
    &::placeholder {
        color: #b9abe099;
        font-weight: 100;
        font-size: 1rem;
    }
`
const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Button = styled.button`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    text-transform: uppercase;
    width: 40%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    font-weight: bold:
    transition: all 0.9s ease;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
    margin: 3rem 3rem 3rem 1.5rem;   
`;
const WelcomeText = styled.h2`
    margin: 4rem 2rem 2rem 5rem;
`;








