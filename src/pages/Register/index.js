import React, { useState } from 'react';
import { Form, Popover, Progress, Select, Row, Col } from 'antd';
import InputItem from '../../components/InputItem';
import styles from './index.module.less';
import SubmitButton from '../../components/SubmitButton';
import { Link } from 'react-router-dom';


const { Option } = Select;

const passwordProgressMap = {
    ok: 'success',
    pass: 'normal',
    poor: ' exception',
}
const passwordStatusMap = {
    ok: (
        <div className={styles.success}>
            level:high
        </div>
    ),
    pass: (
        <div className={styles.warning}>
            level:medium
        </div>
    ),
    poor: (
        <div className={styles.error}>
            level:low
        </div>
    ),
}


const Register = () => {
    const [visible, setVisible] = useState(false);
    const [popover, setPopover] = useState(false);
    const [prefix, setPrefix] = useState('1');
    const [form] = Form.useForm();
    const handleFinish = (values) => {
        console.log(values);
    }
    const checkConfirm = (_, value) => {
        const promise = Promise;
        if (value && value !== form.getFieldValue('password')) {//第一个证明有
            return promise.reject("the password is not the same")
        }
        return promise.resolve();
    }
    const getPasswordStatus = () => {
        const value = form.getFieldValue('password');
        if (value && value.length > 9) {
            return 'ok';
        }
        if (value && value.length > 5) {
            return 'pass';
        }
        return 'poor';
    }

    const checkPassword = (_, value) => {
        const promise = Promise;
        if (!value) {
            setVisible(!!value);
            return promise.reject('pls enter the password');
        }
        if (!visible) {
            setVisible(!!value);
        }
        setPopover(!popover);
        if (value && form.getFieldValue('confirm')) {
            form.validateFields(['confirm']);// 两个值都存在的话 重新校验一下
        }
        return promise.resolve();

    }
    const renderPasswordProgress = () => {
        const value = form.getFieldValue('password');
        const passwordStatus = getPasswordStatus();

        return value && value.length && (
            <div className={styles[`progress-${passwordStatus}`]}>
                <Progress
                    className={styles.progress}
                    status={passwordProgressMap[passwordStatus]}
                    strokeWidth={6}
                    percent={value.length * 10 > 100 ? 100 : value.length * 10}
                    showInfo={false}
                />
            </div>
        )

    }

    return (

        <div className={styles.registerContainer}>
            <div className={styles.register}>
                <Form
                    form={form}
                    onFinish={handleFinish}
                >
                    <InputItem
                        name="mail"
                        placeholder="Email"
                        size="large"
                        rules={[
                            {
                                required: true,
                                message: 'pls enter the email'
                            },
                            {
                                type: 'email',
                                message: 'pls enter the right email format'
                            }
                        ]}
                    />
                    <Popover
                        content={
                            visible && (
                                <div>
                                    {passwordStatusMap[getPasswordStatus()]}
                                    {renderPasswordProgress()}
                                    <div>
                                        pls enter at least 8 words
                                </div>
                                </div>
                            )
                        }
                        overlayStyle={{ width: 240 }}
                        placement="right"
                        visible={visible}
                    >
                        <InputItem
                            name='password'
                            type='password'
                            placeholder="password"
                            size="large"
                            rules={[
                                {
                                    validator: checkPassword,
                                }
                            ]}
                        />
                    </Popover>
                    <InputItem
                        name='confirm'
                        type='password'
                        placeholder="makesure password"
                        size="large"
                        rules={[
                            {
                                required: true,
                                message: 'pls make sure the password'
                            },
                            {
                                validator: checkConfirm,

                            }
                        ]}
                    />
                    <Row>
                        <Col span={6}>
                            <Select
                                size='large'
                                value={prefix}
                                onChange={(value) => setPrefix(value)}
                                style={{ width: '100%' }}
                            >
                                <Option value="86">+86</Option>
                                <Option value="1">+1</Option>
                            </Select>
                        </Col>
                        <Col span={18}>
                            <InputItem
                                name='mobile'
                                placeholder="phone number "
                                size="large"
                                rules={[
                                    {
                                        required: true,
                                        message: 'pls enter the phone number'
                                    },
                                    {
                                        pattern: /^\d{11}$/,
                                        message: 'format is not right'
                                    }
                                ]}
                            />
                        </Col>
                    </Row>
                    <InputItem
                        name='captcha'
                        size="large"
                        rules={[
                            {
                                required: true,
                                message: 'pls enter captcha '
                            }
                        ]}
                        placeholder='captcha'
                    />
                    <Row justify="space-between" align="middle">
                        <Col span={8}>
                            <SubmitButton>Register</SubmitButton>
                        </Col>
                        <Col span={16}>
                            <Link className={styles.login}  to="/login"> Use the own account</Link>
                        </Col>
                    </Row>

                </Form>
            </div>
        </div>
    )
}

export default Register;