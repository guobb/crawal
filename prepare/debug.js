/**
 * Created by apple on 17/2/24.
 */

// 日志记录器 向控制台输出日志用的

/**
 *
 * 必须在控制台设置 window-> set DEBUG=crawler:* *代表全部 单个将*号改为start
 */


const debug = require('debug')('crawler:main');

debug('main');

const debug1 = require('debug')('crawler:start');

debug1('start');