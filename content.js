/* Original bilingual exercises. See in-app Sources for source and dialect distinctions. */
const bi=(en,zh)=>({en,zh});
const LETTERS=[
['ཀ','ka','ka','H',false],['ཁ','kha','kʰa','H',true],['ག','ga','kʰa','L',true],['ང','nga','ŋa','L',false],
['ཅ','ca','tɕa','H',false],['ཆ','cha','tɕʰa','H',true],['ཇ','ja','tɕʰa','L',true],['ཉ','nya','ɲa','L',false],
['ཏ','ta','ta','H',false],['ཐ','tha','tʰa','H',true],['ད','da','tʰa','L',true],['ན','na','na','L',false],
['པ','pa','pa','H',false],['ཕ','pha','pʰa','H',true],['བ','ba','pʰa','L',true],['མ','ma','ma','L',false],
['ཙ','tsa','tsa','H',false],['ཚ','tsha','tsʰa','H',true],['ཛ','dza','tsʰa','L',true],['ཝ','wa','wa','L',false],
['ཞ','zha','ɕa','L',false],['ཟ','za','sa','L',false],['འ',"'a",'a','L',false],['ཡ','ya','ja','L',false],
['ར','ra','ra','L',false],['ལ','la','la','L',false],['ཤ','sha','ɕa','H',false],['ས','sa','sa','H',false],
['ཧ','ha','ha','H',false],['ཨ','a','a','H',false]
].map((a,i)=>({id:'l'+i,bo:a[0],wylie:a[1],ipa:a[2],tone:a[3],asp:a[4],row:Math.floor(i/4),en:`${a[2]} · ${a[3]==='H'?'high':'low'} register`,zh:`${a[2]} · ${a[3]==='H'?'高':'低'}調域`}));
const WORDS=[
['water','ཆུ','chu','Water','水'],['mountain','རི','ri','Mountain','山'],['fire','མེ','me','Fire','火'],['person','མི','mi','Person','人'],['sun','ཉི་མ','nyi ma','Sun','太陽'],['moon','ཟླ་བ','zla ba','Moon','月亮'],
['hello','བཀྲ་ཤིས་བདེ་ལེགས','bkra shis bde legs','Hello / auspicious wishes','你好／吉祥如意'],['thanks','ཐུགས་རྗེ་ཆེ','thugs rje che','Thank you','謝謝'],['go','ག་ལེར་ཕེབས','ga ler phebs','Go well (to the person leaving)','慢走（對離開的人說）'],['stay','ག་ལེར་བཞུགས','ga ler bzhugs','Stay well (to the person staying)','留安（對留下的人說）'],
['i','ང','nga','I / me','我'],['you','ཁྱེད་རང','khyed rang','You','你'],['name','མིང','ming','Name','名字'],['lhasa','ལྷ་ས','lha sa','Lhasa','拉薩'],['tibet','བོད','bod','Tibet','西藏'],['language','བོད་སྐད','bod skad','Tibetan language (speech)','藏語（口語）'],
['tea','ཇ','ja','Tea','茶'],['tsampa','རྩམ་པ','rtsam pa','Tsampa: roasted barley flour','糌粑：炒青稞粉'],['butter','མར','mar','Butter','酥油／奶油'],['home','ཁང་པ','khang pa','House','房屋'],
['love','བྱམས་པ','byams pa','Loving-kindness','慈'],['compassion','སྙིང་རྗེ','snying rje','Compassion','悲'],['joy','དགའ་བ',"dga' ba",'Joy','喜'],['equanimity','བཏང་སྙོམས','btang snyoms','Equanimity','捨／平等心'],['dharma','ཆོས','chos','Dharma / Buddhist teaching','佛法'],['mind','སེམས','sems','Mind','心'],
['girl','བུ་མོ','bu mo','Girl / young woman','女孩／年輕女子'],['life','ཚེ','tshe','Life / lifespan','生命／壽命'],['poem','མགུར','mgur','Spiritual song / song-poem','道歌／詩歌'],['gesar','གེ་སར','ge sar','Gesar (name)','格薩爾（名字）'],['horse','རྟ','rta','Horse','馬'],['king','རྒྱལ་པོ','rgyal po','King','國王'],['story','སྒྲུང','sgrung','Story / narrative','故事／敘事']
].map(a=>({id:a[0],bo:a[1],wylie:a[2],en:a[3],zh:a[4]}));
const VOWELS=[['ཀ','ka','a','Inherent a (no vowel mark)','固有 a（不加元音符號）'],['ཀི','ki','i','i vowel, written above','i 元音，寫在上方'],['ཀུ','ku','u','u vowel, written below','u 元音，寫在下方'],['ཀེ','ke','e','e vowel, written above','e 元音，寫在上方'],['ཀོ','ko','o','o vowel, written above','o 元音，寫在上方']].map((a,i)=>({id:'v'+i,bo:a[0],wylie:a[1],ipa:a[2],en:a[3],zh:a[4]}));
const SOURCES=[
{title:'Duolingo: learning other writing systems',url:'https://blog.duolingo.com/learning-other-writing-systems/',note:bi('Small groups of characters, sound–symbol associations, and dedicated reading practice.','分組學字、字音連結、專門的讀寫練習。')},
{title:'Duolingo: spaced repetition',url:'https://blog.duolingo.com/spaced-repetition-for-learning/',note:bi('Inspiration for retrieval and returning to material over time. This app uses its own simple schedule.','參考提取練習與間隔複習理念；本程式使用自行設計的簡易排程。')},
{title:'Sung & Lha Byams Rgyal: Colloquial Lhasa Tibetan, Lesson 1',url:'https://www2.lawrence.edu/fast/sungk/pdfs/Colloquial_Lhasa/Lhasa_L1new-2010.pdf',note:bi('Lhasa sound and script reference. Our isolated-letter IPA is a simplified guide, not a full word-level tone model.','拉薩音及藏文參考。單字母 IPA 為簡化提示，不是完整的詞語聲調模型。')},
{title:'Basic Tibetan — MSU Libraries',url:'https://openbooks.lib.msu.edu/basictibetan/',note:bi('Jampa Khedup, Sonam Tsering, Rajiv Ranjan and Erlin Barnard. Greeting vocabulary reference; CC BY-NC 4.0. Bundled audio has separate attribution below.','Jampa Khedup、Sonam Tsering、Rajiv Ranjan、Erlin Barnard 著。問候語詞彙參考；CC BY-NC 4.0。打包音訊另見下方署名。')},
{title:'Tibetanlanguage.school — Unit 1',url:'https://tibetanlanguage.school/learn/standard-tibetan/unit-1/',note:bi('Linked recordings are Diaspora Standard Tibetan, close to Lhasa but not verified native-Lhasa reference recordings. Audio remains on the original host.','連結錄音為流亡社群標準藏語，與拉薩音接近，但並非已核實的拉薩母語示範。音檔留在原網站。')},
{title:'倉央嘉措詩歌',url:'https://zh.wikipedia.org/wiki/倉央嘉措詩歌',note:bi('Historical Tibetan poem as reproduced in the supplied article; lesson translations are our own literal teaching glosses. Editions and numbering vary.','依使用者提供條目所載古代藏文詩；課文中英譯文為本課自作直譯。各版本編號及文字或有差異。')},
{title:'UNESCO — Gesar epic tradition',url:'https://ich.unesco.org/en/RL/gesar-epic-tradition-00204',note:bi('Gesar as a living oral tradition with regional variants, inscribed in 2009. Our learning scene is a new summary, not a translated passage.','格薩爾為有地方版本差異的活態口傳傳統，於2009年列入名錄。本課情境是新寫摘要，並非原文翻譯。')},
{title:'Lotsawa House — The Four Immeasurables',url:'https://www.lotsawahouse.org/indian-masters/buddhagupta/four-immeasurables-commentary',note:bi('Buddhist vocabulary and conceptual reference. Lesson explanations are original summaries.','佛教詞彙及概念參考。課程解說為自行撰寫的摘要。')},
{title:'OpenAI — Audio in Chat Completions',url:'https://developers.openai.com/api/docs/guides/audio-chat-completions',note:bi('Audio-input API used by the optional local speaking studio. No validated Lhasa pronunciation-scoring benchmark is claimed.','選用的本機口說教室所用音訊輸入 API。未宣稱通過拉薩音發音評分驗證。')}
];
const ROW_AUDIO=Array.from({length:8},(_,i)=>'sound-row-'+(i+1)+'.wav');
const LIT={
poetry:{title:bi('Tsangyang Gyatso: two wishes','倉央嘉措：兩難之心'),tag:bi('Literary Tibetan · close reading','文言藏文 · 細讀'),intro:bi('A song attributed to the Sixth Dalai Lama places affection beside a religious calling. Read the Tibetan before comparing translations. Literary language is not a model for everyday conversation.','一首傳為六世達賴喇嘛所作的詩，將情感與宗教志向並置。先看藏文，再比較譯文。文言藏文不宜直接當作日常對話範本。'),lines:[['མཛངས་མའི་ཐུགས་དང་བསྟུན་ན།།','If I follow the wishes of the wise woman,','若順從那位女子的心意，'],['ཚེ་འདིའི་ཆོས་སྐལ་ཆད་འགྲོ།།','my share in the Dharma in this life will be lost.','今生的佛法緣分便會斷去。'],['དབེན་པའི་རི་ཁྲོད་འགྲིམས་ན།།','If I wander through secluded mountain retreats,','若遊歷幽靜的山中隱修處，'],['བུ་མོའི་ཐུགས་དང་འགལ་འགྲོ།།','I will go against the young woman’s wishes.','便會違背那位女子的心願。']],note:bi('Our literal teaching gloss, not a quotation of a modern translation. Notice ན་ “if”, and ཐུགས་, an honorific word for mind/heart. The famous polished Chinese rendering is an adaptation, not a word-for-word map.','以上為本課自行直譯，非引用現代譯本。留意 ན་「若」與敬語 ཐུགས་「心」。著名的中文格律詩改譯，不能逐字對應藏文。'),source:5,words:['girl','life','dharma','mountain']},
gesar:{title:bi('Gesar: a story carried by voices','格薩爾：由聲音傳承的故事'),tag:bi('Living epic · cultural reading','活態史詩 · 文化閱讀'),intro:bi('The Gesar tradition is performed, remembered and recreated. Tibetan, Mongolian and Tu communities preserve different versions. It is not one fixed book with one definitive text.','格薩爾傳統透過表演、記憶與再創作延續。藏族、蒙古族及土族社群保存不同版本，並不是只有唯一標準文字的一本書。'),lines:[['གེ་སར།','Gesar — the hero’s name.','格薩爾——主人公之名。'],['རྒྱལ་པོ།','King — learn the word, then find its syllable boundary.','國王——先認詞，再找音節界線。'],['རྟ།','Horse — the written r sits above the root t.','馬——書寫時 r 位於基字 t 上方。'],['སྒྲུང་།','Story — many written letters form a single syllable.','故事——多個書寫字母構成一個音節。']],note:bi('Learning scene (new summary, not an epic quotation): a storyteller brings a hero, a horse and a difficult journey into the room. Listeners learn through voice, memory and repetition. Ask what changes when a story is performed rather than silently read.','教學情境（新寫摘要，非史詩引文）：說書人以聲音將英雄、駿馬與艱險旅程帶到聽眾面前。人們從聲音、記憶與反覆聆聽中學習。想想：現場演述與默讀，會帶來哪些不同？'),source:6,words:['gesar','king','horse','story']},
kindness:{title:bi('Four ways to care','四種關懷的心'),tag:bi('Buddhist vocabulary · cultural reading','佛教詞彙 · 文化閱讀'),intro:bi('The four immeasurables are an important Buddhist grouping: loving-kindness, compassion, sympathetic joy and equanimity. Here we study the words and their meanings; no religious commitment is assumed.','四無量心是佛教的重要概念：慈、悲、喜、捨。在此學習詞語及意義，不預設學習者有宗教信仰。'),lines:[['བྱམས་པ།','Loving-kindness: wishing others happiness.','慈：願他人得到安樂。'],['སྙིང་རྗེ།','Compassion: wishing others freedom from suffering.','悲：願他人離苦。'],['དགའ་བ།','Joy: sharing in the happiness of others.','喜：為他人的幸福而喜悅。'],['བཏང་སྙོམས།','Equanimity: extending care without partiality.','捨：以不偏私的心關懷眾生。']],note:bi('Context matters: དགའ་བ་ can simply mean joy. The specific Buddhist meaning comes from the fourfold grouping. Equanimity does not mean indifference.','語境很重要：དགའ་བ་ 單獨可指喜悅；置於四無量心才有特定佛教意義。「捨」不是冷漠。'),source:7,words:['love','compassion','joy','equanimity']}
};
const LESSONS=[];
for(let i=0;i<8;i++) LESSONS.push({id:'letters'+i,group:0,title:bi(['First sounds','Palatal sounds','Tongue-tip sounds','Lip sounds','Affricates','Soft continuants','More continuants','Two final letters'][i],['最初的字音','顎音','舌尖音','唇音','塞擦音','延續音之一','延續音之二','最後兩個字母'][i]),icon:LETTERS[i*4].bo,items:LETTERS.filter(x=>x.row===i),audio:ROW_AUDIO[i],intro:bi('Meet a small group of letters. Notice the shape first; then compare the sound guide. Wylie preserves spelling, while IPA describes an isolated Lhasa reading. A low-register aspirated sound can differ from a familiar transliteration.','每次認識一小組字母。先觀察字形，再比較音值。Wylie 記錄拼寫；IPA 提示拉薩音的單字母讀音。低調域送氣音，可能與熟悉的轉寫名稱不同。')});
LESSONS.push(
{id:'vowels',group:0,title:bi('Add a vowel','加上元音'),icon:'ཀི',items:VOWELS,intro:bi('A bare root letter carries an inherent a. Add one of four vowel signs to change it: i above, u below, e above, o above. Later, suffixes can change the spoken vowel again.','基字本有 a 元音。加四種元音符號可改為 i、u、e、o；其中 u 寫在下方，其餘在上方。學習後加字時，還會遇到元音變化。')},
{id:'structure',group:0,title:bi('Build a syllable','拼出一個音節'),icon:'རྟ',kind:'structure',items:[],intro:bi('Written letters fit around a root. A tsheg (་) separates syllables, not necessarily words; a shad (།) marks a larger break. Stacks are read as a unit, not as separate spoken letters.','字母圍繞基字組合。音節點（་）分隔音節，未必分隔詞；垂符（།）表示較大的停頓。疊字需整體辨讀，不能把每個字母逐一念出。')},
{id:'nature',group:1,title:bi('Water, mountains, sunlight','山水與日光'),icon:'རི',items:['water','mountain','fire','person','sun','moon'],intro:bi('Start reading words without depending on Roman letters. Tibetan often uses more than one written syllable for a word. ཉི་མ་ has two syllables.','開始直接認讀藏文，減少依賴拉丁字母。藏語的一個詞可以有多個音節；ཉི་མ་ 有兩個音節。')},
{id:'greetings',group:1,title:bi('A warm greeting','親切的問候'),icon:'བཀྲ',items:['hello','thanks','go','stay'],intro:bi('Greetings carry social meaning. When parting, the expression changes depending on who leaves and who stays. These polite forms are useful first phrases.','問候帶有社交意義。道別時，對離開的人和留下的人用語不同。先學這些禮貌表達。')},
{id:'people',group:1,title:bi('People and places','人與地方'),icon:'ང',items:['i','you','name','lhasa','tibet','language'],intro:bi('Recognize pronouns and place names. A written form is not a pronunciation guide: བོད་ is conventionally transliterated bod, but Lhasa pronunciation does not simply read every written letter.','認識代詞與地名。拼寫不是讀音：བོད་ 的 Wylie 是 bod，但拉薩音不會把每個書寫字母都逐一讀出。')},
{id:'tea',group:1,title:bi('Around the tea table','茶桌旁'),icon:'ཇ',items:['tea','tsampa','butter','home'],intro:bi('Everyday culture belongs in a language course too. Tea and tsampa can open a conversation about hospitality and food; practices vary between homes and regions.','語言課也包含日常文化。茶與糌粑可以引出待客與飲食的話題；家庭和地域之間的習慣有所不同。')},
...['kindness','poetry','gesar'].map(id=>({id,group:2,title:LIT[id].title,icon:id==='gesar'?'རྟ':id==='poetry'?'མགུར':'སེམས',reading:id,items:LIT[id].words,intro:LIT[id].intro}))
);
LESSONS.forEach(l=>l.items=l.items.map(x=>typeof x==='string'?WORDS.find(w=>w.id===x):x));
const STRUCTURE_Q=[
{prompt:bi('Which mark separates Tibetan syllables?','哪個符號分隔藏文音節？'),options:['་','།','ཀ','ུ'],answer:0,explain:bi('The tsheg is a syllable separator. A word may contain several syllables.','音節點分隔音節；一個詞可以包含多個音節。')},
{prompt:bi('Build ki from ka + i.','把 ka 與 i 組合成 ki。'),options:['ཀི','ཀུ','ཀེ','ཀོ'],answer:0,explain:bi('The i sign sits above the root.','i 元音符號位於基字上方。')},
{prompt:bi('What is the root letter in རྟ་ (horse)?','རྟ་（馬）的基字是哪個？'),options:['ཏ','ར','ཀ','ས'],answer:0,explain:bi('The root is ཏ; ར is superscribed. The stack is one syllable.','基字為 ཏ；ར 是上加字。整個疊字是一個音節。')},
{prompt:bi('How many syllables are in ཉི་མ་?','ཉི་མ་ 有幾個音節？'),options:['2','1','3','4'],answer:0,explain:bi('ཉི and མ are two syllables in one word: sun.','ཉི 與 མ 是兩個音節，構成「太陽」一詞。')},
{prompt:bi('Which is a spelling transliteration, not a promise of Lhasa sound?','哪一項是拼寫轉寫，而非拉薩讀音保證？'),options:['Wylie','IPA','ཆུ','་'],answer:0,explain:bi('Wylie encodes Tibetan spelling. Sound needs its own guide and recordings.','Wylie 記錄藏文拼寫；讀音需要另外的音值指引和錄音。')},
{prompt:bi('Which letter is high-register and aspirated in the isolated Lhasa guide?','在拉薩音單字母提示中，哪個是高調域送氣音？'),options:['ཁ','ཀ','ག','ང'],answer:0,explain:bi('ཁ is high and aspirated; ཀ high unaspirated; ག low aspirated in this Lhasa analysis.','本課拉薩音分析：ཁ 高調域送氣，ཀ 高調域不送氣，ག 低調域送氣。')}
];

// Expanded course: source-based conversational patterns and guided literary reading.
const COURSE_GROUPS=[bi('Read the script','先學藏字'),bi('Meet everyday Tibetan','認識日常藏語'),bi('Build a conversation','組織一段對話'),bi('Interact in everyday situations','日常互動'),bi('Learn to read connected text','學讀連貫文本'),bi('Read into culture','走進文化閱讀')];
const COURSE_SUBTITLES=[bi('Letters, vowels and syllables','字母、元音與音節'),bi('First words and useful expressions','初步詞彙與實用表達'),bi('Questions, answers, sentence patterns and role play','問答、句型與角色練習'),bi('Hospitality, requests, descriptions and negatives','待客、請求、描述與否定'),bi('Particles, honorifics, conditions and close reading','助詞、敬語、條件與細讀'),bi('Apply your reading tools to poetry and cultural texts','把閱讀方法用於詩歌與文化文本')];
const srcBase='https://openbooks.lib.msu.edu/basictibetan/chapter/';
const EXT_SOURCES=[['4-1/','First-meeting dialogue'],['4-4/','Origins and follow-up questions'],['4-6/','Genitive case markers'],['7-4/','Studies and belongings'],['9-3/','Welcoming guests and describing a home']];
const sourceIDs=EXT_SOURCES.map(([slug,title])=>{SOURCES.push({title:'Basic Tibetan — '+title,url:srcBase+slug,note:bi('Selected source examples adapted for this noncommercial course. Jampa Khedup and Sonam Tsering, MSU Libraries, 2026; CC BY-NC 4.0. Chinese glosses, explanations and exercises are newly written.','選取來源例句改編於本非商業課程。Jampa Khedup、Sonam Tsering，MSU Libraries，2026；CC BY-NC 4.0。中文釋義、解說與練習為新寫。')});return SOURCES.length-1;});
function sentence(bo,en,zh){return {bo,en,zh};}
function concept(en,zh,optionsEN,optionsZH,exEN,exZH){return {prompt:bi(en,zh),optionsEN,optionsZH,answer:0,explain:bi(exEN,exZH)};}
function module(id,group,en,zh,ruleEN,ruleZH,examples,taskEN,taskZH,questions,source){return {id,group,title:bi(en,zh),icon:group===4?'ཡི':'ང',intro:bi(ruleEN,ruleZH),examples,task:bi(taskEN,taskZH),questions,source,items:[],kind:'module'};}
const E=sentence,Q=concept;
const EXTRA_LESSONS=[
module('names',2,'Exchange names','互問姓名','Learn the whole question and answer, then locate the possessive phrase and the final copula. Honorific wording for the other person differs from the wording used for yourself.','先學整句問答，再找出領屬片語與句末繫詞。稱呼對方與說自己時，敬語用字不同。',[
E('ཁྱེད་རང་གི་མཚན་ག་རེ་ཡིན།','What is your name?','您叫甚麼名字？'),E('ངའི་མིང་རྡོ་རྗེ་ཡིན།','My name is Dorje.','我的名字是多吉。')],
'Cover the answers. Ask a partner their name, answer with your own name, then swap roles.','遮住答案，詢問同伴姓名，再用自己的姓名回答，然後交換角色。',[
Q('Which phrase means “my name”?','哪個片語表示「我的名字」？',['ངའི་མིང་','ཁྱེད་རང་','ག་ནས་','ལྷ་ས་'],null,'ངའི marks “my”; མིང means name.','ངའི 表示「我的」；མིང 是「名字」。'),
Q('Which name-word is honorific in the question?','問句中的敬語「名字」是哪個？',['མཚན་','མིང་','ང་','ནས་'],null,'The source uses མཚན for the other person and མིང for oneself.','來源對他人用 མཚན，對自己用 མིང。')],sourceIDs[0]),
module('wellbeing',2,'Ask how someone is','問候近況','Use a polite question and a plain self-report. Notice that the question and answer do not use identical body vocabulary.','用禮貌問句與一般自述。留意問句與回答的「身體」用詞並不相同。',[
E('ཁྱེད་རང་སྐུ་གཟུགས་བདེ་པོ་ཡིན་པས།','How are you?','您好嗎？'),E('ང་གཟུགས་པོ་བདེ་པོ་ཡིན།','I am well.','我很好。')],
'Rehearse a greeting, this question, the answer and a thank-you without looking.','不看提示，練習問候、此問句、回答及道謝。',[
Q('Which ending appears in the question?','問句使用哪個結尾？',['ཡིན་པས།','ནས།','གི།','མིང།'],null,'Recognize this question as a whole before building new questions.','先整句辨認此問法，再逐步學習構造新問句。')],sourceIDs[0]),
module('origins',2,'Say where you are from','說自己來自哪裡','In this pattern, ནས follows a place and marks origin. The identity expression comes at the end.','本句型中，ནས 位於地名後表示來源，身分表達放在句末。',[
E('ཁྱེད་རང་ག་ནས་ཡིན།','Where are you from?','你來自哪裡？'),E('ང་བོད་ནས་ཡིན།','I am from Tibet.','我來自西藏。')],
'Ask and answer, then replace the place with one you have checked in a dictionary.','先互問互答，再用字典查妥自己的地名後替換。',[
Q('Where does ནས go in this origin pattern?','來源句型中 ནས 放在哪裡？',['After the place','Before the speaker','After every syllable','Instead of the verb'],['地名之後','說話者之前','每個音節之後','取代動詞'],'The place and ནས form the origin phrase.','地名與 ནས 構成來源片語。')],sourceIDs[1]),
module('followup',2,'Keep an exchange going','讓對話繼續','A conversation needs follow-up. ཡང adds “also”; ཨ་ནི can introduce a turn back to the other speaker.','對話需要接續。ཡང 表示「也」；ཨ་ནི 可引出反問對方的一輪。',[
E('ང་ཡང་བོད་ནས་ཡིན།','I am also from Tibet.','我也來自西藏。'),E('ཨ་ནི། ཁྱེད་རང་ག་ནས་ཡིན།','And where are you from?','那麼，你來自哪裡？')],
'Hold a four-turn exchange: ask, answer, ask back, answer. Change the order next time.','練習四輪：提問、回答、反問、回答。下次換個順序。',[
Q('What does ཡང add here?','此處 ཡང 增加甚麼意思？',['Also','Never','Yesterday','Only'],['也','從不','昨天','只有'],'It connects your statement with the preceding one.','把自己的說法與前一句連起來。')],sourceIDs[1]),
module('whichpart',2,'Ask for a more specific place','追問具體地點','An initial answer can be expanded. Read the longer place phrase in chunks, rather than translating each syllable in isolation.','初步回答可以再展開。把較長的地名片語分塊閱讀，不要逐個音節孤立翻譯。',[
E('ཁྱེད་རང་བོད་ག་ནས་ཡིན།','Which part of Tibet are you from?','你來自西藏哪裡？'),E('ང་བོད་ལྷ་ས་ནས་ཡིན།','I am from Lhasa, Tibet.','我來自西藏拉薩。')],
'Ask a broad origin question, then a narrower one. Listen for the added place name.','先問大範圍來源，再問具體地點，聽出新增的地名。',[
Q('Which place narrows the answer?','哪個地名讓答案更具體？',['ལྷ་ས་','ང་','ཡིན་','ནས་'],null,'Lhasa specifies the place within Tibet.','拉薩說明西藏之內的具體地點。')],sourceIDs[1]),
module('otherpeople',2,'Introduce another person','介紹另一個人','Move beyond “I” and “you”. In these source examples, ཁོང refers respectfully to another person and རེད ends the identification. Do not reduce Tibetan copulas to a simple English “am/is” table.','從「我／你」走向第三人稱。來源例句以 ཁོང 敬稱他人，以 རེད 作判斷結尾。藏語繫詞不能簡化為英語 am/is 對照表。',[
E('ཁོང་སུ་རེད།','Who is that person?','那位是誰？'),E('ཁོང་ང་ཚོའི་དགེ་རྒན་རེད།','That person is our teacher.','那位是我們的老師。')],
'Point to a fictional class photograph. Ask who someone is, then answer with the teacher pattern.','用虛構的班級照片，詢問某人是誰，再用老師的句型回答。',[
Q('Which word asks “who”?','哪個詞詢問「誰」？',['སུ་','ག་ནས་','ང་','ཡང་'],null,'སུ asks about a person’s identity.','སུ 詢問人物身分。')],sourceIDs[3]),
module('studying',2,'Say what you are studying','說明正在學甚麼','The source uses an agent-marked subject and a verb phrase for studying. Learn the complete unit before trying to generalize the ending to every verb.','來源使用帶施事標記的主語及「學習」動詞片語。先學完整單位，不把結尾套用到所有動詞。',[
E('ཁྱེད་རང་གིས་ག་རེ་སློབ་སྦྱོང་བྱེད་ཀྱི་ཡོད།','What are you studying?','你正在學甚麼？'),E('ངས་བོད་སྐད་སློབ་སྦྱོང་བྱེད་ཀྱི་ཡོད།','I am studying Tibetan.','我正在學藏語。')],
'Say the answer from memory. Identify the language phrase and the studying phrase separately.','憑記憶說出回答，分別指出語言片語與學習動詞片語。',[
Q('What is being studied in the answer?','回答中正在學甚麼？',['བོད་སྐད་','ངས་','ཡོད་','ཁོང་'],null,'བོད་སྐད names the language.','བོད་སྐད 是語言名稱。')],sourceIDs[3]),
module('belongings',2,'Ask whose things they are','詢問物品屬於誰','A possessive question differs from an identity question. Learn སུའི as “whose” and compare it with སུ “who”.','領屬問句與身分問句不同。認識 སུའི「誰的」，並與 སུ「誰」比較。',[
E('ལྡེ་མིག་འདི་ཚོ་སུའི་རེད།','Whose keys are these?','這些鑰匙是誰的？'),E('ལྡེ་མིག་འདི་ཚོ་ངའི་མ་རེད།','These keys are not mine.','這些鑰匙不是我的。')],
'Ask about an imagined set of keys. Explain why “not mine” is a useful response even before you know the owner.','詢問想像中的一串鑰匙。說明即使不知道物主，為何「不是我的」仍是有用回答。',[
Q('Which form means “whose”?','哪個形式表示「誰的」？',['སུའི་','སུ་','ཚོ་','མ་'],null,'The attached genitive changes who into whose.','附加的屬格使「誰」變成「誰的」。')],sourceIDs[3]),
module('welcome',3,'Welcome someone in','迎接客人','Hospitality often uses honorific expressions. Practise these as situated invitations, not as isolated dictionary verbs.','待客常用敬語。把它們當作具體情境中的邀請來練，不只是背字典動詞。',[
E('ཡར་ཕེབས་གནང་།','Please come in.','請進。'),E('བཞུགས་དང་།','Please sit.','請坐。'),E('གསོལ་ཇ་མཆོད་དང་།','Please have tea.','請用茶。')],
'Act as host. Welcome your guest, offer a seat, then offer tea. Your partner responds with thanks.','扮演主人：迎客、請坐、請茶。同伴以道謝回應。',[
Q('Which expression offers tea?','哪個表達是請客人用茶？',['གསོལ་ཇ་མཆོད་དང་།','བཞུགས་དང་།','ང་','སུ་'],null,'Here གསོལ་ཇ is the honorific expression for tea.','此處 གསོལ་ཇ 是茶的敬語。')],sourceIDs[4]),
module('decline',3,'Decline politely','禮貌婉拒','A useful exchange includes accepting or declining. Study the polite self-expression in this source example without treating it as a universal negative formula.','實用對話包含接受與婉拒。學習此來源例句的禮貌自述，不將它當作通用否定公式。',[
E('ཐུགས་རྗེ་ཆེ། ང་གསོལ་ཇ་ཞུ་ཡི་མིན།','Thank you. I will not have tea.','謝謝，我不用茶。')],
'Have your partner offer tea; decline politely. Switch roles and vary the pause before your response.','請同伴請茶，再禮貌婉拒；交換角色，練習自然的回應停頓。',[
Q('What does the speaker do here?','說話者在此做甚麼？',['Declines the tea politely','Asks for two teas','Asks who owns the tea','Names a city'],['禮貌婉拒茶','要兩杯茶','問茶是誰的','說城市名'],'A thank-you can accompany a refusal.','道謝可以與婉拒同時出現。')],sourceIDs[4]),
module('request',3,'Make a polite request','提出禮貌請求','Notice the request ending རོགས་གནང་ in a longer sentence. First identify what action is being requested.','留意長句中的請求結尾 རོགས་གནང་，先辨認請對方做甚麼。',[
E('སྔོན་ལ་ཁྱེད་རང་གི་ཁང་པ་བསྟན་རོགས་གནང་།','Please show me your house first.','請先帶我看看你的房子。')],
'Break the sentence into “first”, “your house”, and the request to show it. Say it once slowly, then as a whole.','分成「先」「你的房子」「請帶我看看」三塊，先慢讀，再整句說。',[
Q('What is being requested?','對方被請求做甚麼？',['Show the house','Leave the house','Sell the house','Name the teacher'],['展示房子','離開房子','出售房子','說老師姓名'],'བསྟན relates to showing in this sentence.','本句 བསྟན 與「展示」有關。')],sourceIDs[4]),
module('rooms',3,'Describe a house','描述房屋','Use a question about quantity, then contrast a positive description with a negative one. These source patterns introduce existence and identification separately.','先問數量，再比較肯定與否定描述。這些來源句型分別引入存在與判斷表達。',[
E('ཁང་པ་འདི་ལ་ཁང་མིག་ག་ཚོད་ཡོད་རེད།','How many rooms does this house have?','這房子有幾個房間？'),E('ཁང་པ་འདི་ལ་ཁང་མིག་བཞི་ཡོད་རེད།','This house has four rooms.','這房子有四個房間。'),E('ཁང་པ་འདི་གསར་པ་མ་རེད།','This house is not new.','這房子不是新的。')],
'Read the quantity question, answer it, then add the negative description. Point out the word that means four.','讀出數量問句並回答，再補充否定描述。指出表示「四」的詞。',[
Q('How many rooms are stated?','例句說有幾個房間？',['Four','Two','One','Ten'],['四','二','一','十'],'བཞི is four.','བཞི 是四。'),Q('Which expression negates the identification here?','此處哪個表達否定判斷？',['མ་རེད།','ཡོད་རེད།','ག་ཚོད་','བཞི་'],null,'Notice the negative before རེད.','留意 རེད 前的否定。')],sourceIDs[4]),
module('genitive-a',4,'Read possession and relation','讀懂領屬與關係','A genitive links one phrase to another. It can express a relationship beyond physical ownership. Begin with clearly visible forms and read the whole phrase.','屬格連結前後片語，其關係不只限於物品擁有。先從清楚可見的形式學起，整體閱讀片語。',[
E('ངའི་','My / of me','我的'),E('ཁོང་གི་','His / her / that person’s','那位的'),E('བོད་ཀྱི་','Of Tibet / Tibetan','西藏的'),E('སེམས་ཀྱི་','Of the mind','心的')],
'Find the genitive in a title or a source sentence. State what two ideas it links before trying to translate the whole sentence.','在標題或來源句中找屬格；先說明它連結哪兩個概念，再翻整句。',[
Q('After a written suffix ད, which genitive appears in བོད་ཀྱི་?','書寫後加字 ད 後，在 བོད་ཀྱི་ 出現哪個屬格？',['ཀྱི་','གི་','གྱི་','ནས་'],null,'Choose by written suffix; do not rely only on the spoken ending.','按書寫後加字選形式，不只憑口語讀音。')],sourceIDs[2]),
module('genitive-b',4,'Choose a written genitive','選擇書面屬格形式','Learn the main spelling-conditioned groups: ག/ང → གི; ད/བ/ས → ཀྱི; ན/མ/ར/ལ → གྱི. Vowel-final forms often attach འི or use ཡི.','學主要拼寫規則：ག/ང 後用 གི；ད/བ/ས 後用 ཀྱི；ན/མ/ར/ལ 後用 གྱི。元音結尾常附加 འི 或使用 ཡི。',[
E('དགེ་རྒན་གྱི་','The teacher’s','老師的'),E('གནམ་གྱི་','Of the sky','天空的'),E('ཕ་མའི་','The parents’','父母的')],
'Write three noun phrases from the source with their genitives. Explain each choice by the final written letter.','從來源寫出三組名詞與屬格，按末尾書寫字母說明選擇。',[
Q('Which form follows the suffix ན in དགེ་རྒན་?','དགེ་རྒན་ 的後加字 ན 後應用哪個？',['གྱི་','ཀྱི་','གི་','ནས་'],null,'ན belongs to the ན/མ/ར/ལ group.','ན 屬於 ན/མ/ར/ལ 組。')],sourceIDs[2]),
module('titles',4,'Read a literary title','讀懂文學標題','A title can be a compact grammar lesson. Locate the name, the attached genitive, and the thing named. A proper name should not be translated syllable by syllable.','標題也是濃縮的語法課。找出人名、附加屬格及作品名稱。專名不宜逐音節直譯。',[
E('ཚངས་དབྱངས་རྒྱ་མཚོའི་མགུར་གླུ།','Songs of Tsangyang Gyatso','倉央嘉措的詩歌')],
'Mark the title in three chunks: name, “of”, songs. Explain the relationship in Chinese or English before reading aloud.','把標題分為人名、「的」、詩歌三塊，先用中文或英文說明關係，再讀藏文。',[
Q('What relationship does the attached འི express here?','此處附加的 འི 表示甚麼關係？',['The songs are associated with the named poet','A command to sing','A question about location','A past-tense marker'],['詩歌與該詩人的關係','命令唱歌','詢問地點','過去式標記'],'It links the name to the following song-title noun.','它把人名連到後面的作品名詞。')],5),
module('honorific-reading',4,'Recognize honorific vocabulary','辨認敬語詞彙','Words can change with register. In the poem, ཐུགས refers to mind or wishes in honorific language. Do not assume that a new honorific word names a completely different object.','詞語隨語域而變。詩中 ཐུགས 是心或心意的敬語；不要以為敬語新詞一定表示完全不同的事物。',[
E('ཐུགས་','Mind / heart, honorific','心／心意（敬語）'),E('སེམས་','Mind','心'),E('བུ་མོའི་ཐུགས་','The young woman’s wishes / mind','年輕女子的心意')],
'Find the repeated honorific word in both halves of the poem. Compare the referent, not merely the dictionary gloss.','找出詩的兩部分重複的敬語，比較它所指的人，而不只看字典釋義。',[
Q('What should you identify first when a respectful word appears?','遇到敬語時，首先應辨認甚麼？',['Its referent and context','An imagined different object','Only its Latin spelling','A fixed English tense'],['所指對象與語境','想像另一件物品','只看拉丁拼寫','固定英語時態'],'Register and reference both matter for interpretation.','語域與所指對象都影響理解。')],5),
module('conditional',4,'Read an “if” clause','讀懂「若」的分句','In these lines ན closes a conditional clause. Find that boundary first; then read what follows as its consequence. The same written particle can have other uses in other contexts.','在這些詩句中，ན 結束條件分句。先找界線，再讀後面的結果。相同助詞在其他語境中可能另有用途。',[
E('མཛངས་མའི་ཐུགས་དང་བསྟུན་ན།།','If I follow the woman’s wishes…','若順從那位女子的心意……'),E('དབེན་པའི་རི་ཁྲོད་འགྲིམས་ན།།','If I wander in secluded mountain retreats…','若遊歷幽靜的山中隱修處……')],
'Cover the translation. Locate ན in each line and say where the condition ends.','遮住譯文，找出每句的 ན，說明條件分句在哪裡結束。',[
Q('What does ན signal in these two lines?','這兩句中的 ན 表示甚麼？',['An if-clause boundary','The poet’s name','A plural noun','A syllable separator'],['條件分句的界線','詩人的名字','複數名詞','音節點'],'This reading is grounded in these conditional lines, not every occurrence of ན.','這一解讀限於此處條件句，並非所有 ན 都一樣。')],5),
module('parallel-reading',4,'Read the poem as an argument','把詩讀成一個思想結構','The poem has two condition–consequence pairs. Its tension emerges from their parallel structure. A polished translation may reorganize the argument; compare it with the original clauses.','詩包含兩組「條件—結果」。兩難由平行結構呈現；華麗譯詩可能重組原文的思路，需與原分句比較。',[
E('ཚེ་འདིའི་ཆོས་སྐལ་ཆད་འགྲོ།།','The Dharma connection in this life would be lost.','今生的佛法緣分便會斷去。'),E('བུ་མོའི་ཐུགས་དང་འགལ་འགྲོ།།','It would go against the young woman’s wishes.','便會違背那位女子的心願。')],
'Combine these consequences with the conditions from the previous lesson. Explain the dilemma without looking at a translation.','把這些結果與上課的條件相配，不看譯文說明兩難。',[
Q('What is the overall structure?','整首詩的主要結構是甚麼？',['Two contrasting condition–consequence pairs','A shopping list','A greeting and farewell','A chronological biography'],['兩組相對的條件與結果','購物清單','問候與道別','按年代排列的傳記'],'Grammar makes the argument visible.','語法讓詩的思想結構顯現。')],5)
];
// Existing culture lessons become applications after the language and reading modules.
LESSONS.filter(l=>l.group===2).forEach(l=>l.group=5);
EXTRA_LESSONS.forEach(l=>{l.items=l.examples.map((e,i)=>({...e,id:l.id+'-example-'+i,wylie:'',sentence:true}));});
WORDS.push(...EXTRA_LESSONS.flatMap(l=>l.items));
LESSONS.push(...EXTRA_LESSONS);
LESSONS.sort((a,b)=>a.group-b.group);
const readingCheckpoint=module('reading-checkpoint',4,'Independent reading checkpoint','獨立閱讀檢核','Use the complete poem in the cultural reader. Work through it in order: identify names and words, find particles, mark clause boundaries, then test a tentative interpretation against the whole passage. Looking things up is part of reading.','使用文化閱讀中的完整詩作，依次辨詞、找助詞、分句，再把暫定解讀放回全文檢驗。查字典也是閱讀的一部分。',[
E('ཚེ་འདིའི་','Of this life','今生的'),E('བུ་མོའི་','The young woman’s','年輕女子的')],
'Without opening the translations: mark the two conditions; identify the two consequences; explain whose wishes are involved; give a literal paraphrase of all four lines. Then compare with the teaching gloss. This is supported reading of a known passage, not proof of general literary fluency.','不開譯文：標示兩個條件、辨認兩個結果、說明心意所指的人，直述四句意思，再與教學直譯比較。這是已學篇章的輔助閱讀檢核，尚不代表能流暢閱讀所有文學作品。',[
Q('You know every syllable but the sentence still makes little sense. What next?','每個音節都認識，但整句仍難理解，下一步應做甚麼？',['Identify grammatical links and clause boundaries','Translate each syllable independently and stop','Assume every particle is silent decoration','Copy a poetic translation as the literal grammar'],['辨認語法關係與分句界線','只逐音節翻譯便停下','把助詞當無意義裝飾','把優美譯詩直接當原文語法'],'Words need grammatical relationships and context.','詞語需要語法關係與語境。'),
Q('What would demonstrate transfer beyond memorizing this poem?','甚麼表現可顯示能力超越背熟此詩？',['Explain a new short passage with a dictionary and justify its grammar','Recite only this translation','Recognize only its first letter','Earn more XP on the same question'],['借字典解釋新短文，並說明語法依據','只背出此譯文','只認出第一個字母','同一題多拿經驗值'],'Transfer requires unfamiliar material.','遷移能力需要用陌生材料檢驗。')],5);
readingCheckpoint.items=readingCheckpoint.examples.map((e,i)=>({...e,id:'reading-checkpoint-example-'+i,wylie:'',sentence:true}));WORDS.push(...readingCheckpoint.items);LESSONS.push(readingCheckpoint);LESSONS.sort((a,b)=>a.group-b.group);
const CHUNKS={names:[['ཁྱེད་རང་གི་','མཚན་','ག་རེ་','ཡིན།'],['ངའི་མིང་','རྡོ་རྗེ་','ཡིན།']],origins:[['ཁྱེད་རང་','ག་ནས་','ཡིན།'],['ང་','བོད་ནས་','ཡིན།']],otherpeople:[['ཁོང་','སུ་','རེད།'],['ཁོང་','ང་ཚོའི་','དགེ་རྒན་','རེད།']]};
for(const [id,arr] of Object.entries(CHUNKS))LESSONS.find(l=>l.id===id).items.forEach((x,i)=>x.chunks=arr[i]);

const AUDIO_SOURCE_ID=SOURCES.length;SOURCES.push({title:'Basic Tibetan — bundled pronunciation recordings',url:'https://openbooks.lib.msu.edu/basictibetan/chapter/1-1/',note:bi('Human recordings: Jampa Khedup and Sonam Tsering, Basic Tibetan (2026), MSU Libraries, CC BY-NC 4.0. Alphabet and vowels are converted from AAC to PCM WAV; alphabet clips are split at pauses in source order. Dialect is not independently certified as native Lhasa.','真人錄音：Jampa Khedup、Sonam Tsering，Basic Tibetan（2026），MSU Libraries，CC BY-NC 4.0。字母與元音由 AAC 轉為 PCM WAV；字母按原順序於停頓處分段。未獨立認證為拉薩母語錄音。')});
LESSONS.find(l=>l.id==='vowels').audio='sound-vowels.wav';
