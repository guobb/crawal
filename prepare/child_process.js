/**
 * Created by apple on 17/2/24.
 */

/**
 * child_process 即子进程 可以创建一个系统子进程 并执行shell命令
 */
const child_process = require('child_process');

/**
 * 执行一个命令，开启一个子进程
 */
let subprocess = child_process.spawn('curl', ['http://localhost:8080']);

// 标准输出
subprocess.stdout.on('data', (data) => {
    console.log(data.toString());
});

