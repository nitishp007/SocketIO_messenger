import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Col, Flex, Row } from 'antd';
import style from './style.module.scss';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import { UserOutlined } from '@ant-design/icons';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from 'antd';
import Contact from './contact';
import Chatbox from './chatbox';
import bgImage from '../assets/background.jpg'
import { contactList } from '../data/mockdata';
import Pic from '../assets/pic.jpg'
const Chat = () => {
    const [selectedChats, setChats] = useState()
    return (
        <Row>
            <Col span={1} className={style.iconBox}>
                <Stack spacing={3}>
                    <MessageRoundedIcon className={style.icon} />
                    <GroupsRoundedIcon className={style.icon} />
                    <DonutLargeIcon className={style.icon} />
                    <MapsUgcRoundedIcon className={style.icon} />
                </Stack>
                <Stack spacing={3}>
                    <SettingsIcon className={style.icon} />
                    <img style={{height:'30px', width:'30px' ,borderRadius:'100%'}} src={Pic} />
                </Stack>
            </Col >
            <Col span={7} className={style.search}>
                <Stack>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1 style={{ color: 'rgb(220, 212, 212)', padding: '10px 20px', margin: '0px' }}>Chats</h1>
                        <span style={{ padding: '10px' }}>
                            <AddCommentOutlinedIcon className={style.icon} />
                            <MoreVertIcon className={style.icon} />
                        </span>
                    </div>
                    <div>
                        <Stack direction={'row'} spacing={1} style={{ backgroundColor: 'rgba(31, 34, 35, 0.881)', borderRadius: '8px', margin: '10px', padding: '10px' }}>
                            <SearchIcon style={{ color: 'rgb(220, 212, 212)' }} />
                            <input style={{ color: 'rgb(220, 212, 212)', border: 'none', background: 'transparent', outline: 'none', width: '100%' }} placeholder='Search' />
                        </Stack>
                        <Stack overflow={'auto'}>
                            {contactList.map((userData) => (
                                <Contact userData={userData} setchat={setChats}/>
                            ))}
                        </Stack>
                    </div>
                </Stack>
            </Col>
            <Col span={16} className={style.message}>
                {selectedChats?<Chatbox Chats={selectedChats}/>:<img style={{height:'100%', width:'100%', overflow:'clip'}} src={bgImage}/>}
            </Col>
        </Row >
    );
};

export default Chat;