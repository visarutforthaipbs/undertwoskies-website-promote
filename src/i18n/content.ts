export type Lang = 'en' | 'th';
export const content = {
  en: {
    subtitle: 'Rotational Farming in the Shadow of the Satellite',
    description: 'A tactical survival game about land, fire, and an upland village in Northern Thailand. The free Thai-language PC beta is open now.',
    nav: ['About', 'Game images', 'Characters', 'Beta status', 'News'],
    skip: 'Skip to content', language: 'Choose language', status: 'Free beta 1 · open now',
    genre: 'Tactical survival · Northern Thailand',
    lede: 'Every four months, the mountain villages of Northern Thailand must fight a high-tech eye in the sky — hoping only to grow enough rice to fill their bowls.',
    watch: 'Watch the field preview', explore: 'Explore the game', art: 'Title artwork from the game',
    quick: ['Single player', 'Downloadable PC game', 'Thai language build'],
    introLabel: '01 / Life on the hillside', introTitle: '**6** hours. **1** crew. A village counting on you.',
    intro: 'Every dry season, the village prepares its fallow fields for rice. In a fictional zero-burn regime, familiar work becomes a race against surveillance. What you burn, what you protect, and what you leave behind will shape the next season.',
    steps: [
      {name:'Prepare', time:'Before the first spark', icon:'blade', text:'Read the slope and the wind. Cut a firebreak, choose your approach, and put your crew where they can help.'},
      {name:'Burn', time:'14:00–20:00 in-game', icon:'flame', text:'Guide a living fire across the hillside. Shifting wind and rising heat can turn a careful plan into a scramble.'},
      {name:'Cool', time:'Before the satellite pass', icon:'drop', text:'Find hidden heat and douse the last embers. The work is only done when the ground is cool enough to leave.'}
    ],
    filmLabel:'02 / From the beta build', filmTitle:'See the hillside in motion.',
    filmNote:'Gameplay sample recorded directly from the development build in Godot 4 on macOS. Demonstrates tactical rotational farming, wind observation, firebreak clearance, controlled ignition, and ember suppression.',
    filmFallback:'Download the gameplay video (MP4)', filmCaption:'Firebreak clearance → wind observation → controlled burn & ember suppression',
    shots: ['The crew at the forest edge · staged in-engine view', 'The plot and its tactical interface', 'Fire moves through dry vegetation · staged camera', 'Remaining heat in the game’s thermal view', 'At the hearth: provisions and the next plot'],
    fullImage:'Open full image', villageLabel:'03 / The people behind the work', villageTitle:'A shared field. A shared future.',
    villageBody:'There is more at stake than the next patch of ground. Each member of this fictional community brings a different kind of knowledge.',
    cast: [
      {id:'khanae',name:'Kha-nae',sub:'',role:'The farmer',text:'Leads the crew. Balances the burn, the harvest, and the people who depend on both.'},
      {id:'tapoh',name:'Ta-poh',sub:'',role:'The elder',text:'Reads the wind. Years on the hillside become a warning at just the right moment.'},
      {id:'munaw',name:'Mu-naw',sub:'',role:'The forest guardian',text:'Seeks out hidden embers. A watchful eye and a little water can protect a whole slope.'},
      {id:'maelu',name:'Mae-Lu',sub:'',role:'The granary keeper',text:'Keeps the village fed. Every decision in the field comes home to the granary.'}
    ],
    cultureLabel:'Land, food, community',cultureTitle:'I grow rice according to the satellite??',
    cultureBody:'The game draws on rotational upland farming in Northern Thailand: cultivating a plot, then leaving it fallow as vegetation returns. Its people and enforcement scenarios are fictional, and its fire and satellite systems are simplified game mechanics.',
    cultureNote:'Cultural consultation with Pgakenyaw advisers is planned before commercial release.',
    betaLabel:'04 / The next season', betaTitle:'Beta 1 is open. Come and burn a season.',
    betaBody:'A free, Thai-language test build for Windows, macOS and Linux. It is a beta: expect rough edges, and tell us where you got stuck.',
    betaBadge:'Open to everyone · free', betaMore:'No account or email needed. The macOS build is signed and notarized by Apple; the download page explains the Windows security prompt (the Windows build is not signed yet) and how to send us your playtest log. Feedback and playtest logs go to our Discord, channel #feedback: ', feedbackUrl:'https://discord.gg/ZJ2ywpJ7Ss', feedbackLink:'discord.gg/ZJ2ywpJ7Ss', betaCta:'Download beta 1', betaUrl:'https://undertwoskies-download.undertwoskies-game.workers.dev/', betaCtaNote:'Windows 10/11 · macOS · Linux (untested) · about 190–230 MB',
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
    download:'Download PNG', videoDownload:'Download gameplay preview (1:45)',factsTitle:'Project facts',
    mediaFacts:[['Title','Under Two Skies'],['Subtitle','Rotational Farming in the Shadow of the Satellite'],['Genre','Single-player tactical survival'],['Status','Free Thai beta 1, open now'],['Beta platforms','Windows & macOS; Linux build untested'],['Game language','Thai; English planned'],['Engine','Godot 4 · Forward+'],['Stores / full release / price','Not announced']],
    mediaNote:'Gameplay capture recorded directly from the Godot 4 development build. Screenshots and video show a development build; they do not imply tested hardware performance. AI tools were used in the asset workflow. Cultural and asset-provenance review remains part of the release plan.',
    contact:'A public media contact has not been announced yet.', footer:'An independent game about land, community, and survival.', top:'Back to top', rights:'All rights reserved.',
  },
  th: {
    subtitle:'ไร่หมุนเวียนใต้เงาดาวเทียม',
    description:'เกมเอาตัวรอดเชิงยุทธศาสตร์บนดอยสูงภาคเหนือ เมื่อผืนดิน เปลวไฟ และชะตาของหมู่บ้านอยู่ในมือคุณ เปิดให้ดาวน์โหลดทดลองเล่นเบตาภาษาไทยบน PC ฟรีแล้ว',
    nav:['เกี่ยวกับ','ภาพจากเกมส์','ตัวละคร','สถานะเบตา','ข่าวสาร'],
    skip:'ข้ามไปยังเนื้อหา',language:'เลือกภาษา',status:'เบตา 1 · เปิดให้ทดสอบฟรีแล้ววันนี้',genre:'แท็กติกเอาชีวิตรอด · ดอยสูงภาคเหนือ',
    lede:'ทุกๆ 4 เดือนของทุกปี หมู่บ้านบนภูเขาในภาคเหนือของประเทศไทยต้องคอยต่อสู้กับดวงตาสุดไฮเทคบนท้องฟ้า เพื่อหวังเพียงว่าจะมีข้าวพอให้อิ่มท้อง',
    watch:'ชมฟุตเทจจากแปลงจริง',explore:'สำรวจระบบเกม',art:'ภาพวาดเปิดตัวเกม',quick:['โหมดผู้เล่นคนเดียว','ดาวน์โหลดเล่นบน PC','รองรับภาษาไทย'],
    introLabel:'01 / ชีวิตบนไหล่เขา',introTitle:'**6** ชั่วโมง **1** ทีมทำงาน กับชะตากรรมของคนทั้งหมู่บ้าน',
    intro:'เมื่อฤดูแล้งเวียนมาถึง ชาวบ้านต้องเตรียม “ไร่เหล่า” เพื่อปลูกข้าว ทว่าท่ามกลางมาตรการห้ามเผาเด็ดขาดในโลกสมมติ วิถีทำกินที่สืบทอดกันมาจึงกลายเป็นการชิงไหวชิงพริบกับดาวเทียมตรวจจับ สิ่งที่คุณเลือกเผา สิ่งที่คุณเลือกรักษา และร่องรอยที่คุณทิ้งไว้เบื้องหลัง จะเป็นตัวตัดสินความอยู่รอดในฤดูกาลถัดไป',
    steps:[
      {name:'เตรียมพื้นที่',time:'ก่อนประกายไฟแรก',icon:'blade',text:'อ่านทิศทางลมและความลาดชัน ถางแนวกันไฟ วางแผนจุดเริ่มจุดไฟ และจัดตำแหน่งทีมงานให้พร้อมรับมือทุกสถานการณ์'},
      {name:'ควบคุมแนวไฟ',time:'14:00–20:00 ในเกม',icon:'flame',text:'คุมเปลวไฟให้ลามไปตามไหล่เขาอย่างระมัดระวัง เพียงลมเปลี่ยนทิศหรือความร้อนปะทุ แผนการที่วางไว้อย่างดีก็อาจกลายเป็นความโกลาหลได้ในพริบตา'},
      {name:'ดับความร้อนให้สนิท',time:'ก่อนดาวเทียมตรวจจับโคจรผ่าน',icon:'drop',text:'ตรวจหาจุดความร้อนที่ซ่อนอยู่ใต้ผืนดิน แล้วดับเถ้าถ่านที่คุกรุ่นให้มอดสนิท ภารกิจยังไม่สิ้นสุดจนกว่าผืนดินจะเย็นลงจนไม่หลงเหลือร่องรอย'}
    ],
    filmLabel:'02 / ภาพจริงจากตัวเกม',filmTitle:'สัมผัสชีวิตจริงบนไหล่เขา',
    filmNote:'คลิปตัวอย่างการเล่นจริง บันทึกจากตัวเกมเวอร์ชันพัฒนาบน Godot 4 บน macOS แสดงระบบจำลองไฟตามเวลาจริง การอ่านทิศทางลม ถางแนวกันไฟ จุดไฟคุมแนว และการดับถ่านคุเพื่อหลบดาวเทียมตรวจจับ',
    filmFallback:'ดาวน์โหลดคลิปวิดีโอตัวอย่างการเล่น (MP4)',filmCaption:'ถางแนวกันไฟ → สังเกตทิศทางลม → จุดไฟคุมแนวและดับถ่านคุ',
    shots:['ทีมงานที่แนวชายป่า · จัดมุมกล้องในเอนจิน','แปลงไร่และอินเทอร์เฟซควบคุมเชิงยุทธศาสตร์','เปลวไฟลามผ่านวัชพืชแห้ง · จัดมุมกล้องในเอนจิน','ไอความร้อนตกค้างในมุมมองตรวจจับดาวเทียม','ล้อมวงข้างเตาไฟ: จัดสรรเสบียงและวางแผนแปลงถัดไป'],
    fullImage:'ดูภาพขนาดเต็ม',villageLabel:'03 / ผู้คนแห่งขุนเขา',villageTitle:'ผืนดินเดียวกัน ชะตากรรมร่วมกัน',
    villageBody:'เดิมพันครั้งนี้มีความหมายยิ่งกว่าแค่ผืนดินแปลงต่อไป สมาชิกแต่ละคนในชุมชนสมมตินี้ต่างนำภูมิปัญญาเฉพาะตัวมาผสานกัน เพื่อพาหมู่บ้านก้าวผ่านฤดูแล้งไปด้วยกัน',
    cast:[
      {id:'khanae',name:'ขะแน',sub:'Kha-nae',role:'หัวหน้าทีมทำไร่',text:'ผู้นำทีมทำงาน คอยชั่งน้ำหนักระหว่างการจัดการไฟ ผลผลิตที่จะได้ และปากท้องของผู้คนที่พึ่งพาทั้งสองสิ่ง'},
      {id:'tapoh',name:'ตาโพ',sub:'Ta-poh',role:'ผู้เฒ่าประจำหมู่บ้าน',text:'หยั่งรู้ทิศทางลม ประสบการณ์ชั่วชีวิตบนไหล่เขาแปรเปลี่ยนเป็นคำเตือนที่แม่นยำในจังหวะวิกฤต'},
      {id:'munaw',name:'มูนอ',sub:'Mu-naw',role:'ผู้เฝ้าระวังผืนป่า',text:'คอยมองหาเถ้าถ่านที่ยังคุกรุ่น สายตาที่ช่างสังเกตกับน้ำเพียงไม่กี่กระบอก สามารถปกป้องป่าทั้งผืนเขาไว้ได้'},
      {id:'maelu',name:'แม่หลู',sub:'Mae-Lu',role:'ผู้ดูแลยุ้งฉาง',text:'ดูแลปากท้องและเสบียงของคนทั้งหมู่บ้าน ทุกการตัดสินใจในแปลงไร่ย่อมส่งผลสะท้อนกลับมาถึงยุ้งฉางเสมอ'}
    ],
    cultureLabel:'ผืนดิน อาหาร และวิถีชุมชน',cultureTitle:'ผมปลูกข้าวตามดาวเทียม??',
    cultureBody:'เกมนี้ได้รับแรงบันดาลใจจากระบบไร่หมุนเวียนบนพื้นที่สูงของภาคเหนือ ซึ่งหมุนเวียนเพาะปลูกแล้วปล่อยแปลงพักฟื้นให้ผืนป่ากลับคืนความอุดมสมบูรณ์ ทั้งนี้ ตัวละครและสถานการณ์การบังคับใช้กฎในเกมเป็นเรื่องสมมติ ส่วนระบบไฟและดาวเทียมตรวจจับเป็นกลไกที่จำลองขึ้นเพื่อความสนุกในการเล่น',
    cultureNote:'ทีมงานมีแผนเข้าปรึกษาและขอคำแนะนำจากปราชญ์ชุมชนชาวปกาเกอะญอก่อนการวางจำหน่ายเชิงพาณิชย์',
    betaLabel:'04 / ฤดูกาลถัดไป',betaTitle:'เบตา 1 เปิดแล้ว มาร่วมทำไร่สักฤดูกาล',
    betaBody:'บิลด์ทดสอบภาษาไทย ดาวน์โหลดฟรีสำหรับ Windows, macOS และ Linux เนื่องจากยังเป็นช่วงเบตา อาจมีจุดที่ยังไม่สมบูรณ์หรือพบข้อบกพร่องระหว่างเล่น สามารถบอกเล่าให้เราฟังได้เสมอว่าคุณติดขัดตรงจุดไหน',
    betaBadge:'เปิดให้ทุกคนทดสอบ · ฟรี',betaMore:'ไม่ต้องลงทะเบียนบัญชีหรือใช้อีเมล ตัวเกมเวอร์ชัน macOS ผ่านการลงนามดิจิทัลและรับรองความปลอดภัยจาก Apple แล้ว ส่วนหน้าดาวน์โหลดมีคำแนะนำวิธีผ่านหน้าต่างแจ้งเตือนความปลอดภัยของ Windows (เนื่องจากบิลด์ Windows ยังไม่ได้ลงนามดิจิทัล) และขั้นตอนการส่งไฟล์บันทึกการเล่นกลับมาให้ทีมงาน ร่วมส่งไฟล์บันทึกและติชมได้ทาง Discord ช่อง #feedback: ', feedbackUrl:'https://discord.gg/ZJ2ywpJ7Ss', feedbackLink:'discord.gg/ZJ2ywpJ7Ss', betaCta:'ดาวน์โหลดเบตา 1',betaUrl:'https://undertwoskies-download.undertwoskies-game.workers.dev/',betaCtaNote:'Windows 10/11 · macOS · Linux (ยังไม่ผ่านการทดสอบ) · ขนาดไฟล์ประมาณ 190–230 MB',
    road:[
      {name:'เบตาภาษาไทย 1',status:'เปิดทดสอบแล้ว',text:'ดาวน์โหลดเล่นฟรี ลองสัมผัสชีวิตในแปลงไร่ให้ครบหนึ่งปีเต็ม แล้วบอกเราว่าอะไรที่ได้ผล และอะไรที่ควรปรับปรุง'},
      {name:'เดโมสาธารณะฟรี',status:'แผนงานขั้นถัดไป',text:'เปิดให้ทดลองเล่นช่วงปีแรกของเกม หลังปรับปรุงตามข้อเสนอแนะช่วงเบตาและผ่านการทบทวนเนื้อหา ยังไม่กำหนดวันเปิดตัว'},
      {name:'เกมเวอร์ชันเต็ม',status:'ระยะต่อไป',text:'วางแผนวางจำหน่ายบน Steam เป็นช่องทางหลัก โดยราคา กำหนดการ และแพลตฟอร์มที่รองรับจะประกาศยืนยันอีกครั้ง'}
    ],
    facts:[['แพลตฟอร์มช่วงเบตา','Windows และ macOS'],['ภาษาในเกมปัจจุบัน','ภาษาไทย'],['ภาษาอังกฤษ','อยู่ในแผนพัฒนา'],['Steam Deck / Linux','มีบิลด์ให้ดาวน์โหลด (ยังไม่ได้ทดสอบอย่างเป็นทางการ)']],
    faqTitle:'ข้อควรรู้ก่อนเริ่มเล่น',faq:[
      ['เล่นบนเว็บเบราว์เซอร์ได้ไหม?','ไม่ได้ ตัวเกมเป็นเกม PC ที่ต้องดาวน์โหลดไปติดตั้งบนเครื่อง เว็บไซต์นี้จัดทำขึ้นเพื่อแนะนำเกมเท่านั้น ไม่ใช่เวอร์ชันเล่นผ่านเว็บ'],
      ['ดาวน์โหลดตัวเกมได้จากที่ไหน?','สามารถดาวน์โหลดเบตา 1 ได้ฟรีจากหน้าดาวน์โหลดผ่านปุ่มในส่วนเบตาด้านบน ตัวเกมรองรับการเล่นบน PC โดยใช้เมาส์กับคีย์บอร์ด หรือคอนโทรลเลอร์ (จอยเกม)'],
      ['ตัวเกมมีภาษาอังกฤษไหม?','บิลด์ปัจจุบันเป็นภาษาไทย โดยมีแผนเพิ่มข้อความและคำบรรยายภาษาอังกฤษในอนาคต สำหรับเว็บไซต์นี้มีให้อ่านทั้งสองภาษา'],
      ['เกมจะวางจำหน่ายเมื่อไร และราคาเท่าไร?','ขณะนี้ยังไม่ประกาศวันวางจำหน่ายและราคาอย่างเป็นทางการ เนื่องจากทีมงานต้องการทดสอบและพัฒนาเกมให้พร้อมที่สุดก่อนกำหนดรายละเอียดเหล่านี้']
    ],
    mediaTitle:'เจาะลึก Under Two Skies: สื่อและข้อมูลโครงการ',mediaLabel:'สื่อประชาสัมพันธ์',
    mediaIntro:'รวมภาพบันทึกจากเกม อัตลักษณ์ของโครงการ และข้อมูลสรุปที่สำคัญ หน้านี้จัดทำขึ้นเพื่อให้ข้อมูลเบื้องต้นเกี่ยวกับตัวเกมช่วงเบตา ยังไม่ใช่การประกาศวันวางจำหน่าย',
    mediaAssets:'ภาพสกรีนช็อตและวิดีโอ',logoTitle:'โลโก้และอัตลักษณ์ทางภาพ',logoNote:'ไฟล์โลโก้อย่างเป็นทางการที่ใช้ในเกม ภาพวาดทิวเขาเป็นภาพอาร์ตเวิร์กประกอบชื่อเกม ไม่ใช่ภาพหน้าจอการเล่น',
    download:'ดาวน์โหลดไฟล์ PNG',videoDownload:'ดาวน์โหลดคลิปตัวอย่างการเล่น (1:45 นาที)',factsTitle:'ข้อมูลจำเพาะของโครงการ',
    mediaFacts:[['ชื่อเกม','Under Two Skies'],['ชื่อรองภาษาไทย','ไร่หมุนเวียนใต้เงาดาวเทียม'],['แนวเกม','แท็กติกเอาชีวิตรอด ผู้เล่นคนเดียว (Single-player tactical survival)'],['สถานะ','เบตาภาษาไทย 1 เปิดให้ดาวน์โหลดฟรี'],['แพลตฟอร์มช่วงเบตา','Windows และ macOS (บิลด์ Linux ยังไม่ผ่านการทดสอบ)'],['ภาษาในเกม','ภาษาไทย (มีแผนเพิ่มภาษาอังกฤษ)'],['เอนจิน','Godot 4 · Forward+'],['ช่องทางจำหน่าย / เวอร์ชันเต็ม / ราคา','ยังไม่ประกาศ']],
    mediaNote:'คลิปตัวอย่างการเล่นบันทึกจากตัวเกมจริงบนเอนจิน Godot 4 ภาพและวิดีโอมาจากตัวเกมระหว่างพัฒนา ไม่ใช่การรับรองประสิทธิภาพบนฮาร์ดแวร์ทุกประเภท มีการใช้เครื่องมือ AI ในกระบวนการสร้างแอสเซ็ต โดยการทบทวนด้านวัฒนธรรมและที่มาของแอสเซ็ตทั้งหมดจะดำเนินงานก่อนเปิดตัวอย่างเป็นทางการ',
    contact:'ยังไม่มีการเปิดเผยช่องทางติดต่อสำหรับสื่อมวลชนอย่างเป็นทางการ',footer:'เกมอิสระที่บอกเล่าเรื่องราวของผืนดิน ชุมชน และการดิ้นรนเพื่ออยู่รอด',top:'กลับสู่ด้านบน',rights:'สงวนลิขสิทธิ์ทั้งหมด',
  }
} as const;
