module.exports = (bot) => ({
  name: "info",
  desc: "Shows info",
  credit: "JOY",
  onPrefix: true,
  cooldowns: 5,
  },
  start: async ({ event, api }) => {
    const { threadId } = event;

    const n = await api.getMe();

    
    const formatUptime = (uptime) => {
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const uptime = formatUptime(process.uptime());

    
    const adminInfo = `
𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨
𝐍𝐚𝐦𝐞       : 𝐌𝐝 𝐉𝐮𝐛𝐚𝐞𝐝 𝐀𝐡𝐦𝐞𝐝 𝐉𝐨𝐲
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐉𝐨𝐲 𝐀𝐡𝐦𝐞𝐝
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐓𝐚𝐫𝐚𝐤𝐚𝐧𝐝𝐢, 𝐉𝐚𝐦𝐚𝐥𝐩𝐮𝐫
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐉𝐚𝐦𝐚𝐥𝐩𝐮𝐫
𝐆𝐞𝐧𝐝𝐞𝐫   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞       : 𝟏6+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤      : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥     : 𝐦𝐝𝐣𝐮𝐛𝐚𝐞𝐭𝐚𝐡𝐦𝐞𝐝124@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 : wa.me/+8801709045888
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/mdjubaedahmed
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/profile.php?id=61568646922201
`;

    
    const botInfo = `
𝐁𝐨𝐭 𝐈𝐧𝐟𝐨
𝐁𝐨𝐭 𝐔𝐬𝐞𝐫 𝐍𝐚𝐦𝐞: ${n.username || "N/A"}
𝐁𝐨𝐭 𝐍𝐚𝐦𝐞       : ${n.first_name || "N/A"}
𝐁𝐨𝐭 𝐔𝐬𝐞𝐫 𝐈𝐃     : ${n.id || "N/A"}
`;

    
    const serverInfo = `
𝐒𝐞𝐫𝐯𝐞𝐫 𝐈𝐧𝐟𝐨
𝐒𝐞𝐫𝐯𝐞𝐫 𝐔𝐩𝐭𝐢𝐦𝐞      : ${uptime}
𝐒𝐞𝐫𝐯𝐞𝐫 𝐍𝐨𝐝𝐞 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : ${process.version}
𝐌𝐞𝐦𝐨𝐫𝐲 𝐔𝐬𝐞𝐝      : ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB
`;

    const fullInfo = `${adminInfo}\n${botInfo}\n${serverInfo}`;
    await api.sendMessage(threadId, fullInfo.trim());
  },
};
