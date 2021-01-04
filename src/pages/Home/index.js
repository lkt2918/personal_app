import React, { useState } from 'react';
import { Row, Col, Card, Divider,Avatar } from 'antd';
import {Link} from 'react-router-dom';
import { ContactsOutlined, ClusterOutlined, HomeOutlined } from '@ant-design/icons';
import Articals from './components/Articals';
import Applications from './components/Applications';
import Projects from './components/Projects';
import TagList from './components/TagList';
import styles from './index.module.less';
import { currentUser, fakeList } from './data';







const operationTablist = [
    {
        key: 'articals',
        tab: (
            <span>
                Articles<span>(8)</span>
            </span>
        )
    },
    {
        key: 'applications',
        tab: (
            <span>
                Application<span>(10)</span>
            </span>
        )
    },
    {
        key: 'projects',
        tab: (
            <span>
                Project<span>(18)</span>
            </span>
        )
    }];



const Home = () => {
    const [tabKey, setTabkey] = useState('articals');
    const onTabChange = (key) => {
        setTabkey(key);
    }

    const articalList = fakeList(10);
    
    const renderChildrenByTabkey = (tabKey) => {
        if (tabKey === 'projects') {
            return <Projects />;
        } else if (tabKey === 'applications') {
            return <Applications />;
        } else {
            return <Articals list={articalList}/>;
        }
    };


    //gutter mains 24 is px not grid system
    return (
        <div className={styles.container}>
            <Row gutter={24}>
                <Col lg={7} md={24}>
                    <Card bordered={false} style={{ marginBottom: 24 }}>
                        <div className={styles.avatarHolder}>
                            <img alt="" src={currentUser.avatar} />
                            <div className={styles.name}>{currentUser.name}</div>
                            <div>{currentUser.signature}</div>
                        </div>
                        <div className={styles.detail}>
                            <p>
                                <ContactsOutlined className={styles.userInfoIcon} />
                                {currentUser.title}
                            </p>
                            <p>
                                <ClusterOutlined className={styles.userInfoIcon} />
                                {currentUser.group}
                            </p>
                            <p>
                                <HomeOutlined className={styles.userInfoIcon} />
                                {(currentUser.geographic || { province: { label: "" } }).province.label}
                            </p>
                        </div>
                        <Divider dashed />
                            <TagList tags={currentUser.tags}/>
                        <Divider dashed />
                        <div className={styles.team}>
                            <div className={styles.teamTitle}>Team</div>
                            <Row gutter={36}>
                                {
                                    currentUser.notice &&
                                    currentUser.notice.map((item) => (
                                        <Col key={item.id} lg={24} xl={12}>
                                            <Link to="/setting">
                                                <Avatar size="small" src={item.logo}/>
                                                {item.member}
                                            </Link>
                                        
                                        </Col>
                                    ))
                                }
                            </Row>            
                        </div>
                    </Card>
                </Col>
                <Col lg={17} md={24}>
                    <Card
                        bordered={false}
                        tabList={operationTablist}
                        activeTabKey={tabKey}
                        onTabChange={onTabChange}
                    >
                        {renderChildrenByTabkey(tabKey)}
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Home;