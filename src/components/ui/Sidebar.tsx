'use client'
import React, { useState } from 'react';
import { Layout, Menu, } from 'antd';
import { USER_ROLE } from '@/constants/role';
import { sidebarItems } from '@/constants/sidebarItems';
const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const role = USER_ROLE.STUDENT
    return (
        <Sider width={280} style={{ overflow: 'auto', height: '100vh', position: 'sticky', left: '0', top: '0', bottom: '0' }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div style={{ color: 'white', fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem' }}>
                PH University
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
        </Sider>
    );
};

export default Sidebar;