import React from 'react';
import Avatar from 'antd/lib/avatar/avatar';
import moment from 'moment';
import styles from './index.module.less';
const ArticalListContent = ({
    data: {content, avatar,owner, href, updateAt}
}) => {
    <div>
        <div>{content}</div>
        <div className={styles.extra}>
            <Avatar src={avatar} size="small" />
            <a href={href}>{owner}</a>Release on<a href={href}>{href}</a>
            <em>{moment(updateAt).format('YYYY-MM-DD')}</em>
        </div>
    </div>

};

export default ArticalListContent;