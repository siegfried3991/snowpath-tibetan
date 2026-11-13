import vm from 'node:vm';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const c=vm.createContext({});vm.runInContext(fs.readFileSync('content.js','utf8')+';globalThis.data={LETTERS,WORDS,VOWELS,LESSONS,LIT,STRUCTURE_Q};',c);
const {LETTERS,WORDS,VOWELS,LESSONS,LIT,STRUCTURE_Q}=c.data;
assert.equal(LETTERS.length,30);assert.equal(new Set(LETTERS.map(x=>x.bo)).size,30);
assert.equal(VOWELS.length,5);assert.equal(LESSONS.length,36);
for(const x of [...LETTERS,...WORDS,...VOWELS]){assert.ok(x.en&&x.zh&&x.bo&&(x.wylie||x.sentence),x.id);}
for(const l of LESSONS){assert.ok(l.title.en&&l.title.zh&&l.intro.en&&l.intro.zh);assert.ok(l.kind==='structure'||l.items.length>0);assert.ok(l.items.every(Boolean));if(l.reading)assert.ok(LIT[l.reading]);}
for(const q of STRUCTURE_Q){assert.ok(q.options[q.answer]);assert.ok(q.prompt.en&&q.prompt.zh&&q.explain.en&&q.explain.zh);}
for(const f of ['index.html','styles.css','app.js','content.js','server.mjs','README.md'])assert.ok(!/sk-[A-Za-z0-9_-]{20,}/.test(fs.readFileSync(f,'utf8')),`Potential secret in ${f}`);
assert.ok(fs.readFileSync('.gitignore','utf8').includes('.env*'));
for(const l of LESSONS.filter(x=>x.kind==='module')){assert.ok(l.task.en&&l.task.zh);assert.ok(l.questions.length);assert.ok(l.source>=0);for(const x of l.items)if(x.chunks)assert.equal(x.chunks.join(''),x.bo);}
console.log('PASS: 36 complete bilingual lessons; 30 unique consonants; all cards and culture references resolve; publication files contain no API key.');
