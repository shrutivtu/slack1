import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { auth, provider } from '../Firebase';

function Login(){

    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) =>
            alert(error.message)
        );
    }

    return(
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://yt3.ggpht.com/ytc/AAUvwnhZtcTvJEkvuZMdTzjhPLvZGIQSo9nel4btx7j9rg=s900-c-k-c0x00ffffff-no-rj" alt='' />
                <h1>Sign in to our community</h1>
                <p>goolge.com</p>
                <Button type="submit" onClick={signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
    background-color:#f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
    
`;
const LoginInnerContainer = styled.div`

    /* padding: 10px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24));  */
    //width:48%;
    margin:0 auto;
    text-align:center;
    background-color:white;
    //height: 55vh;
    box-sizing:border-box;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding:100px;

    > img{
        width:200px;
        height: 200px;
        //margin-bottom:20px;
        //margin-top:55px;
        //box-shadow: 0 10px 6px -6px #777;
        
    }

    > button{
        margin-top:50px;
        text-transform:inherit !important;
        background-color:rgba(97,31,105,.9);
        color:white;
        padding:10px;
    }
`;