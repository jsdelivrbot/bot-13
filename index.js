// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


// const https = require('https');
// const request = require('request');
// const Telegraf = require('telegraf')
// const config = require('./config.json')
// const chatId = null;
// const bot = new Telegraf(config.token)
// var SettingsObj = {day: true, timing: true}

// var ChatsArr = ["1", "2"];

// bot.start((ctx) => {
//   console.log(ChatsArr);
//   if(ChatsArr.indexOf(ctx.from.id) == -1) {
//     ChatsArr.push(ctx.from.id);
//   }
  
//   console.log('started:', ctx.from.id)
//   var first_msg = "Здравствуйте, господин! \nМеня зовут Юми-чан, я буду помогать вам с ежедневными делами, что бы взаимодействовать со мной, можете использовать эти команды:\n\n/help - Покажу все доступные команды для взаимодействия. \n/week Покажу расписание на всю неделю. \n/day Покажу рассписание на определённый день. \n/dayon Буду уведомлять вас о расписании в начале дня. \n/dayoff Перестану уведомлять о расписании. \n/timingon Уведомлю вас о скорейшем окончании урока. \n/timingoof Перестану уведомлять о скорейшем окончании урока. \n/homework Покажу вам домашнее задание на неделю. \n/daywork Покажу вам домашнее задание на определённый день.  \n\nВот все мои возможности, надеюсь буду вам полезна:3";
//   return ctx.reply(first_msg)
// })


// bot.hears('Привет', (ctx) => ctx.reply('Привет!'))
// bot.hears('привет', (ctx) => ctx.reply('Привет!'))

// bot.command('help', (ctx) => ctx.reply("/help - Покажу все доступные команды для взаимодействия. \n/week Покажу расписание на всю неделю. \n/day Покажу рассписание на определённый день. \n/dayon Буду уведомлять вас о расписании в начале дня. \n/dayoff Перестану уведомлять о расписании. \n/timingon Уведомлю вас о скорейшем окончании урока. \n/timingoff Перестану уведомлять о скорейшем окончании урока. \n/homework Покажу вам домашнее задание на неделю. \n/daywork Покажу вам домашнее задание на определённый день."))

// bot.command('week', (ctx) => ctx.reply("Понедельник \n1. (325) Алгебра \n2. (325) Алгебра \n3. (305) История Украины \n4. (305) История Украины \n5. (216) Физика\n6. (216) Физика\n\n\nВторник\n1. (325) Украинский язык\n2. (325) Украинский язык \n3. (306) Английский язык \n4. (306) Английский язык \n5. (224) Украинская литература \n6. (224) Украинская литература \n7. (103,213) Информатика\n\nСреда\n1. (206) География \n2. (328) Украинский язык \n3. (206) Зарубежная литература \n4. (305) Всемирная история \n5. (319) Химия\n6. (305) Правоведение \n7. Физическая культура\n\nЧетверг \n1. (104) Биология\n2. (305) История Украины \n3. (325) Геометрия \n4. (325) Геометрия \n5. (104/206) Биология / География\n6. (305) История Украины \n7. (306) Английский язык\n\n\nПятница\n1. (318) Немецкий\n2. (318/215,314) Немецкий / Защита отечества \n3. (215,314) Защита отечества \n4. (328) Украинский язык \n5. Физическая культура \n6. (103,213) Технологии \n7. (209) Художественная культура"));
// bot.command('time', (ctx) => { var d = new Date();ctx.reply((d.getHours()+2) + ":" + d.getMinutes())});

// bot.command('dayon', (ctx) => { console.log("DAYON");SettingsObj.day = true;ctx.reply("DAY:" + SettingsObj.day); })
// bot.command('dayoff', (ctx) => { console.log("DAYOFF");SettingsObj.day = false;ctx.reply("DAY:" + SettingsObj.day); })

// bot.command('timingon', (ctx) => { console.log("timingon");SettingsObj.timing = true;ctx.reply("timing:" + SettingsObj.timing); })
// bot.command('timingoff', (ctx) => { console.log("timingoff");SettingsObj.timing = false;ctx.reply("timing:" + SettingsObj.timing); })

// AlarmsObj = {
//   first: true,
//   second: true,
//   third: true,
//   fourth: true,
//   fifth: true,
//   sixth: true
// }

// setInterval(function(ctx) {
//   if(SettingsObj.timing == true) {
//     var d = new Date();
//     var hour_now = d.getHours() + 2;
//     var minutes_now = d.getMinutes();
//     console.log(hour_now + ":" + minutes_now);

//     var outoflesson = 'http://avarice.ga/alarm.ogg'; 

//     // first
//     if(hour_now == 10 && minutes_now == 15 && AlarmsObj.first == true) {
//       AlarmsObj.first == false;
//       ChatsArr.forEach(function(entry) {
//         var host_req = "https://api.telegram.org/bot392530919:AAG--VunCAxOIUmu2X2mzjORDnowNR0CPx8/sendAudio?chat_id="+ entry +"&audio=" + outoflesson;
//         request.get({ uri: host_req, encoding: 'utf-8' });
//       })
//     }
//     // second
//     if(hour_now == 11 && minutes_now == 05 && AlarmsObj.second == true) {
//       AlarmsObj.second == false;
//       ChatsArr.forEach(function(entry) {
//         var host_req = "https://api.telegram.org/bot392530919:AAG--VunCAxOIUmu2X2mzjORDnowNR0CPx8/sendAudio?chat_id="+ entry +"&audio=" + outoflesson;
//         request.get({ uri: host_req, encoding: 'utf-8' });
//       })
//     }
//     // third
//     if(hour_now == 11 && minutes_now == 50 && AlarmsObj.third == true) {
//       AlarmsObj.third == false;
//       ChatsArr.forEach(function(entry) {
//         var host_req = "https://api.telegram.org/bot392530919:AAG--VunCAxOIUmu2X2mzjORDnowNR0CPx8/sendAudio?chat_id="+ entry +"&audio=" + outoflesson;
//         request.get({ uri: host_req, encoding: 'utf-8' });
//       })
//     }
//     // fourth
//     if(hour_now == 12 && minutes_now == 55 && AlarmsObj.fourth == true) {
//       AlarmsObj.fourth == false;
//       ChatsArr.forEach(function(entry) {
//         var host_req = "https://api.telegram.org/bot392530919:AAG--VunCAxOIUmu2X2mzjORDnowNR0CPx8/sendAudio?chat_id="+ entry +"&audio=" + outoflesson;
//         request.get({ uri: host_req, encoding: 'utf-8' });
//       })
//     }
//     // fifth
//     if(hour_now == 13 && minutes_now == 45 && AlarmsObj.fifth == true) {
//       AlarmsObj.fifth == false;
//       ChatsArr.forEach(function(entry) {
//         var host_req = "https://api.telegram.org/bot392530919:AAG--VunCAxOIUmu2X2mzjORDnowNR0CPx8/sendAudio?chat_id="+ entry +"&audio=" + outoflesson;
//         request.get({ uri: host_req, encoding: 'utf-8' });
//       })
//     }
//     // sixth
//     if(hour_now == 14 && minutes_now == 35 && AlarmsObj.sixth == true) {
//       AlarmsObj.sixth == false;
//       ChatsArr.forEach(function(entry) {
//         var host_req = "https://api.telegram.org/bot392530919:AAG--VunCAxOIUmu2X2mzjORDnowNR0CPx8/sendAudio?chat_id="+ entry +"&audio=" + outoflesson;
//         request.get({ uri: host_req, encoding: 'utf-8' });
//       })

//       AlarmsObj.first = true;
//       AlarmsObj.second = true;
//       AlarmsObj.third = true;
//       AlarmsObj.fourth = true;
//       AlarmsObj.fifth = true;
//       AlarmsObj.sixth = true;
//       }

//     }

// }, 10000)

// bot.on('sticker', (ctx) => ctx.reply('👍'))

// randCoubFunc = function(n) {
//   var s ='', abd ='abcdefghijklmnopqrstuvwxyz0123456789', aL = abd.length;
//   while(s.length < n)
//     s += abd[Math.random() * aL|0];
//   return "http://coub.com/view/" + s;
// }

// bot.command('coub', (ctx) => { ctx.reply(randCoubFunc(5)) });

// bot.startPolling()