const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import Sequelize instance
const User = require('../models/user'); // Import User model
const fetch = require('node-fetch');

// Insert users into the database
async function insertUsers(users) {
  try {
    for (const user of users) {
      await User.upsert({
        id: user.id,
        uid: user.uid,
        type: user.type,
        unit: user.unit,
        lv: user.lv,
        pct: user.pct,
        price: user.price,
        summary: user.summary,
        voice: user.voice,
        done_num: user.done_num,
        sex: user.sex,
        exp: user.exp,
        status: user.status,
        push: user.push,
        addtime: user.addtime,
        idletime: user.idletime,
        worktime: user.worktime,
        offtime: user.offtime,
        actuid: user.actuid,
        edittime: user.edittime,
        acttime: user.acttime,
        turnback_rate: user.turnback_rate,
        lately_turnback_rate: user.lately_turnback_rate,
        group_id: user.group_id,
        group_identity: user.group_identity,
        is_recommend: user.is_recommend,
        recommend_expire_time: user.recommend_expire_time,
        round_price: user.round_price,
        admin_comment: user.admin_comment,
        admin_comment_uid: user.admin_comment_uid,
        admin_comment_video: user.admin_comment_video,
        reject_reason: user.reject_reason,
        audit_time: user.audit_time,
        admin_comment_level: user.admin_comment_level,
        is_busy: user.is_busy,
        refund_rate: user.refund_rate,
        refund_num: user.refund_num,
        avatar: user.avatar,
        nickname: user.nickname
      });

      console.log(`Inserted/Updated user with id: ${user.id}`);
    }

    console.log('Data has been inserted/updated successfully.');
  } catch (error) {
    console.error('Unable to insert data:', error);
  }
}

// Fetch data from the API
async function fetchData(body) {
  try {
    const response = await fetch("https://php-api.peiwan.tv/api/peiwan/list", {
      headers: {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "api-version": "1.0",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "port": "PC",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Microsoft Edge\";v=\"127\", \"Chromium\";v=\"127\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "session-id": "notID"
      },
      referrer: "https://peiwan.tv/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: body,
      method: "POST",
      mode: "cors",
      credentials: "omit"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;  // Ensure that only the array of users is returned
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function main() {
  try {
    // Connect to the database
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    for (let i = 1; i <= 43; i++) {
      const body = `perPage=1000&order=2&page=1&type=${i}&refresh=&sex=`;
      const users = await fetchData(body);

      if (users && Array.isArray(users.list)) {
        await insertUsers(users.list);
      } else {
        console.error('Invalid user data:', users);
      }
    }
  } catch (error) {
    console.error('Unable to connect to the database or process data:', error);
  } finally {
    // Close the database connection after all operations are complete
    await sequelize.close();
  }
}

main();
