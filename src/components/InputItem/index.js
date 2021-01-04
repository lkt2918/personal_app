import React, {useState, useEffect} from 'react';
import { useDispatch } from 'redux-react-hook';
import { Input, Form, Button, Row, Col , message} from 'antd';
import styles from './index.module.less';
import { getCaptcha } from '../../actions/register';


const InputItem = (props) => {
    const dispatch = useDispatch();
    //const {placeholder, size} = props;   one way to write but not good
    const { name, rules, ...rest } = props;
    const [timing,setTiming] = useState(false);//是否在倒计时
    const [count,setCount] = useState(props.countDown || 60);
    const handleClickCaptcha = () => {
        message.success('get the code 1234');
        dispatch(getCaptcha());
        setTiming(true);
    } 
    //如果任何变量发生改变的话  用到这个功能
    useEffect(() => {
        let interval = 0;
        if (timing) {
            interval = window.setInterval(() => {
                setCount((preSecond) => {
                    if (preSecond <= 1) {
                        setTiming(false);
                        clearInterval(interval);
                        return props.countDown || 60;
                    }
                    return preSecond - 1;
                })
            }, 1000);
        }
        return () => clearInterval(interval);

    },[timing])


    if (name === 'captcha') {
        return (
            <Form.Item name={name} rules={rules}>
                <Row gutter={8}>
                    <Col span={12}>
                        <Input {...rest} /> 
                    </Col>
                    <Col span={12}>
                        <Button 
                            className={styles.getCaptcha} 
                            disabled={timing}
                            size="large"
                            onClick={handleClickCaptcha}
                        >
                        {timing ? `${count} s` : 'get the Captcha'}
                        </Button>
                    </Col>
                </Row>
            </Form.Item>
        )
    }
    return (
        //<Input placeholder={placeholder} size={size}/>
        <Form.Item name={name} rules={rules}>
            <Input {...rest} />
        </Form.Item>

    )
};


export default InputItem;