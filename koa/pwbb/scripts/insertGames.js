// scripts/insertGames.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db'); // 导入 Sequelize 实例
const GameList = require('../models/gamelist'); // 导入 GameList 模型

const data = {
    "status": 1,
    "info": "ok",
    "data": {
        "1": {
            "id": 1,
            "name": "英雄联盟",
            "icon": "Fh8TVlpW1K_KKx2k7sVFiOze-XTl",
            "device": "pc",
            "indexShow": "1",
            "priority": 8,
            "keyWord": "英雄联盟,lol,撸啊撸,撸啊撸,League of Legends,MOBA",
            "summaryTips": "（必填）如:艾欧尼亚大师段位，中上野下路全能，擅长亚索、劫、男刀、盲僧等英雄，可接一区，峡谷双排组排乱斗23",
            "taskPs": "（选填）如：一区黄金局排位，来位技术大神。",
            "noAddition": "2",
            "hide": "2",
            "lv": {
                "1": {
                    "lv": 1,
                    "name": "silver",
                    "title": "白银"
                },
                "2": {
                    "lv": 2,
                    "name": "gold",
                    "title": "黄金"
                },
                "3": {
                    "lv": 3,
                    "name": "platinum",
                    "title": "铂金"
                },
                "4": {
                    "lv": 4,
                    "name": "diamond",
                    "title": "钻石"
                },
                "5": {
                    "lv": 5,
                    "name": "master",
                    "title": "大师"
                },
                "6": {
                    "lv": 6,
                    "name": "grandmaster",
                    "title": "宗师"
                },
                "7": {
                    "lv": 7,
                    "name": "challenger",
                    "title": "王者"
                }
            },
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 1,
            "task_limit_role": "{\"turnback_rate\":1000,\"done_num\":10,\"refund_rate\":8000,\"total_num\":20,\"task_limit_effect_num\":20}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "2": {
            "id": 2,
            "name": "绝地求生",
            "icon": "Fn2VN39cNH3chq13G1EmlwmEgj2F",
            "device": "pc",
            "indexShow": "1",
            "priority": 7,
            "keyWord": "绝地求生,吃鸡,pubg",
            "summaryTips": "（必填）如：亚服精英段位，时长2000+，KD2.0，可钢可苟",
            "taskPs": "（选填）如：亚服来位KD1.0以上的。",
            "noAddition": "2",
            "hide": "2",
            "lv": {
                "1": {
                    "lv": 1,
                    "name": "silver",
                    "title": "白银"
                },
                "2": {
                    "lv": 2,
                    "name": "gold",
                    "title": "黄金"
                },
                "3": {
                    "lv": 3,
                    "name": "platinum",
                    "title": "铂金"
                },
                "4": {
                    "lv": 4,
                    "name": "diamond",
                    "title": "钻石"
                },
                "5": {
                    "lv": 5,
                    "name": "master",
                    "title": "精英"
                },
                "6": {
                    "lv": 6,
                    "name": "grandmaster",
                    "title": "大师"
                },
                "7": {
                    "lv": 7,
                    "name": "challenger",
                    "title": "宗师"
                }
            },
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 1,
            "task_limit_role": "{\"turnback_rate\":1000,\"done_num\":10,\"refund_rate\":8000,\"total_num\":20,\"task_limit_effect_num\":20}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "3": {
            "id": 3,
            "name": "王者荣耀",
            "icon": "FlHSgNYRurQIuhadH3q6V7Tunw5A",
            "device": "mobile",
            "indexShow": "1",
            "priority": 10,
            "keyWord": "王者荣耀,王者联盟,英雄战迹,pvp,农药",
            "summaryTips": "（必填）如：微信区星耀段位，擅长中野位置，对兰陵王有深入理解，可接微信和QQ区钻石及以下双排。",
            "taskPs": "（选填）如：微信区黄金排位，来位实力打野位。",
            "noAddition": "2",
            "hide": "2",
            "lv": {
                "1": {
                    "lv": 1,
                    "name": "silver",
                    "title": "白银"
                },
                "2": {
                    "lv": 2,
                    "name": "gold",
                    "title": "黄金"
                },
                "3": {
                    "lv": 3,
                    "name": "platinum",
                    "title": "铂金"
                },
                "4": {
                    "lv": 4,
                    "name": "diamond",
                    "title": "钻石"
                },
                "5": {
                    "lv": 5,
                    "name": "master",
                    "title": "星耀"
                },
                "6": {
                    "lv": 6,
                    "name": "grandmaster",
                    "title": "王者"
                },
                "7": {
                    "lv": 7,
                    "name": "challenger",
                    "title": "荣耀"
                }
            },
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 15,
            "admin_comment_switch": 0,
            "task_limit": 1,
            "task_limit_role": "{\"turnback_rate\":1000,\"done_num\":10,\"refund_rate\":8000,\"total_num\":20,\"task_limit_effect_num\":20}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "4": {
            "id": 4,
            "name": "和平精英",
            "icon": "Fn2w5Mu5Y5ufUnR9-X6vOEpJEN8x",
            "device": "mobile",
            "indexShow": "1",
            "priority": 9,
            "keyWord": "和平精英,吃鸡手游,pubgm",
            "summaryTips": "（必填）如：王牌段位，KD2.0，可钢可苟，可接微信和QQ区",
            "taskPs": "（选填）如：四排来位KD1.0以上的。",
            "noAddition": "2",
            "hide": "2",
            "lv": {
                "1": {
                    "lv": 1,
                    "name": "silver",
                    "title": "白银"
                },
                "2": {
                    "lv": 2,
                    "name": "gold",
                    "title": "黄金"
                },
                "3": {
                    "lv": 3,
                    "name": "platinum",
                    "title": "铂金"
                },
                "4": {
                    "lv": 4,
                    "name": "diamond",
                    "title": "星钻"
                },
                "5": {
                    "lv": 5,
                    "name": "master",
                    "title": "皇冠"
                },
                "6": {
                    "lv": 6,
                    "name": "grandmaster",
                    "title": "王牌"
                },
                "7": {
                    "lv": 7,
                    "name": "challenger",
                    "title": "战神"
                }
            },
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 1,
            "task_limit_role": "{\"turnback_rate\":1000,\"done_num\":10,\"refund_rate\":8000,\"total_num\":20,\"task_limit_effect_num\":20}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "5": {
            "id": 5,
            "name": "守望先锋",
            "icon": "Fgr00FaIm4OfY7vehpzR-4111BVW",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "守望先锋,屁股,ow",
            "summaryTips": "（必填）如：宗师段位，擅长DVA，天使，半藏",
            "taskPs": "（选填）如：黄金段位来位实力C位",
            "noAddition": "2",
            "hide": "2",
            "lv": {
                "1": {
                    "lv": 1,
                    "name": "silver",
                    "title": "白银"
                },
                "2": {
                    "lv": 2,
                    "name": "gold",
                    "title": "黄金"
                },
                "3": {
                    "lv": 3,
                    "name": "platinum",
                    "title": "铂金"
                },
                "4": {
                    "lv": 4,
                    "name": "diamond",
                    "title": "钻石"
                },
                "5": {
                    "lv": 5,
                    "name": "master",
                    "title": "大师"
                },
                "6": {
                    "lv": 6,
                    "name": "challenger",
                    "title": "宗师"
                }
            },
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": "{\"turnback_rate\":0,\"done_num\":0,\"refund_rate\":0}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "6": {
            "id": 6,
            "name": "CSGO",
            "icon": "FrA9I2eKFTD4joxmw_Kp3H7PXKXb",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "CSGO,反恐精英,全球攻势,转刀",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": {
                "1": {
                    "lv": 1,
                    "name": "silver",
                    "title": "白银"
                },
                "2": {
                    "lv": 2,
                    "name": "gold",
                    "title": "黄金"
                },
                "3": {
                    "lv": 3,
                    "name": "platinum",
                    "title": "黄金AK"
                },
                "4": {
                    "lv": 4,
                    "name": "diamond",
                    "title": "老鹰"
                },
                "5": {
                    "lv": 5,
                    "name": "master",
                    "title": "小地球"
                },
                "6": {
                    "lv": 6,
                    "name": "challenger",
                    "title": "大地球"
                }
            },
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": "{\"turnback_rate\":0,\"done_num\":0,\"refund_rate\":0}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "7": {
            "id": 7,
            "name": "Dota2",
            "icon": "FoSYrju6nbQzTwsm_cu28SBLG-MR",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "Dota,刀塔",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": {
                "1": {
                    "lv": 1,
                    "name": "silver",
                    "title": "卫士"
                },
                "2": {
                    "lv": 2,
                    "name": "gold",
                    "title": "中军"
                },
                "3": {
                    "lv": 3,
                    "name": "platinum",
                    "title": "统帅"
                },
                "4": {
                    "lv": 4,
                    "name": "diamond",
                    "title": "传奇"
                },
                "5": {
                    "lv": 5,
                    "name": "master",
                    "title": "万古"
                },
                "6": {
                    "lv": 6,
                    "name": "grandmaster",
                    "title": "入圣"
                },
                "7": {
                    "lv": 7,
                    "name": "challenger",
                    "title": "冠世"
                }
            },
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": "{\"turnback_rate\":0,\"done_num\":0,\"refund_rate\":0}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "8": {
            "id": 8,
            "name": "穿越火线",
            "icon": "FqiRoPDjz0m9RLtwESCV8YykRZ0e",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "穿越火线,cf,CrossFire,喜爱福",
            "summaryTips": "（必填）如：南部大区,荣耀枪王分段,主玩M4",
            "taskPs": "（选填）如：南部,大师分段来人排位",
            "noAddition": "2",
            "hide": "2",
            "lv": {
                "1": {
                    "lv": 1,
                    "name": "silver",
                    "title": "专家"
                },
                "2": {
                    "lv": 2,
                    "name": "gold",
                    "title": "大师"
                },
                "3": {
                    "lv": 3,
                    "name": "platinum",
                    "title": "宗师"
                },
                "4": {
                    "lv": 4,
                    "name": "diamond",
                    "title": "传奇"
                },
                "5": {
                    "lv": 5,
                    "name": "master",
                    "title": "枪王"
                },
                "6": {
                    "lv": 6,
                    "name": "grandmaster",
                    "title": "荣耀枪王"
                },
                "7": {
                    "lv": 7,
                    "name": "challenger",
                    "title": "枪王之王"
                }
            },
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": "{\"turnback_rate\":0,\"done_num\":0,\"refund_rate\":0}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "9": {
            "id": 9,
            "name": "刀塔自走棋",
            "icon": "FmRrH9aaniIuLYvXBO5ljYUs-dM7",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "刀塔自走棋,dota自走棋,多多自走棋,下棋",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": "{\"turnback_rate\":0,\"done_num\":0,\"refund_rate\":0}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "10": {
            "id": 10,
            "name": "Apex英雄",
            "icon": "FkS3peYgFRN_96EfOqST6GASJjq6",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "apex英雄,派派,apex",
            "summaryTips": "（必填）如:18赛季大师段位，场伤500，KD1.5，常用机器人，烟妹",
            "taskPs": "（选填）如：港服黄金排位，来实力上分",
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 1,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "11": {
            "id": 11,
            "name": "堡垒之夜",
            "icon": "FnGcmHqx8cnwqmeXLtmV6OL0DSMZ",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "堡垒之夜,fortnite",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "12": {
            "id": 12,
            "name": "Steam联机",
            "icon": "FpNlyaClIi_0oeTuFJ9Z62w33SPC",
            "device": "pc",
            "indexShow": "1",
            "priority": 4,
            "keyWord": "求生之路,人类一败涂地,饥荒",
            "summaryTips": "（必填）如：求生之路,人类一败涂地,饥荒",
            "taskPs": "（选填）如：人类一败涂地",
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": "{\"turnback_rate\":0,\"done_num\":0,\"refund_rate\":0}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "13": {
            "id": 13,
            "name": "第五人格",
            "icon": "Fs0p84RvKkuVyH03Iy7l3nZ0qJx9",
            "device": "mobile",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "第五人格,第5,Identity V",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "14": {
            "id": 14,
            "name": "云顶之弈",
            "icon": "FjZSNoiNL1GEYGopzGqR9N3v-Trj",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "云顶之弈,lol自走棋,下棋,英雄战棋,英雄联盟自走棋",
            "summaryTips": "（必填）如:艾欧尼亚S2大师段位，熟悉海洋法、6影、游侠、沙漠剑等阵容。",
            "taskPs": "（选填）如：一区黄金局排位，来位技术大神指点。",
            "noAddition": "2",
            "hide": "2",
            "lv": {
                "1": {
                    "lv": 1,
                    "name": "silver",
                    "title": "白银"
                },
                "2": {
                    "lv": 2,
                    "name": "gold",
                    "title": "黄金"
                },
                "3": {
                    "lv": 3,
                    "name": "platinum",
                    "title": "铂金"
                },
                "4": {
                    "lv": 4,
                    "name": "diamond",
                    "title": "钻石"
                },
                "5": {
                    "lv": 5,
                    "name": "master",
                    "title": "大师"
                },
                "6": {
                    "lv": 6,
                    "name": "grandmaster",
                    "title": "宗师"
                },
                "7": {
                    "lv": 7,
                    "name": "challenger",
                    "title": "王者"
                }
            },
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": "{\"turnback_rate\":1000,\"done_num\":10,\"refund_rate\":8000,\"total_num\":50,\"task_limit_effect_num\":20}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "15": {
            "id": 15,
            "name": "原神",
            "icon": "FmEDqTpBUKQ5cVihAh1Jx7ZpSUyA",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "原神,Genshin Impact",
            "summaryTips": "(必填)如:官服/B服,xx冒险等级,有温蒂/迪卢克,深境螺旋已经通12-3",
            "taskPs": "(选填)如:官服一起锄大地",
            "noAddition": "2",
            "hide": "2",
            "lv": {
                "1": {
                    "lv": 1,
                    "name": "silver",
                    "title": "螺旋11-1"
                },
                "2": {
                    "lv": 2,
                    "name": "gold",
                    "title": "螺旋11-2"
                },
                "3": {
                    "lv": 3,
                    "name": "platinum",
                    "title": "螺旋11-3"
                },
                "4": {
                    "lv": 4,
                    "name": "diamond",
                    "title": "螺旋12-1"
                },
                "5": {
                    "lv": 5,
                    "name": "master",
                    "title": "螺旋12-2"
                },
                "6": {
                    "lv": 6,
                    "name": "grandmaster",
                    "title": "螺旋12-3"
                },
                "7": {
                    "lv": 7,
                    "name": "challenger",
                    "title": "满星12-3"
                }
            },
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "16": {
            "id": 16,
            "name": "地下城与勇士",
            "icon": "Fh3RzTqI3sw4WbCdiDT8Y1knTbpy",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "地下城与勇士,DNF,毒奶粉,迪恩爱抚",
            "summaryTips": "(必填)如:跨一有xx个希洛克C和xx个希洛克奶,最高的C号名望值18000,奶妈一万智力",
            "taskPs": "(选填)如:跨一来个大佬奶C带我打团和每日或跨一来个大佬指点我细节打造",
            "noAddition": "2",
            "hide": "2",
            "lv": {
                "1": {
                    "lv": 1,
                    "name": "silver",
                    "title": "名望值1.4W"
                },
                "2": {
                    "lv": 2,
                    "name": "gold",
                    "title": "名望值1.5W"
                },
                "3": {
                    "lv": 3,
                    "name": "platinum",
                    "title": "名望值1.6W"
                },
                "4": {
                    "lv": 4,
                    "name": "diamond",
                    "title": "名望值1.7W"
                },
                "5": {
                    "lv": 5,
                    "name": "master",
                    "title": "名望值1.8W"
                },
                "6": {
                    "lv": 6,
                    "name": "grandmaster",
                    "title": "名望值1.9W"
                },
                "7": {
                    "lv": 7,
                    "name": "challenger",
                    "title": "名望值2.0W"
                }
            },
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": "{\"turnback_rate\":1100,\"done_num\":6,\"refund_rate\":8800,\"total_num\":40,\"task_limit_effect_num\":1}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "17": {
            "id": 17,
            "name": "永劫无间",
            "icon": "Fte0VnMQoP34hq8BRnFqkKDwuCnl",
            "device": "pc",
            "indexShow": "1",
            "priority": 6,
            "keyWord": "永劫无间",
            "summaryTips": "如：单排段位陨星，三排段位陨星，主要使用胡桃、和尚、迦南",
            "taskPs": "如：三排/乱斗/匹配 来个胡桃",
            "noAddition": "2",
            "hide": "2",
            "lv": {
                "1": {
                    "lv": 1,
                    "name": "silver",
                    "title": "白银"
                },
                "2": {
                    "lv": 2,
                    "name": "gold",
                    "title": "黄金"
                },
                "3": {
                    "lv": 3,
                    "name": "platinum",
                    "title": "铂金"
                },
                "4": {
                    "lv": 4,
                    "name": "diamond",
                    "title": "陨星"
                },
                "5": {
                    "lv": 5,
                    "name": "master",
                    "title": "蚀月"
                },
                "6": {
                    "lv": 6,
                    "name": "challenger",
                    "title": "坠日"
                },
                "7": {
                    "lv": 7,
                    "name": "challenger",
                    "title": "无间修罗"
                }
            },
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 1,
            "task_limit_role": "{\"turnback_rate\":1000,\"done_num\":10,\"refund_rate\":8000,\"total_num\":20,\"task_limit_effect_num\":20}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "18": {
            "id": 18,
            "name": "哈利波特",
            "icon": "FqjNxGqYtLdI5UGiEGO0KKMP3HcB",
            "device": "mobile",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "哈利波特,魔法觉醒",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "19": {
            "id": 19,
            "name": "金铲铲之战",
            "icon": "Foi7uV1TrufblFobuAtUPReFztdp",
            "device": "mobile",
            "indexShow": "1",
            "priority": 5,
            "keyWord": "金铲铲之战,云顶之弈手游",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 1,
            "task_limit_role": "{\"turnback_rate\":1000,\"done_num\":10,\"refund_rate\":8000,\"total_num\":20,\"task_limit_effect_num\":20}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "20": {
            "id": 20,
            "name": "LOL手游",
            "icon": "FgPpoLi9gOevhgpg1ovsREnNLqrC",
            "device": "mobile",
            "indexShow": "1",
            "priority": 7,
            "keyWord": "LOL手游,英雄联盟手游,英雄联盟,lol,撸啊撸,撸啊撸,League of Legends,MOBA",
            "summaryTips": "（必填）如:QQ区大师段位，中上野下路全能，擅长亚索、劫、男刀、盲僧等英雄",
            "taskPs": "（选填）如：QQ区黄金局排位，来位技术大神。",
            "noAddition": "2",
            "hide": "2",
            "lv": {
                "1": {
                    "lv": 1,
                    "name": "silver",
                    "title": "白银"
                },
                "2": {
                    "lv": 2,
                    "name": "gold",
                    "title": "黄金"
                },
                "3": {
                    "lv": 3,
                    "name": "platinum",
                    "title": "铂金"
                },
                "4": {
                    "lv": 4,
                    "name": "platinum",
                    "title": "翡翠"
                },
                "5": {
                    "lv": 5,
                    "name": "diamond",
                    "title": "钻石"
                },
                "6": {
                    "lv": 6,
                    "name": "master",
                    "title": "大师"
                },
                "7": {
                    "lv": 7,
                    "name": "grandmaster",
                    "title": "宗师"
                },
                "8": {
                    "lv": 8,
                    "name": "challenger",
                    "title": "王者"
                }
            },
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 1,
            "task_limit_role": "{\"turnback_rate\":1000,\"done_num\":10,\"refund_rate\":8000,\"total_num\":20,\"task_limit_effect_num\":20}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "21": {
            "id": 21,
            "name": "光遇",
            "icon": "FtdhgI4q8bGImhC-29hMep3hKffb",
            "device": "mobile",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "光遇",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "22": {
            "id": 22,
            "name": "穿越火线M",
            "icon": "FhnKq6o22pcs80KMPyc5DIwHvyNp",
            "device": "mobile",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "穿越火线手游,cfm",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "23": {
            "id": 23,
            "name": "剑网3",
            "icon": "FgF1bKW9vPLdgDdacRZlmm2_lzDz",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": null,
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "24": {
            "id": 24,
            "name": "使命召唤手游",
            "icon": "FhDVRUA07ja8UdFhkZRxqInyjrKu",
            "device": "mobile",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "使命召唤手游",
            "summaryTips": "",
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "25": {
            "id": 25,
            "name": "球球大作战",
            "icon": "Fg1HR8Wq5b8rnHX4I5xXikurFmmz",
            "device": "mobile",
            "indexShow": null,
            "priority": 0,
            "keyWord": "球球大作战",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "26": {
            "id": 26,
            "name": "决战平安京",
            "icon": "Fu1w6reYPSOhjSk0OHyG22E2DKUw",
            "device": "mobile",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "决战平安京",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "27": {
            "id": 27,
            "name": "超级突破",
            "icon": "FrzdSMzVCQfbov_603gfWc0O26Ev",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "超级突破,超级人类,超击突破",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "28": {
            "id": 28,
            "name": "蛋仔派对",
            "icon": "Fjjp2B43m0A6V1cdrcm68Lrq2-Pj",
            "device": "mobile",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "蛋仔派对",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "29": {
            "id": 29,
            "name": "鹅鸭杀",
            "icon": "FsIoXrPSi77B23qC9FTe5p6fp9fI",
            "device": "pc",
            "indexShow": "2",
            "priority": 0,
            "keyWord": "鹅鸭,goose,duck",
            "summaryTips": "如：时长XXX，懂术语",
            "taskPs": "如：要求时长XXX，懂术语",
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "30": {
            "id": 30,
            "name": "无畏契约",
            "icon": "FumC_NTGAptQ83N4vsOBM81_jNAO",
            "device": "pc",
            "indexShow": "1",
            "priority": 6,
            "keyWord": "无畏契约,瓦罗兰特,瓦,VALORANT",
            "summaryTips": null,
            "taskPs": "（选填）如：国服黄金排位，来位实力烟位。",
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 1,
            "task_limit_role": "{\"turnback_rate\":1000,\"done_num\":10,\"refund_rate\":8000,\"total_num\":20,\"task_limit_effect_num\":20}",
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "31": {
            "id": 31,
            "name": "逆水寒",
            "icon": "FuXnwd1tYRb1-42xzgwJSLsIw_Hc",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "逆水寒",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "32": {
            "id": 32,
            "name": "三国杀",
            "icon": "FktuTGUEYPncsfWo6gVeWdE5jpYe",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "三国杀",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "33": {
            "id": 33,
            "name": "卡拉彼丘端游",
            "icon": "Fr-oN_iUyzr1Ph0ISTcufSYSXdum",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "卡拉彼丘",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "34": {
            "id": 34,
            "name": "卡拉彼丘手游",
            "icon": "Fr-oN_iUyzr1Ph0ISTcufSYSXdum",
            "device": "mobile",
            "indexShow": "1",
            "priority": 0,
            "keyWord": null,
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "35": {
            "id": 35,
            "name": "命运方舟",
            "icon": "FmoUA83CkSOqcx-TJNHcc1uggAwz",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "命运方舟",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "36": {
            "id": 36,
            "name": "高能英雄",
            "icon": "FqzkPwEoba4s6MTGB_xcjohGgiZr",
            "device": "mobile",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "高能英雄",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "37": {
            "id": 37,
            "name": "THE FINALS",
            "icon": "Fmfxsfwoi6QjwtVQKm4OUFuPej6T",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "THE FINALS,the finals,最终决战,thefinals",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "38": {
            "id": 38,
            "name": "元梦之星",
            "icon": "FkjjAPJ-TCHVExAOAmL-HmIfpGpd",
            "device": "mobile",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "元梦之星",
            "summaryTips": null,
            "taskPs": "",
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "39": {
            "id": 39,
            "name": "使命召唤",
            "icon": "FocdMyUAkbNV7mw_38Bw04H1KxX1",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "使命召唤,cod",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "40": {
            "id": 40,
            "name": "生死狙击2",
            "icon": "FjCFWLQhUHuXzZPaMHMWTi5CLL5Z",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "生死狙击,生死狙击2",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "41": {
            "id": 41,
            "name": "幻兽帕鲁",
            "icon": "FkGVQfKwQJe-nD3RCbgQD2VQ_Gvt",
            "device": "pc",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "帕鲁,幻兽帕鲁",
            "summaryTips": null,
            "taskPs": "",
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "42": {
            "id": 42,
            "name": "暗区突围",
            "icon": "FkqSXDf7Dczfj8_CNy96BHv6pvnS",
            "device": "mobile",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "暗区突围",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        },
        "43": {
            "id": 43,
            "name": "永劫无间手游",
            "icon": "FvyjJaFNfW1_6ms7EQkmStb798Dj",
            "device": "mobile",
            "indexShow": "1",
            "priority": 0,
            "keyWord": "劫,永劫,无间",
            "summaryTips": null,
            "taskPs": null,
            "noAddition": "2",
            "hide": "2",
            "lv": null,
            "verifyWay": {
                "video": {
                    "title": "视频认证",
                    "ct": "拍摄段位，口述陪玩车牌号"
                }
            },
            "backImage": null,
            "session_reset_time": 0,
            "round_price_switch": 0,
            "default_price": 1,
            "exchange_ratio": "1.00",
            "round_time": 60,
            "admin_comment_switch": 0,
            "task_limit": 0,
            "task_limit_role": null,
            "rank_example_img": null,
            "rank_example_video": null,
            "mini_top": 0
        }
    }
};

// 处理数据并插入到数据库
async function insertGames() {
  try {
    // 连接到数据库
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // 解析数据
    const games = data.data;
    for (const gameId in games) {
      const game = games[gameId];

      await GameList.upsert({
        id: game.id,
        name: game.name,
        icon: `http://static.peiwan.tv/${game.icon}?imageView2/1/interlace/1/ignore-error/1/w/177/format/jpg`,
        device: game.device,
        indexShow: game.indexShow,
        priority: game.priority,
        keyWord: game.keyWord,
        summaryTips: game.summaryTips,
        taskPs: game.taskPs,
        noAddition: game.noAddition,
        hide: game.hide,
        lv: game.lv,
        verifyWay: game.verifyWay,
        backImage: game.backImage,
        session_reset_time: game.session_reset_time,
        round_price_switch: game.round_price_switch,
        default_price: game.default_price,
        exchange_ratio: game.exchange_ratio,
        round_time: game.round_time,
        admin_comment_switch: game.admin_comment_switch,
        task_limit: game.task_limit,
        task_limit_role: game.task_limit_role,
        rank_example_img: game.rank_example_img,
        rank_example_video: game.rank_example_video,
        mini_top: game.mini_top
      });

      console.log(`Inserted/Updated game with id: ${game.id}`);
    }

    console.log('Data has been inserted/updated successfully.');
  } catch (error) {
    console.error('Unable to connect to the database or insert data:', error);
  } finally {
    // 关闭连接
    await sequelize.close();
  }
}

// 执行脚本
insertGames();
