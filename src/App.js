import React from 'react';
import { Card, Dropdown, Space } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import './App.css';



const App = () => {
    return (
        <div className='body'>
            <div className='header'>
                <h1 className='header-title'>Video Chat</h1>
            </div>

            <VideoPlayer />

            <Options>
                <Notifications />
            </Options>

        </div>
    )
}

export default App
