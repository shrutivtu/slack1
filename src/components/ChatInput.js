import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { db } from '../Firebase'; 
import firebase from 'firebase';
import { auth, provider } from '../Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

function ChatInput({channelName, channelId, chatRef}){
    //const inputRef = useRef(null);
    const [input, setInput] = useState("");
    //console.log(channelId);
    const [user] = useAuthState(auth);
    const sendMessage = e => {
        e.preventDefault();

        if(!channelId){
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userIamge:user?.photoURL
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput('');
    };

    return(
        <ChatInputContainer>
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)} 
                placeholder={'Message Room'} />
                <Button hidden type='submit' onClick={sendMessage}>SEND</Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius:20px;

    > form{
        position:relative;
        border-radius:20px;
        display:flex;
        justify-content:center;
    }

    > form > input{
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid grey;
        border-radius: 3px;
        padding: 20px;
        outline:none;
    }
    > form > button {
        display: none !important;
    }
`;