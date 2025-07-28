const { spawn } = require('child_process');

// 设置环境变量
process.env.SKIP_PREFLIGHT_CHECK = 'true';
process.env.BROWSER = 'none';

// 直接启动 webpack dev server
const child = spawn('npx', ['webpack', 'serve', '--mode', 'development', '--port', '3000'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
  cwd: process.cwd()
});

child.on('close', (code) => {
  process.exit(code);
});

child.on('error', (error) => {
  console.error('启动失败:', error);
  process.exit(1);
}); 