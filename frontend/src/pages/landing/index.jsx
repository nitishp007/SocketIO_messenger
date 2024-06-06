
import { Box, Stack, TableHead} from '@mui/material'
import { Tabs, Tab } from "baseui/tabs";
import React, { useState } from 'react'
import Login from '../../component/login/login.jsx';
import Signup from '../../component/register/register.jsx';
import { Client as Styletron } from 'styletron-engine-monolithic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
const engine = new Styletron();

const LandingPage = () => {
    const [activeKey, setActiveKey] = useState("1");
    return (
        <Stack alignItems={'center'} justifyContent={'center'} spacing={3}>
            <Box>
                <TableHead sx={{color:'greenyellow'}}>Chat+😷+Sockets</TableHead>
            </Box>
            <Box sx={{ width: '30%', height:'100vh',backgroundColor:'wheat'}}>
                <StyletronProvider value={engine}>
                    <BaseProvider theme={LightTheme}>
                        <Tabs
                            onChange={({ activeKey }) => {
                                setActiveKey(activeKey);
                            }}
                            activeKey={activeKey}
                        >
                            <Tab title="Login"><Login/></Tab>
                            <Tab title="Sign up"><Signup/></Tab>
                        </Tabs>
                    </BaseProvider>
                </StyletronProvider>
            </Box>

        </Stack>
    )
}

export default LandingPage