import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOptions from './Sidebaroptions'; 

import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { db } from '../Firebase'; 
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, provider } from '../Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth);
    
    const Fun = ({ channels }) => {
            
            channels?.docs.map((doc) => {
                
                return(
                    <SidebarOptions 
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name} 
                    />)
                
                    
            })
    
    }
    
    return(
        <SidebarContent>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>React HQ</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user.displayName}
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>

            <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
            <SidebarOptions Icon={InboxIcon} title="Mentions and Reactions" />
            <SidebarOptions Icon={DraftsIcon} title="Saved items" />
            <SidebarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
            <SidebarOptions Icon={PeopleAltIcon} title="People and User Groups" />
            <SidebarOptions Icon={AppsIcon} title="Apps" />
            <SidebarOptions Icon={FileCopyIcon} title="File Browser" />
            <SidebarOptions Icon={ExpandLessIcon} title="Show Less" />

            <hr />
            
            <SidebarOptions Icon={ExpandMoreIcon} title="Show More" />
            <SidebarOptions Icon={AddIcon} addChannelOption title="Add Channel" />
            
            {channels?.docs.map(
                (doc) => {
                    
                     return(
                     <SidebarOptions 
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name} 
                    />)
            
        })}

        </SidebarContent>
    );
}

export default Sidebar;

const SidebarContent = styled.div`
    color:white;
    background-color: var(--slack-color);
    flex:0.3;
    border-top:1px solid #49274b;
    max-width:260px;
    margin-top:60px;
    overflow-y: scroll;

    >hr{
        margin-top:10px;
        margin-bottom:10px;
        border:1px solid #49274b;
    }
`;

const SidebarHeader = styled.div`
    display:flex;
    border-bottom:1px solid #49274b;
    padding:13px;

    > .MuiSvgIcon-root{
        padding:8px;
        color: #49274b;
        font-size:10px;
        background-color:white;
        border-radius:999px;
    }
`;

const SidebarInfo = styled.div`
    flex:1;

    > h2{
        font-size:15px;
        font-weight:900;
        margin-bottom:5px;
    }
    > h3{
        display:flex;
        font-size:13px;
        font-weight:400;
        align-items:center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size:14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;