import './Home.css';
import { Layout, Menu, Breadcrumb } from 'antd';

const {Content, Footer } = Layout;

function Home() {

    return (
        <Layout className="layout">
        
        <Content style={{ padding: '0 0' }}>
          <div className="site-layout-content">Content</div>
        </Content>
        
      </Layout>
    
    );
}
 
export default Home;


