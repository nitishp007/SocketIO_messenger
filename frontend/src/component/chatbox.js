import React, { useState } from 'react'
import Pic from '../assets/pic.jpg';
import { Box, Divider, Stack, colors } from '@mui/material';
import { Mic, MoreVertOutlined } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Col, Row } from 'antd';
import { messagesList } from '../data/mockdata';
const Chatbox = (props) => {
    const {Chats} = props;
    const [text, setText] = useState('');
    const onPressEnter =(e)=>{
        if(e.key === "enter"){
            
        }
    }
    return (
        <div>
            {/* chatbox headfield */}

            <Stack direction={'row'} padding={2} style={{ backgroundColor: '#222e35' }} justifyContent={'space-between'} >
                <Stack direction={'row'} style={{ cursor: 'pointer' }}>
                    <img style={{ width: '40px', height: '40px', borderRadius: '100%' }} src={Pic} />
                    <Stack paddingLeft={1} alignItems={'start'} >
                        <div style={{ color: 'rgb(220, 212, 212)', fontSize: '18px' }}>{Chats.name}</div>
                        <div style={{ color: 'grey', fontSize: '12px' }}>Click here to check contact info</div>
                    </Stack>
                </Stack>
                <span>
                    <MoreVertOutlined style={{ color: 'rgb(220, 212, 212)' }} />
                </span>
            </Stack>



            {/* Message */}

            <Box height={'auto'} padding={1} display={'flex'} flexDirection={'column'} gap={1} overflow={'auto'}  >
                {messagesList.map((msgData) => (
                    <Row >
                        <Col style={{ backgroundColor: 'lightgreen', color: 'white', padding: '8px', borderRadius: '4px' }}>{msgData.text}</Col>
                    </Row>
                ))}
            </Box>



            {/* search field */}

            <Stack direction={'row'} padding={0.5} style={{ backgroundColor: '#222e35' }} alignItems={'center'} position={'absolute'} width={'99%'} bottom={0}>
                <EmojiEmotionsOutlinedIcon style={{ color: 'rgb(220, 212, 212)', paddingRight: '5px' }} />
                <AddOutlinedIcon style={{ color: 'rgb(220, 212, 212)' }} />
                <Stack direction={'row'} spacing={1} style={{ width: '90%', backgroundColor: 'rgba(31, 34, 35, 0.881)', borderRadius: '8px', margin: '10px', padding: '6px' }}>
                    <SearchIcon style={{ color: 'rgb(220, 212, 212)' }} />
                    <input style={{ color: 'rgb(220, 212, 212)', border: 'none', background: 'transparent', outline: 'none', width: '100%' }} placeholder='Search' onKeyDown={onPressEnter} />
                </Stack>
                <Mic style={{ color: 'rgb(220, 212, 212)' }} />
            </Stack>
        </div>
    )
}

export default Chatbox;