export type Lang = 'en' | 'th';
export const content = {
  en: {
    description: 'A tactical survival game about land, fire, and a village in Northern Thailand. The free Thai-language PC beta is open now.',
    nav: ['The game', 'Field footage', 'The village', 'Beta status', 'Media'],
    skip: 'Skip to content', language: 'Choose language', status: 'Free beta 1 · open now',
    genre: 'Tactical survival · Northern Thailand',
    lede: 'Lead your crew through the dry season. Prepare the hillside, tend the fire, and cool the last ember before the satellite arrives.',
    watch: 'Watch the field preview', explore: 'Explore the game', art: 'Title artwork from the game',
    quick: ['Single player', 'Downloadable PC game', 'Thai language'],
    introLabel: '01 / Life on the hillside', introTitle: 'Six hours. One crew. A village counting on you.',
    intro: 'Every dry season, the village prepares its fallow fields for rice. In a fictional zero-burn regime, familiar work becomes a race against surveillance. What you burn, what you protect, and what you leave behind will shape the next season.',
    steps: [
      {name:'Prepare', time:'Before the first spark', icon:'blade', text:'Read the slope and the wind. Cut a firebreak, choose your approach, and put your crew where they can help.'},
      {name:'Burn', time:'14:00–20:00 in-game', icon:'flame', text:'Guide a living fire across the hillside. Shifting wind and rising heat can turn a careful plan into a scramble.'},
      {name:'Cool', time:'Before the satellite pass', icon:'drop', text:'Find hidden heat and douse the last embers. The work is only done when the ground is cool enough to leave.'}
    ],
    filmLabel:'02 / From the beta build', filmTitle:'See the hillside come to life.',
    filmNote:'12 seconds captured in Godot using the installed game models, animation, fire effects, and thermal view. Cameras and the demonstration are staged. Silent preview; visuals may change.',
    filmFallback:'Download the preview video', filmCaption:'Crew at work → hillside fire → thermal view',
    shots: ['The crew at the forest edge · staged in-engine view', 'The plot and its tactical interface', 'Fire moves through dry vegetation · staged camera', 'Remaining heat in the game’s thermal view', 'At the hearth: provisions and the next plot'],
    fullImage:'Open full image', villageLabel:'03 / The people behind the work', villageTitle:'A shared field. A shared future.',
    villageBody:'There is more at stake than the next patch of ground. Each member of this fictional community brings a different kind of knowledge.',
    cast: [
      {id:'khanae',name:'Kha-nae',thai:'ขะแน',role:'The farmer',text:'Leads the crew. Balances the burn, the harvest, and the people who depend on both.'},
      {id:'tapoh',name:'Ta-poh',thai:'ตาโพ',role:'The elder',text:'Reads the wind. Years on the hillside become a warning at just the right moment.'},
      {id:'munaw',name:'Mu-naw',thai:'มูนอ',role:'The forest guardian',text:'Seeks out hidden embers. A watchful eye and a little water can protect a whole slope.'},
      {id:'maelu',name:'Mae-Lu',thai:'แม่หลู',role:'The granary keeper',text:'Keeps the village fed. Every decision in the field comes home to the granary.'}
    ],
    cultureLabel:'Land, food, community',cultureTitle:'A field for a season. A forest for the years between.',
    cultureBody:'The game draws on rotational upland farming in Northern Thailand: cultivating a plot, then leaving it fallow as vegetation returns. Its people and enforcement scenarios are fictional, and its fire and satellite systems are simplified game mechanics.',
    cultureNote:'Cultural consultation with Pgakenyaw advisers is planned before commercial release.',
    betaLabel:'04 / The next season', betaTitle:'Beta 1 is open. Come and burn a season.',
    betaBody:'A free, Thai-language test build for Windows, macOS and Linux. It is a beta: expect rough edges, and tell us where you got stuck.',
    betaBadge:'Open to everyone · free', betaMore:'No account or email needed. The download page explains the Windows and macOS security prompts (the beta builds are not signed yet) and how to send us your playtest log.', betaCta:'Download beta 1', betaUrl:'https://undertwoskies-download.undertwoskies-game.workers.dev/', betaCtaNote:'Windows 10/11 · macOS · Linux (untested) · about 200 MB',
    road: [
      {name:'Thai beta 1',status:'Open now',text:'A free downloadable build. Play a full year in the field and tell us what worked and what did not.'},
      {name:'Free public demo',status:'Planned next',text:'A first-year introduction after beta feedback and review. No release date announced.'},
      {name:'Full release',status:'Later',text:'Steam is the intended main store. Pricing, timing, and final platform support are still to be confirmed.'}
    ],
    facts:[['Beta platforms','Windows & macOS'],['Current game language','Thai'],['English','Planned'],['Steam Deck / Linux','Build available, untested']],
    faqTitle:'Before you play', faq:[
      ['Can I play in my browser?', 'This is a downloadable PC game. The website is a preview, not a browser version.'],
      ['Where can I download it?', 'Beta 1 is free on our download page, linked from the Beta section above. It needs a PC with a mouse and keyboard or a gamepad.'],
      ['Is the game in English?', 'The current build is in Thai. English text and subtitles are planned. Both languages are available on this website.'],
      ['When will it be released, and what will it cost?', 'The public release date and price have not been announced. We are testing the game before making those commitments.']
    ],
    mediaTitle:'A closer look at Under Two Skies.', mediaLabel:'Development media',
    mediaIntro:'Current game captures, the project’s visual identity, and a concise factsheet. This is a beta preview, not a release announcement.',
    mediaAssets:'Screenshots & footage', logoTitle:'The game’s visual identity',logoNote:'Production logos from the game. The illustrated landscape is title artwork; it is not a gameplay screenshot.',
    download:'Download PNG', videoDownload:'Download the 12-second preview',factsTitle:'Project facts',
    mediaFacts:[['Title','Under Two Skies'],['Thai subtitle','ไร่หมุนเวียนใต้เงาดาวเทียม'],['Genre','Single-player tactical survival'],['Status','Free Thai beta 1, open now'],['Beta platforms','Windows & macOS; Linux build untested'],['Game language','Thai; English planned'],['Engine','Godot 4 · Forward+'],['Stores / full release / price','Not announced']],
    mediaNote:'The preview uses staged in-engine cameras. Screenshots and video show a development build; they do not imply tested hardware performance. AI tools were used in the asset workflow. Cultural and asset-provenance review remains part of the release plan.',
    contact:'A public media contact has not been announced yet.', footer:'An independent game about land, community, and survival.', top:'Back to top', rights:'All rights reserved.',
  },
  th: {
    description:'เกมเอาตัวรอดเชิงยุทธศาสตร์ว่าด้วยผืนดิน ไฟ และชุมชนบนภูเขาภาคเหนือ เปิดให้ดาวน์โหลดเบตาภาษาไทยสำหรับ PC ฟรีแล้ว',
    nav:['รู้จักเกม','ภาพจากเกม','คนในหมู่บ้าน','สถานะเบตา','สื่อประกอบ'],
    skip:'ข้ามไปยังเนื้อหา',language:'เลือกภาษา',status:'เบตา 1 เปิดให้เล่นฟรีแล้ว',genre:'เอาตัวรอดเชิงยุทธศาสตร์ · ภาคเหนือของไทย',
    lede:'นำทีมผ่านฤดูแล้ง เตรียมแปลงบนไหล่เขา ดูแลแนวไฟ และดับถ่านก้อนสุดท้าย ก่อนดาวเทียมจะผ่านเหนือศีรษะ',
    watch:'ชมวิดีโอจากเกม',explore:'ทำความรู้จักเกม',art:'ภาพประกอบหน้าชื่อเกม',quick:['เล่นคนเดียว','ดาวน์โหลดเล่นบน PC','เกมภาษาไทย'],
    introLabel:'01 / ชีวิตบนไหล่เขา',introTitle:'หกชั่วโมง หนึ่งทีม และทั้งหมู่บ้านที่รออยู่',
    intro:'ทุกฤดูแล้ง ชุมชนเตรียมพื้นที่ไร่เหล่าเพื่อปลูกข้าว ภายใต้นโยบายห้ามเผาในโลกสมมติ งานที่คุ้นเคยกลายเป็นการแข่งกับการเฝ้าระวัง สิ่งที่เผา สิ่งที่ปกป้อง และสิ่งที่เหลือไว้ ล้วนกำหนดฤดูกาลต่อไป',
    steps:[
      {name:'เตรียมพื้นที่',time:'ก่อนประกายไฟแรก',icon:'blade',text:'อ่านความลาดชันและทิศลม ถางแนวกันไฟ เลือกจุดเริ่ม และจัดทีมให้พร้อมช่วยกัน'},
      {name:'ดูแลแนวไฟ',time:'14:00–20:00 ในเกม',icon:'flame',text:'พาแนวไฟผ่านไหล่เขา ลมที่เปลี่ยนและความร้อนที่สะสมอาจทำให้ต้องปรับแผนในพริบตา'},
      {name:'ดับความร้อน',time:'ก่อนดาวเทียมผ่าน',icon:'drop',text:'ค้นหาจุดร้อนที่ซ่อนอยู่แล้วดับถ่านให้หมด งานยังไม่จบจนกว่าพื้นดินจะเย็นพอที่จะกลับบ้าน'}
    ],
    filmLabel:'02 / บันทึกจากเบตา',filmTitle:'เห็นผืนดินและผู้คนเคลื่อนไหวจริง',
    filmNote:'วิดีโอ 12 วินาที บันทึกจาก Godot ด้วยโมเดล แอนิเมชัน เอฟเฟกต์ไฟ และภาพความร้อนที่ใช้ในเกม จัดฉากและมุมกล้องเพื่อสาธิต วิดีโอไม่มีเสียง ภาพอาจเปลี่ยนแปลงระหว่างพัฒนา',
    filmFallback:'ดาวน์โหลดวิดีโอตัวอย่าง',filmCaption:'ทีมทำงาน → ไฟบนไหล่เขา → ภาพความร้อน',
    shots:['ทีมที่ชายป่า · จัดมุมกล้องในเกม','แปลงไร่และหน้าจอการเล่น','ไฟผ่านพืชแห้ง · จัดมุมกล้องในเกม','ความร้อนที่เหลือในมุมมองดาวเทียม','รอบกองไฟ: เสบียงและแปลงถัดไป'],
    fullImage:'เปิดภาพขนาดเต็ม',villageLabel:'03 / ผู้คนที่ร่วมแรง',villageTitle:'ผืนดินร่วมกัน อนาคตร่วมกัน',
    villageBody:'สิ่งที่เดิมพันมีมากกว่าพื้นที่แปลงถัดไป แต่ละคนในชุมชนสมมตินี้มีความรู้คนละอย่าง ที่ช่วยให้ทุกคนผ่านฤดูกาลไปด้วยกัน',
    cast:[
      {id:'khanae',name:'ขะแน',thai:'Kha-nae',role:'เกษตรกร',text:'นำทีมทำงาน หาสมดุลระหว่างไฟ ผลผลิต และผู้คนที่พึ่งพาทั้งสองสิ่ง'},
      {id:'tapoh',name:'ตาโพ',thai:'Ta-poh',role:'ผู้อาวุโส',text:'อ่านทิศลม ประสบการณ์บนไหล่เขากลายเป็นคำเตือนในเวลาที่จำเป็น'},
      {id:'munaw',name:'มูนอ',thai:'Mu-naw',role:'ผู้ดูแลผืนป่า',text:'มองหาถ่านที่ยังคุ สายตาที่ใส่ใจและน้ำเพียงเล็กน้อยช่วยปกป้องไหล่เขาได้'},
      {id:'maelu',name:'แม่หลู',thai:'Mae-Lu',role:'ผู้ดูแลยุ้งข้าว',text:'ดูแลเสบียงของหมู่บ้าน ทุกการตัดสินใจในไร่ส่งผลกลับมาถึงยุ้งข้าว'}
    ],
    cultureLabel:'ผืนดิน อาหาร ชุมชน',cultureTitle:'เป็นไร่หนึ่งฤดู เป็นป่าในปีที่พักฟื้น',
    cultureBody:'เกมได้แรงบันดาลใจจากไร่หมุนเวียนบนพื้นที่สูงภาคเหนือ การเพาะปลูกแล้วพักแปลงให้พืชพรรณกลับคืน ผู้คนและเหตุการณ์บังคับใช้กฎในเกมเป็นเรื่องสมมติ ส่วนระบบไฟและดาวเทียมเป็นกลไกที่ย่อมาเพื่อการเล่น',
    cultureNote:'มีแผนปรึกษาผู้ให้คำแนะนำชาวปกาเกอะญอก่อนวางจำหน่ายเชิงพาณิชย์',
    betaLabel:'04 / ฤดูกาลถัดไป',betaTitle:'เบตา 1 เปิดแล้ว มาลองเผาไร่สักฤดู',
    betaBody:'เกมทดสอบภาษาไทย ดาวน์โหลดฟรีสำหรับ Windows, macOS และ Linux นี่คือเบตา อาจเจอบั๊กหรือจุดที่ยังไม่ลงตัว เล่าให้เราฟังได้ว่าติดตรงไหน',
    betaBadge:'เปิดให้ทุกคน · ฟรี',betaMore:'ไม่ต้องสมัครหรือใช้อีเมล หน้าดาวน์โหลดอธิบายวิธีผ่านหน้าเตือนความปลอดภัยของ Windows และ macOS (บิลด์เบตายังไม่ได้เซ็นชื่อดิจิทัล) และวิธีส่งบันทึกการเล่นกลับมาให้เรา',betaCta:'ดาวน์โหลดเบตา 1',betaUrl:'https://undertwoskies-download.undertwoskies-game.workers.dev/',betaCtaNote:'Windows 10/11 · macOS · Linux (ยังไม่ได้ทดสอบ) · ประมาณ 200 MB',
    road:[
      {name:'เบตาภาษาไทย 1',status:'เปิดแล้ว',text:'ดาวน์โหลดฟรี ลองทำไร่ให้ครบหนึ่งปี แล้วบอกเราว่าอะไรได้ผล อะไรยังไม่ใช่'},
      {name:'เดโมสาธารณะฟรี',status:'แผนขั้นถัดไป',text:'ลองเล่นปีแรก หลังปรับปรุงจากผลทดสอบและผ่านการทบทวน ยังไม่ประกาศวันเปิด'},
      {name:'เกมฉบับเต็ม',status:'ระยะต่อไป',text:'วางแผนให้ Steam เป็นร้านหลัก ราคา กำหนดการ และแพลตฟอร์มที่รองรับยังรอยืนยัน'}
    ],
    facts:[['แพลตฟอร์มของเบตา','Windows และ macOS'],['ภาษาในเกมปัจจุบัน','ไทย'],['ภาษาอังกฤษ','อยู่ในแผน'],['Steam Deck / Linux','มีบิลด์ ยังไม่ได้ทดสอบ']],
    faqTitle:'ก่อนลงมือเล่น',faq:[
      ['เล่นในเบราว์เซอร์ได้ไหม?','เกมนี้ต้องดาวน์โหลดไปเล่นบน PC เว็บไซต์เป็นพื้นที่แนะนำเกม ไม่ใช่เวอร์ชันเล่นผ่านเบราว์เซอร์'],
      ['ดาวน์โหลดได้จากที่ไหน?','ดาวน์โหลดเบตา 1 ได้ฟรีจากหน้าดาวน์โหลด ลิงก์อยู่ในส่วนเบตาด้านบน ต้องเล่นบน PC ด้วยเมาส์และคีย์บอร์ด หรือจอยเกม'],
      ['มีภาษาอังกฤษไหม?','เกมปัจจุบันเป็นภาษาไทย มีแผนเพิ่มข้อความและคำบรรยายภาษาอังกฤษ ส่วนเว็บไซต์นี้มีทั้งสองภาษา'],
      ['เกมจะออกเมื่อไร ราคาเท่าไร?','ยังไม่ประกาศวันวางจำหน่ายและราคา เราต้องการทดสอบเกมให้พร้อมก่อนกำหนดรายละเอียดเหล่านี้']
    ],
    mediaTitle:'มองใกล้ขึ้นอีกนิดกับ Under Two Skies',mediaLabel:'สื่อจากเกมระหว่างพัฒนา',
    mediaIntro:'ภาพจากเกมปัจจุบัน อัตลักษณ์ของโครงการ และข้อมูลโดยย่อ หน้านี้เป็นตัวอย่างจากเบตา ยังไม่ใช่ประกาศวางจำหน่าย',
    mediaAssets:'ภาพหน้าจอและวิดีโอ',logoTitle:'อัตลักษณ์ของเกม',logoNote:'โลโก้ที่ใช้จริงในเกม ภาพวาดภูเขาเป็นภาพประกอบหน้าชื่อเกม ไม่ใช่ภาพการเล่น',
    download:'ดาวน์โหลด PNG',videoDownload:'ดาวน์โหลดวิดีโอ 12 วินาที',factsTitle:'ข้อมูลโครงการ',
    mediaFacts:[['ชื่อเกม','Under Two Skies'],['ชื่อรองภาษาไทย','ไร่หมุนเวียนใต้เงาดาวเทียม'],['แนวเกม','เอาตัวรอดเชิงยุทธศาสตร์ เล่นคนเดียว'],['สถานะ','เบตาภาษาไทย 1 เปิดให้ดาวน์โหลดฟรี'],['แพลตฟอร์มเบตา','Windows และ macOS; บิลด์ Linux ยังไม่ได้ทดสอบ'],['ภาษาในเกม','ไทย; มีแผนเพิ่มอังกฤษ'],['เอนจิน','Godot 4 · Forward+'],['ร้านค้า / เกมฉบับเต็ม / ราคา','ยังไม่ประกาศ']],
    mediaNote:'วิดีโอตัวอย่างจัดมุมกล้องในเอนจิน ภาพและวิดีโอมาจากเกมระหว่างพัฒนา ไม่ใช่การรับรองประสิทธิภาพของเครื่อง มีการใช้เครื่องมือ AI ในกระบวนการสร้างแอสเซ็ต การทบทวนด้านวัฒนธรรมและที่มาของแอสเซ็ตยังอยู่ในแผนก่อนเปิดตัว',
    contact:'ยังไม่ประกาศช่องทางติดต่อสำหรับสื่อ',footer:'เกมอิสระว่าด้วยผืนดิน ชุมชน และการอยู่รอด',top:'กลับด้านบน',rights:'สงวนลิขสิทธิ์',
  }
} as const;
