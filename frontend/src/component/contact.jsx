import React from 'react'
import Pic from '../assets/pic.jpg';
import style from './style.module.scss';
import { Divider, Stack } from '@mui/material';

const Contact = (props) => {
    const { userData, setchat } = props;
    return (
        <span className={style.list} onClick={() => setchat(userData)}>
            <Stack direction={'row'} padding={2} style={{ cursor: 'pointer' }} justifyContent={'space-between'} >
                <Stack direction={'row'} >
                    <img style={{ width: '45px', height: '45px', borderRadius: '100%' }} src={Pic}  alt=''/>
                    <Stack paddingLeft={1} alignItems={'start'} >
                        <div style={{ color: 'rgb(220, 212, 212)', fontSize: '18px' }}>{userData?.name}</div>
                        <div style={{ color: 'grey', fontSize: '14px' }}>{userData?.lastText}</div>
                    </Stack>
                </Stack>
                <span style={{ color: 'rgb(220, 212, 212)', fontSize: '14px' }}>{userData?.lastTextTime}</span>
            </Stack>
            <Divider orientation="horizontal" variant="middle" flexItem style={{ borderColor: '#222e35' }} />
        </span>
    )
}

export default Contact;