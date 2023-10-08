import Contents from '@/components/ui/Contents';
import Sidebar from '@/components/ui/Sidebar';
import { Layout } from 'antd';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout hasSider style={{ minHeight: '100vh', color: 'black' }}>
            <Sidebar></Sidebar>
            <Contents>{children}</Contents>
        </Layout>
    );
};

export default DashboardLayout;