// insertMessages.js
const Message = require('../models/message');
const sequelize = require('../db');

const messages = [
    {
        id: 12026788,
        uid: 'X501063',
        from_uid: 'T597441',
        last_msg: '[自动回复] 订单号 [1696466]，订单完成',
        last_time: 1712261244542,
        is_top: true,
        unread: 0,
        tnickname: '嘟嘟欧耶',
        tsex: '2',
        ol_status: true,
        ol_last_time: 1723822953398,
        tuser_status: '1'
    },
    {
        id: 6165801,
        uid: 'X501063',
        from_uid: 'Q188136',
        last_msg: '不好意思刚看到',
        last_time: 1670665368032,
        is_top: true,
        unread: 0,
        tnickname: '天才敏敏',
        tsex: '2',
        ol_status: false,
        ol_last_time: 0,
        tuser_status: '1'
    },
    {
        id: 4772341,
        uid: 'X501063',
        from_uid: 'M575232',
        last_msg: '想和你一起玩耍，可刚可苟人皮话也多',
        last_time: 1664886171263,
        is_top: true,
        unread: 0,
        tnickname: '小哭包',
        tsex: '1',
        ol_status: false,
        ol_last_time: 0,
        tuser_status: '2'
    },
    {
        id: 4771536,
        uid: 'X501063',
        from_uid: 'S455698',
        last_msg: '双区有号技术陪KD6.0带老板上分为主主打度假岛新赛季开始了可以带老板上分上王牌6星很轻松哦全程保护呵护老板安全',
        last_time: 1664884660021,
        is_top: true,
        unread: 0,
        tnickname: 'ღ 渔宝（技术陪）头像本',
        tsex: '1',
        ol_status: false,
        ol_last_time: 0,
        tuser_status: '2'
    },
    {
        id: 4771491,
        uid: 'X501063',
        from_uid: 'D558422',
        last_msg: '哈喽，kd不够，不会夹的可以吗？哥哥',
        last_time: 1664884535129,
        is_top: true,
        unread: 0,
        tnickname: '梨子',
        tsex: '2',
        ol_status: false,
        ol_last_time: 0,
        tuser_status: '1'
    },
    {
        id: 4109696,
        uid: 'X501063',
        from_uid: 'E228754',
        last_msg: '可以的话先加一下我联系',
        last_time: 1661654802775,
        is_top: true,
        unread: 0,
        tnickname: '小池',
        tsex: '2',
        ol_status: false,
        ol_last_time: 0,
        tuser_status: '1'
    }
];

(async () => {
    try {
        await sequelize.sync(); // 确保模型已同步到数据库
        await Message.bulkCreate(messages, { ignoreDuplicates: true }); // 插入数据
        console.log('Messages inserted successfully');
    } catch (error) {
        console.error('Error inserting messages:', error);
    } finally {
        await sequelize.close(); // 关闭数据库连接
    }
})();
