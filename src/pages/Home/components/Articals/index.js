import React from 'react';
import { List, Tag } from 'antd';
import { StarTwoTone, LikeOutlined, MessageFilled } from '@ant-design/icons';
import styles from './index.module.less';
import ArticalListContent from '../ArticalListContent';
const IconText = ({ icon, text }) => {
    <span>
        {icon} {text}
    </span>
};



const Articals = ({ list }) => {
    return (
        <List
            size="large"
            className={styles.articalList}
            rowKey="id"
            itemLayout="vertical"
            dataSource={list}
            renderItem={(item) => (
                <List.Item
                    key={item.id}
                >
                    <List.Item.Meta
                        title={
                            <a className={styles.listItemMetaTitle} href={item.href}>
                                {item.title}
                            </a>
                        }
                        description={
                            <span>
                                <Tag>React</Tag>
                                <Tag>Redux</Tag>
                                <Tag>Mysql</Tag>
                            </span>
                        }
                    />
                   
                    
                </List.Item>
            )}
        />
    );

};

export default Articals;

// actions={[
//     <IconText key="star" icon={<StarTwoTone />} text={item.star}/>,
//     <IconText key="like" icon={<LikeOutlined />} text={item.like}/>,
//     <IconText key="message" icon={<MessageFilled />} text={item.message}/>,
// ]}

// <ArticalListContent data={item} />