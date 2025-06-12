
const { execSync } = require('child_process');

const slide = process.argv[2];

if (!slide) {
  console.error('❌ Please provide a slide folder, e.g. "node run-slide.js 01"');
  process.exit(1);
}

console.log(`▶ Launching slide folder: ${slide}`);

execSync(`npx cross-env SLIDE=${slide} vite`, { stdio: 'inherit', shell: true });
