/**
 * Created by apple on 17/2/24.
 */

/**
 * 计划任务
 */
const CronJob = require('cron').CronJob;


/**
 * 星号  从左到右是以秒 分 时
 */
const job = new CronJob('* * * * * *', () => {

    console.log('每分执行一次');

});

job.start();