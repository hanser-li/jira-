const { spawn } = require('child_process');

// 设置环境变量
process.env.SKIP_PREFLIGHT_CHECK = 'true';

// 直接启动 webpack dev server
const child = spawn('npx', ['webpack', 'serve', '--mode', 'development'], {
  stdio: 'inherit',
  shell: true,
  env: process.env
});

child.on('close', (code) => {
  process.exit(code);
}); 