
import './App.css';
import 'antd/dist/antd.css'
import FormAuthent from './authent/FormAuth';
import { Col, Layout, Row } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
    <Header>Header</Header>
    <Content>        
       <Row>
      <Col span={8}></Col>
      <Col span={8}><FormAuthent></FormAuthent></Col>
      <Col span={8}></Col>
    </Row></Content>
    <Footer>Footer</Footer>
  </Layout>
  );
}

export default App;
