import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Login from './Login'
import Register from './Register'

class LoginRegister extends React.Component {
    render() {
        return (
            <div id="adl-logreg">
                <Tabs>
                    <TabList>
                        <Tab>Log In</Tab>
                        <Tab>Register</Tab>
                    </TabList>

                    <TabPanel>
                        <Login />
                    </TabPanel>
                    <TabPanel>
                        <Register />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default LoginRegister