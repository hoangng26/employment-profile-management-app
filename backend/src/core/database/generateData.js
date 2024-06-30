const initialTl = [
  ['Javascript', 'ReactJS', 'VueJS', 'AngularJS', 'Jquery'],
  ['PHP', 'Python', 'Ruby', 'Java', 'Nodejs', 'C', 'C++', '.NET'],
  ['Adobe XD', 'Figma', 'Illustrator', 'InvisionStudio', 'Photoshop', 'Sketch'],
];

const initialImg = [
  {
    url: 'https://api.slingacademy.com/public/sample-photos/1.jpeg',
    title: 'Defense the travel audience hand',
    description: 'Leader structure safe or black late wife newspaper her pick central forget single likely.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/2.jpeg',
    title: 'Space build policy people model treatment town hard use',
    description: 'Much technology how within rather him lay why part actually system increase feel.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/3.jpeg',
    title: 'Party about different guess bill too owner',
    description: 'Street anything piece south yard since well point summer school economy respond people mother.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/4.jpeg',
    title: 'Table husband',
    description:
      'Skill drug college contain herself future seat human yes approach how then maybe public summer play commercial anything woman include million body measure government clearly question quickly parent.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/5.jpeg',
    title: 'Support audience model program three music',
    description:
      'World early north TV around meet goal across reason responsibility have must build up some language soon.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/6.jpeg',
    title: 'Apply future response she reduce decide',
    description:
      'Training beautiful age four skin cultural hundred environmental ability blood go physical relate produce tough open police.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/7.jpeg',
    title: 'Fire year candidate too like',
    description: 'Few address take for special development white career.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/8.jpeg',
    title: 'Reflect design camera land girl wind behind side',
    description:
      'Drug if approach out according set home job company wall source trouble act huge easy style physical so month.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/9.jpeg',
    title: 'Per nature research',
    description: 'Nature focus wonder behind magazine pattern degree far without tree consider.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/10.jpeg',
    title: 'Yard',
    description:
      'Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/11.jpeg',
    title: 'Commercial kitchen',
    description:
      'Their base help outside often grow address himself product issue watch pick kid all break ever threat try learn edge degree name order everyone seem interest democratic card reach safe war gun expert.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/12.jpeg',
    title: 'Fact herself',
    description: 'Car garden begin western over suggest even read nor might price different pick.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/13.jpeg',
    title: 'Produce science chance develop something',
    description: 'Wonder race yeah seem of argue a final follow evening hair.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/14.jpeg',
    title: 'Positive particular',
    description:
      'Result democratic design until always parent sell film true social range author expert least reveal those.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/15.jpeg',
    title: 'Again would high particularly American table',
    description: 'Young follow magazine bar kitchen begin at around home tax north majority especially institution.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/16.jpeg',
    title: 'Boy trouble offer candidate maybe mean family',
    description:
      'Chance boy family recent office according stay wrong during bag level which song also movement worker medical people important difference Congress store hotel they southern music statement kind book.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/17.jpeg',
    title: 'Pass effect part',
    description:
      'Writer play bank could response TV middle improve front growth act husband provide take trial student hand task most few receive loss allow allow range.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/18.jpeg',
    title: 'East operation young indeed draw great professor',
    description:
      'Notice organization admit could born laugh event writer ask most debate modern talk quite arm physical nor voice.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/19.jpeg',
    title: 'Style class that party see eat find',
    description:
      'Senior learn world agreement receive civil range detail everything model interest read film everything important.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/20.jpeg',
    title: 'No white success knowledge player community',
    description:
      'General free fly decide edge yeah their skill work television those claim pull out player leg ok small minute return morning minute son down model series team hot knowledge.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/21.jpeg',
    title: 'Nice write individual major conference bed class office shoulder',
    description: 'In each him half stuff under great.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/22.jpeg',
    title: 'Apply personal receive and',
    description: 'Month around PM on group education college any evidence until dog argue him production town on.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/23.jpeg',
    title: 'Tax risk guess each court hand sea goal dream',
    description: 'Million recently economic way short again share bill suggest short son natural.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/24.jpeg',
    title: 'Man whom woman produce may rule his man born choose few century',
    description:
      'Million rise ever something perhaps short culture animal tree radio quickly party doctor couple identify less peace bad both area leader bit simple stuff.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/25.jpeg',
    title: 'Certainly than need enjoy understand right',
    description: 'Message during performance especially care alone wind many hour president lose place write.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/26.jpeg',
    title: 'Executive challenge pattern eye although',
    description: 'End bag political bill thing popular end pull inside song resource.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/27.jpeg',
    title: 'Company heavy',
    description:
      'Then under agreement so guy party away into really maybe road spring local inside history financial exactly soon indeed nice official vote here left million film.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/28.jpeg',
    title: 'Campaign modern let civil',
    description:
      'Range under not themselves fear social risk star policy behind say then beat focus standard simple month practice class carry wonder appear age world history view why.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/29.jpeg',
    title: 'Camera pressure believe employee court',
    description:
      'Soon different phone free police process role though move go recognize able television executive specific nature give all its only good yes prevent issue.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/30.jpeg',
    title: 'Agent nearly',
    description: 'Official same career magazine store effect hospital recognize year alone.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/31.jpeg',
    title: 'Create as focus population when improve against physical',
    description:
      'Together threat whether cell our particularly society heavy ago watch foot lead part idea election professor issue suddenly task maintain create work determine blue one share health feeling husband difference finally lose city forget whose.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/32.jpeg',
    title: 'Trade success evening wrong also base quality game',
    description: 'State loss to long federal rest Congress name first than.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/33.jpeg',
    title: 'Image believe research laugh space lawyer process rule medical evidence',
    description:
      'Fly threat I quality suffer wear throw strong recent today treat product director daughter crime approach spend gun inside popular teacher statement them car.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/34.jpeg',
    title: 'Listen development test enter',
    description:
      'Similar too different newspaper offer crime management turn decide themselves future baby hotel compare.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/35.jpeg',
    title: 'Late form both rock painting community',
    description:
      'Field statement sense instead cultural ball attention quality window current indeed century large approach operation resource everyone particular establish American conference.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/36.jpeg',
    title: 'Record black have billion debate back',
    description:
      'Think minute international development clearly effort page maintain center food should when pretty recent picture measure fish.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/37.jpeg',
    title: 'Close direction almost discover mean or poor family the they exactly against',
    description:
      'Maintain least audience former risk ask let economic least contain sit real become society nor six down oil important itself.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/38.jpeg',
    title: 'Hot visit fall party everything',
    description:
      'Effort minute computer rest just quite me artist them build training discuss strategy still happen develop whether dark.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/39.jpeg',
    title: 'Form threat relationship',
    description:
      'State eat budget community sometimes cut contain blood morning science piece break call civil morning probably crime.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/40.jpeg',
    title: 'Ball week career soldier center must tree simply concern let',
    description:
      'Mouth also cultural strategy strategy speech describe ball pass fear eight build tax spring marriage.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/41.jpeg',
    title: 'Citizen end travel trial wife under believe know walk you',
    description:
      'Similar body win growth lay during me same much positive read represent citizen you billion view investment.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/42.jpeg',
    title: 'Foreign until',
    description:
      'Century hour down piece senior interest site and pattern here lawyer training local specific oil less include race one.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/43.jpeg',
    title: 'Quite involve build leg author whose',
    description: 'Box billion music image figure safe lose imagine kitchen answer concern.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/44.jpeg',
    title: 'My majority war film growth focus page respond set participant their',
    description: 'Dinner bed though name himself certainly do impact other policy there money risk age.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/45.jpeg',
    title: 'Life officer include',
    description:
      'Compare subject find use manage federal know pattern discuss player bit will almost according yes station range meet training word part else project gas crime film interest worker sure past nothing civil know.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/46.jpeg',
    title: 'Before recognize save both recent raise',
    description:
      'Four because well system force important close foreign blood because specific while about culture community cause market happen indicate leader by society feel.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/47.jpeg',
    title: 'Cut best happy else our send when reflect it arrive',
    description: 'Position certain term follow street citizen describe own inside voice live.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/48.jpeg',
    title: 'Interest end necessary',
    description:
      'Laugh fund difficult yes whose war test view television name the how decide see my must together again.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/49.jpeg',
    title: 'Result summer staff',
    description:
      'Fire wish perform cover suggest maintain weight difference film sing own can dog trouble method store that issue both investment environmental able bill deep dog bring.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/50.jpeg',
    title: 'So explain condition much clearly high range ahead join seek employee',
    description: 'Only create side evening their budget wide save number stuff chair.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/51.jpeg',
    title: 'Somebody bar stock',
    description: 'Lead include what whom trial sister increase future care member.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/52.jpeg',
    title: 'Miss democratic part mean measure network leader building above feel beautiful cup',
    description:
      'Begin rise so himself book style drop notice bit research find situation available wish agency imagine group run official science teach every present pay.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/53.jpeg',
    title: 'Between these industry have lead hand building',
    description:
      'Character side treatment eat fish project growth great travel state note enough only represent finally third from.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/54.jpeg',
    title: 'History within',
    description:
      'Relate responsibility between gun adult pick into argue college term party would significant research study positive address.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/55.jpeg',
    title: 'Pm wonder school determine small action source',
    description: 'Both enough card second skill say defense nothing car.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/56.jpeg',
    title: 'Sea different policy camera every discuss special use',
    description: 'Imagine bag agree moment college note responsibility left she.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/57.jpeg',
    title: 'Guess music',
    description: 'General us stop series itself other machine move past avoid now second.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/58.jpeg',
    title: 'Protect class near throughout customer late like',
    description:
      'Center fight change hair care marriage great series girl loss lawyer break door outside situation significant training movement produce she production tax indicate reason anything tend doctor lot investment study success.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/59.jpeg',
    title: 'Down class',
    description:
      'Outside condition push note sort campaign blue although only debate especially evidence night several theory top consumer main ready door poor under author society indeed station but hard.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/60.jpeg',
    title: 'Bag offer paper listen common technology size book adult money',
    description: 'Interview be exactly place government bad provide pattern ten name industry.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/61.jpeg',
    title: 'Activity campaign view',
    description:
      'Ball although than tough class production board cut particular day list color develop chair however beyond national begin culture either subject space room hand free like least nice husband not speech you.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/62.jpeg',
    title: 'Onto call south court get management who',
    description:
      'Idea way structure result moment around plant couple box discuss cause ready tree two decide usually game marriage tough either effort.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/63.jpeg',
    title: 'Run not thing deep address concern',
    description:
      'Especially stop computer cold save career good when trouble toward politics can other skin education nearly morning strategy country music when husband inside chair blue coach energy music market region final week indicate.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/64.jpeg',
    title: 'Election hope ask become',
    description: 'Leave skin two condition space any environment your analysis wind music move well.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/65.jpeg',
    title: 'Lead administration understand sign foot quality because possible business',
    description:
      'Since work his one campaign a choose where heart blue phone onto people knowledge imagine follow sea imagine teacher nothing federal because collection threat reflect small full enough later.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/66.jpeg',
    title: 'You beat very artist',
    description: 'Likely into upon week thing everyone value study tend agency fast training.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/67.jpeg',
    title: 'Hold trade',
    description:
      'Mind among sell item full war arm say art believe nothing involve item either hold start west shake skin.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/68.jpeg',
    title: 'Anything debate throw bad message brother when lead child space after',
    description:
      'Plant rather music property program possible others cup soldier cut total agent yeah such natural meet vote development newspaper owner receive common interesting at.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/69.jpeg',
    title: 'Be trade person any each tax',
    description:
      'Serve study keep population experience director official own natural together check many always quickly up difference half try.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/70.jpeg',
    title: 'On front course reflect manager beat star help cold let off small',
    description:
      'Letter light consumer push small whom nice kitchen identify national particularly ago consumer cost yet event pull.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/71.jpeg',
    title: 'Beyond low why their six kitchen push decide',
    description:
      'Building responsibility appear late oil can point require impact call support activity poor side everybody best deal nothing why turn authority speech your though meet avoid traditional science tax role.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/72.jpeg',
    title: 'Everybody fish',
    description:
      'Reality learn edge important book next seem view edge industry continue soldier its particular exactly land though place stock whose tonight money which single six letter.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/73.jpeg',
    title: 'Idea gas long',
    description:
      'Always between Democrat field wrong late continue example mention each there up seek structure he paper prove already gas build memory seem year alone sign team responsibility mission idea never water pressure its receive few because could.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/74.jpeg',
    title: 'Forget carry security as',
    description: 'Paper deep usually drive form law all international describe every notice live successful pressure.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/75.jpeg',
    title: 'Across international exist too voice',
    description: 'Middle sort me sell analysis move try man meet wife lawyer no last month identify last.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/76.jpeg',
    title: 'Class job book team hard difficult significant customer my',
    description: 'Because give find result arm customer lawyer population sort own organization bag each cause.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/77.jpeg',
    title: 'Number blue station truth create',
    description: 'Herself half run rock purpose four manager wide debate head watch school or available yet.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/78.jpeg',
    title: 'Third today book field between choose despite whose',
    description:
      'Environment behind interesting attack answer time charge then unit force rest family television policy respond general son return remain here soon.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/79.jpeg',
    title: 'Create bring early',
    description: 'May although up nature might check while notice treatment while PM whom edge simple author ground.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/80.jpeg',
    title: 'Mouth new dinner husband southern remember thing',
    description:
      'Summer shake radio say water method number community expert shake finally two reveal doctor medical spring.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/81.jpeg',
    title: 'Hospital soon this education peace',
    description:
      'Claim environmental either behind out agency example whose woman and next safe drug special account western responsibility mind Democrat itself remain military write wall politics.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/82.jpeg',
    title: 'Skill maybe class conference language down open PM company easy',
    description:
      'Their wish new indeed cultural police within measure chair thus attorney not eye fund food around sing including ago himself mention since center police class exist off.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/83.jpeg',
    title: 'Under new',
    description: 'Size first involve himself operation during ever owner body.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/84.jpeg',
    title: 'Score country involve culture buy plan',
    description:
      'Public option quickly recent story team machine officer class rate hold opportunity cell pick measure would rock religious than question now former.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/85.jpeg',
    title: 'Check north bar try baby military note',
    description:
      'Call policy through former final member in send choice democratic clear eight business really show similar available ok.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/86.jpeg',
    title: 'Prevent gas voice visit deal various',
    description:
      'She watch audience us than size board quite raise since model within water reveal answer magazine draw air wish pick.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/87.jpeg',
    title: 'News final later form statement federal there',
    description:
      'Then speak require nor movement seem suggest professor building Congress lot issue indicate difference various forget often economy class site method improve.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/88.jpeg',
    title: 'Effort hospital',
    description:
      'Stock west nearly arm successful radio black name research yet owner meet understand wide fund note answer election simple government according common deal public their such business executive man result along room which cover so.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/89.jpeg',
    title: 'Piece care believe within tree help let wish strategy',
    description:
      'Focus fear this up garden catch international evening will artist him relationship source author central former central woman cell consumer hot develop.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/90.jpeg',
    title: 'Sport walk kind travel model',
    description:
      'Half single crime all consumer establish management success cut recent change Republican race worker media during loss way offer such and.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/91.jpeg',
    title: 'Behavior check',
    description: 'Education hard direction concern third indeed rate head south over mean study.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/92.jpeg',
    title: 'Month dark five place stage stand father',
    description:
      'Cut news set inside cultural condition particularly send however process service might like eye participant loss million.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/93.jpeg',
    title: 'Message back',
    description: 'Card debate least position outside manage wife along difference call house new specific from size.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/94.jpeg',
    title: 'Point',
    description:
      'Expert rock cell ten unit try attorney news born today final face factor magazine father now exactly pull behavior answer service various third.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/95.jpeg',
    title: 'Must thus statement tax long performance hold land apply factor until nor region',
    description: 'Run market well involve today recently tax nation whom catch main about Democrat.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/96.jpeg',
    title: 'Itself fire Democrat station thank certainly organization',
    description:
      'Down want six their hair agent green federal exist every article ground make call tree me notice despite piece of.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/97.jpeg',
    title: 'See do',
    description: 'Third reduce ever reduce when watch someone nearly consider than ball.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/98.jpeg',
    title: 'Example treat decide',
    description:
      'Factor production north too spring test leader reach degree matter situation by also middle get there surface box.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/99.jpeg',
    title: 'Recent radio',
    description:
      'Cut thank senior choice protect here human series resource upon eye yes each according mention employee away beautiful foreign mouth design project thousand write those and.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/100.jpeg',
    title: 'Exist practice week miss water',
    description:
      'Lay sing much product person final then help its billion nor current after claim writer walk significant until free yourself.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/101.jpeg',
    title: 'Far over financial others child time seven left',
    description:
      'Student imagine hundred really Mr unit realize surface continue student guy well always rather chance behavior meeting top realize law class any accept two down defense force.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/102.jpeg',
    title: 'Team lead the determine current certainly trial everyone less',
    description:
      'Nor create human sound ask a sit power series box task six including physical trade black ever federal market form develop worry information however.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/103.jpeg',
    title: 'Including identify line agree',
    description:
      'Source and rest heart pull capital third want hospital beyond suffer money pay their dog boy sure civil involve member.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/104.jpeg',
    title: 'Mind test voice yard large',
    description: 'Leader check more last reflect hope central science production language current.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/105.jpeg',
    title: 'Age data piece everyone',
    description:
      'More this college fast mouth light old establish citizen matter skin country help avoid provide million huge place worry star treatment eight this.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/106.jpeg',
    title: 'Morning involve game money vote cause',
    description: 'Station win those here control condition resource evening without trouble talk part.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/107.jpeg',
    title: 'Sort movement reach tough today rich evidence',
    description:
      'Manager expert collection right call picture walk require week enjoy star local fine common government whatever clearly remain explain now recognize one statement brother get station lay any three.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/108.jpeg',
    title: 'Who consider safe',
    description:
      'Listen Republican he have artist eat serious source quite fund source form threat beautiful record allow money maintain visit increase general decade area never star lay top reveal beat.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/109.jpeg',
    title: 'Determine foot sometimes for',
    description: 'Position will contain camera end military sport network popular cold ten.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/110.jpeg',
    title: 'Quite certain various about technology win arrive',
    description: 'Three firm lead piece million address high company party always deep wide remain.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/111.jpeg',
    title: 'Beyond after chair energy feel talk',
    description:
      'Parent agreement build firm wear police later realize may chair husband team sign join chance official matter shake loss beyond without follow century be marriage turn win week lawyer benefit operation woman.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/112.jpeg',
    title: 'Along structure as discuss',
    description: 'Size than candidate minute movie modern sit another actually score of rise yourself everybody.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/113.jpeg',
    title: 'Almost arrive data should because sense message already relationship coach director',
    description:
      'Between trouble thousand though sit evening spend above reduce detail card tonight party will above community it generation toward dark him.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/114.jpeg',
    title: 'End produce cup movie yard',
    description:
      'Letter less standard bill continue discover church party class owner question threat example street everybody oil above movie interest mean today risk true us begin safe lead there rich hear really song weight with child control.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/115.jpeg',
    title: 'Again big president account get read set relationship something traditional culture occur',
    description: 'Firm structure manage gas position together choice simple travel commercial.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/116.jpeg',
    title: 'Positive level wait shoulder clearly matter',
    description: 'If development player order toward close administration college need yes price pretty power.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/117.jpeg',
    title: 'Myself sense share compare green east soon what responsibility democratic worker evidence',
    description:
      'Cup wife far be improve peace season energy season have part loss country financial audience seven TV surface stuff rather according read reality mother.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/118.jpeg',
    title: 'Kid serve activity town true standard',
    description:
      'Between collection writer speak call trial almost raise explain child story pick young six team start catch data share every would participant last open behind small soldier sing somebody fire skin mother citizen.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/119.jpeg',
    title: 'Figure able PM by knowledge knowledge free market interview',
    description: 'In be break machine hold weight fall step.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/120.jpeg',
    title: 'Five month century choose herself why none choice ready employee rich reason',
    description:
      'Game very establish interesting present success whom particularly fish sure say last discussion claim grow while PM somebody weight expect American news face myself write reduce wonder plant offer other picture real whole.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/121.jpeg',
    title: 'Bring follow',
    description: 'Certainly away run interest better minute return fine face add his rich.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/122.jpeg',
    title: 'Left site',
    description: 'Collection business weight even I politics southern ability course to peace draw decide.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/123.jpeg',
    title: 'System describe have staff since other right truth',
    description: 'Sort generation civil of start face employee clearly total group human.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/124.jpeg',
    title: 'Agree plant cost support fight culture decade',
    description:
      'Test camera listen century development because speech probably realize along per laugh main check discuss require office century future no mean outside seek.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/125.jpeg',
    title: 'Job article',
    description: 'Military music see boy environment drive quickly trade let this term tree.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/126.jpeg',
    title: 'Rest per shake budget',
    description: 'Prepare catch law cultural might alone contain exactly around send every sister.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/127.jpeg',
    title: 'Father education people',
    description:
      'Edge appear visit risk continue name military adult somebody us Mr voice be region now future consider idea shake red show glass there education protect home peace.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/128.jpeg',
    title: 'Season clear visit continue',
    description: 'Wind room member exactly kid course meet its physical wife.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/129.jpeg',
    title: 'Six positive yard',
    description:
      'Which guy nation by animal enough exactly and full become reality operation clearly too accept surface against adult pay make only many song green brother my score example notice into decision collection than.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/130.jpeg',
    title: 'Hospital foreign call about majority traditional',
    description: 'Fish woman increase set writer marriage before.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/131.jpeg',
    title: 'Throw hard body good',
    description: 'Today church tree inside near person seek through government medical modern require focus because.',
  },
  {
    url: 'https://api.slingacademy.com/public/sample-photos/132.jpeg',
    title: 'Card bag keep ten goal lot',
    description:
      'Individual report structure save person fish reason very center present thank say amount continue its society movie new various his reduce wide manager teach first loss rather firm crime hard line three him threat.',
  },
];

function randomNumber(limit) {
  return Math.floor(Math.random() * limit + 1);
}

function randomArray(length) {
  return Array.from(Array(length).keys());
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomPositions(employeeId, num) {
  let result = [];
  for (let id of randomArray(num)) {
    let positionResourceId = randomNumber(3);
    while (result.find((item) => item.positionResourceId === positionResourceId)) {
      positionResourceId = randomNumber(3);
    }
    result.push({
      employeeId,
      positionResourceId,
      displayOrder: id + 1,
    });
  }

  return result;
}

function TLIndex(tid, pid) {
  let id = 0;
  for (let i = 0; i < pid - 1; i++) {
    id += initialTl[i].length;
  }

  return id + tid;
}

function randomToolLanguages(item, index) {
  const { positionResourceId } = item;
  const toolLanguageResourceId = randomNumber(initialTl[positionResourceId - 1].length);
  const from = randomDate(new Date(2014, 1, 1), new Date());
  let to = randomDate(new Date(2014, 1, 1), new Date());
  while (to - from < 0) {
    to = randomDate(new Date(2014, 1, 1), new Date());
  }

  return {
    toolLanguageResourceId: TLIndex(toolLanguageResourceId, positionResourceId),
    positionId: index + 1,
    displayOrder: 1,
    from: from.toISOString(),
    to: to.toISOString(),
  };
}

let usedImage = [];

function randomImage(positions) {
  const imgsResult = positions.flatMap((item, index) => {
    const numImg = Math.floor(5 / item.length);
    let result = [];
    let resMark = [];

    const findItemIndex = (data, array) => array.find((i) => i === data);
    const findTLIndex = ({ employeeId, positionResourceId }) =>
      positions.flat().findIndex((i) => i.employeeId === employeeId && i.positionResourceId === positionResourceId);

    item.forEach((item) => {
      for (let i of randomArray(numImg)) {
        let rIndex = randomNumber(132) - 1;
        while (findItemIndex(rIndex, resMark) || findItemIndex(rIndex, usedImage)) {
          rIndex = randomNumber(132) - 1;
        }

        result.push({
          toolLanguageId: findTLIndex(item) + 1,
          cdnUrl: initialImg[rIndex].url,
          displayOrder: i + 1,
        });
        resMark.push(rIndex);
        usedImage.push(rIndex);
      }
    });

    return result;
  });

  return imgsResult;
}

function helloAction(text) {
  const positions = randomArray(30).map((item) => {
    const numPosition = randomNumber(3);
    const positions = randomPositions(item + 1, numPosition);
    return positions;
  });

  const toolLanguages = positions.flat().map(randomToolLanguages);

  const images = randomImage(positions);

  console.log(positions.flat());
  console.log(toolLanguages);
  console.log(images);
}

helloAction();
