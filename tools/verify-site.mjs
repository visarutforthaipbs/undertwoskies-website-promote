import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const routes = ['index.html','th/index.html','press/index.html','th/press/index.html'];
let checks=0;
const fail=[];
for (const route of routes) {
  const html=await readFile(path.join('dist',route),'utf8');
  const expectedLang=route.startsWith('th/') ? 'th' : 'en';
  if (/Beta 1|beta 1|เบตา 1|เบตาภาษาไทย 1/.test(html)) fail.push(`${route}: stale beta release`);
  if (!html.includes('data-copy-feedback')) fail.push(`${route}: missing feedback help`);
  const downloadURL='https://undertwoskies-download.undertwoskies-game.workers.dev/' + (expectedLang==='en' ? 'en/' : '');
  if (!html.includes(`href="${downloadURL}"`)) fail.push(`${route}: download language does not match`);
  if (!html.includes(`lang="${expectedLang}"`)) fail.push(`${route}: language`);
  if ((html.match(/<h1\b/g)||[]).length!==1) fail.push(`${route}: heading structure`);
  if (/<form\b|playtest_signups|Alpha Slots Open|Steam Deck Tested|ThaiPBS collaboration/.test(html)) fail.push(`${route}: obsolete form or claim`);
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  if(new Set(ids).size!==ids.length) fail.push(`${route}: duplicate IDs`);
  for(const m of html.matchAll(/\b(?:src|href|poster)="([^"]+)"/g)) {
    const url=m[1];
    if(url.startsWith('#')) {if(!ids.includes(url.slice(1)))fail.push(`${route}: missing anchor ${url}`);continue;}
    if(!url.startsWith('/') || url.startsWith('//'))continue;
    const [pathname,fragment]=url.split('#');
    const clean=pathname.split('?')[0];
    const file=path.join('dist',clean.endsWith('/') ? `${clean}index.html` : clean);
    try {await stat(file);checks++;} catch {fail.push(`${route}: missing ${url}`);continue;}
    if(fragment && file.endsWith('.html')) {
      const dest=await readFile(file,'utf8');
      if(!dest.includes(`id="${fragment}"`))fail.push(`${route}: missing destination ${url}`);
    }
  }
  if(route==='index.html'||route==='th/index.html') {
    if(!/<video[^>]*controls[^>]*preload="none"/.test(html)) fail.push(`${route}: video loading policy`);
    if(/<video[^>]*autoplay/.test(html))fail.push(`${route}: unwanted autoplay`);
  }
}
if(fail.length){console.error(fail.join('\n'));process.exit(1);}
console.log(`PASS: ${routes.length} localized routes, ${checks} local asset/link checks, anchors, headings, honest beta state and opt-in video.`);
