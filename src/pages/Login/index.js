import React , {useState} from 'react';
import { Tabs, Form, Checkbox ,Row} from 'antd';
import styles from './index.module.less';
import InputItem from '../../components/InputItem';
import SubmitButton from '../../components/SubmitButton/index';
import {UserOutlined , LockTwoTone, 
    MobileTwoTone, MailTwoTone, AlipayCircleOutlined,
    TaobaoCircleOutlined, WeiboCircleOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';


const { TabPane } = Tabs;

const Login = () => {
    const [autoLogin, setAutoLogin] = useState(true);
    const [form] = Form.useForm();
    const handleFinish = (values) => {
        console.log(values);
    }
    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
            <Form
                form={form}
                onFinish={handleFinish}
            >
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Web_login" key="1">
                        <InputItem
                            name="username"
                            prefix={
                                <UserOutlined style={{ color: '#1890ff'}}/>
                            }
                            placeholder="username"
                            size="large"
                            rules={[
                                {
                                required: true,
                                message: 'pls enter the username'
                                }
                            ]}
                        />
                        <InputItem
                            name='password'
                            type='password'
                            prefix={
                                <LockTwoTone style={{ color: '#1890ff'}}/>
                            }
                            placeholder="password"
                            size="large"
                            rules={[
                                {
                                required: true,
                                message: 'pls enter the password'
                                }
                            ]}
                        />
                    </TabPane>
                    <TabPane tab="Phone_login" key="2">
                    <InputItem
                    name="mobile"
                    prefix={
                        <MobileTwoTone/>
                    }
                    placeholder="phonenumber"
                    size="large"
                    rules={[
                        {
                        required: true,
                        message: 'pls enter the phonenumber'
                        }
                    ]}
                />
                <InputItem
                    name='captcha'
                    prefix={
                        <MailTwoTone />
                    }
                    placeholder="captcha"
                    size="large"
                    rules={[
                        {
                        required: true,
                        message: 'pls enter the captcha'
                        }
                    ]}
                /> 
                    </TabPane>
                </Tabs>
                <Row justify="space-between">
                    <Checkbox 
                        checked={autoLogin}
                        onChange={(e) => setAutoLogin(e.target.checked)}
                    >autoLogin</Checkbox>     
                    <a href="#!">Forget password</a>   
                </Row>
                <SubmitButton>Login</SubmitButton>
                </Form>
                <div className={styles.other}>
                    other Login Method
                    <AlipayCircleOutlined className={styles.icon} />
                    <TaobaoCircleOutlined className={styles.icon} />
                    <WeiboCircleOutlined className={styles.icon} />
                    <Link className={styles.register} to="/register">
                        Register Account
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;