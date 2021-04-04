import React from 'react';
import './Navbar.css';
import { Menu } from 'antd';
import { Button } from './Button';

function Navbar() {
    return (
        <>
        <div className="navbar">
          <h1 className="navbar-logo"> Self Love Warrior </h1>
          <Menu className="navbar-container" theme="white" mode="horizontal">
            <Menu.Item key="1">About Us</Menu.Item>
            <Menu.Item key="2">Our Programs</Menu.Item>
            <Menu.Item key="3">Our Community</Menu.Item>
          </Menu>
          <Button className='btns' buttonStyle='btn--secondary' 
                buttonSize='btn--small'>Donate</Button>
        </div>
        </>
    )
}

export default Navbar
