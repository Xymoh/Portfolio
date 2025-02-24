import { v4 as uuidv4 } from "uuid";

import seaServiceLogo from "../images/SeaService_icon_square.png"; 
import dkLogo from "../images/dklogo.jpg";
import dkLogoHykwm from "../images/dk_logo_hykwm.svg";
import dkLogoId from "../images/dklogoid.png";
import tdcmscssLogo from "../images/tdcmcss.jpg";
import wattcrowdLogo from "../images/wattcrowd-logo-light.svg";
import dialRecIcon from "../images/phone-dial-out-icon-vector.jpg";
import discordKayn from "../images/discordkayn.png";
import uruksahzal from "../images/uruksahzal.png";
import portfolio from "../images/portfolio.png";
import wcfLocalChat from "../images/wcfLocalChat.png";
import emotionrt from "../images/Happy.png";
import unscrambleWords from "../images/unscrambleWords.png";

const projects = [
  {
    id: uuidv4(),
    name: "Sea Service",
    desc: "Sea Service is a startup mobile application that allows users to track their sea service time and generate a sea service letter. The application is built with React Native and Rails.",
    img: seaServiceLogo,
    url: "https://play.google.com/store/apps/details?id=com.seaservice&hl=en",
  },
  {
    id: uuidv4(),
    name: "DK 15 Minute Language Course",
    desc: "A 15-minute language book courses for language learners. The application is built with React Native and GraphQL integration.",
    img: dkLogo,
    url: "https://play.google.com/store/apps/details?id=com.dk.dk15minutesapp&hl=en",
  },
  {
    id: uuidv4(),
    name: "Help Your Kids With Music",
    desc: "The Help Your Kids With Music book covers all the core subjects needed to pass up to grade 5 music exams around the world, including melody, rhythm, chords and harmony, intervals, scales, and keys, styles and genres, and the instruments of the orchestra.",
    img: dkLogoHykwm,
    url: "https://play.google.com/store/apps/details?id=com.dk.hykw_music&hl=en",
  },
  {
    id: uuidv4(),
    name: "DK Illustrated Dictionary",
    desc: "The DK Illustrated Dictionary series uses crystal-clear illustrations to help you learn over 10,000 useful words and phrases.",
    img: dkLogoId,
    url: "https://play.google.com/store/apps/details?id=com.illustrated_dictionary&hl=en",
  },
  {
    id: uuidv4(),
    name: "TDCMCSS.io",
    desc: "TDCMCSS.io is a package with a documentation that allows users to create a custom CSS framework for their projects. The package works well with frameworks like RoL and many others. It's inspired on TailwindCSS, BEM, 7-1 pattern and Bootstrap.",
    img: tdcmscssLogo,
    url: "https://tdcm-io.github.io/TDCMCSS",
  },
  {
    id: uuidv4(),
    name: "WattCrowd",
    desc: "WattCrowd is a platform that allows users to create and join challenges to reduce their carbon footprint. The application is built with React and Rails.",
    img: wattcrowdLogo,
    url: "https://wattcrowd.solar/welcome?locale=en",
  },
  {
    id: uuidv4(),
    name: "DialRec",
    desc: "DialRec is a test project for a mobile application that allows users replace their default phone dialer with a new one. The application is built with native Android and Kotlin.",
    img: dialRecIcon,
    url: "https://github.com/Xymoh/DialRec",
  },
  {
    id: uuidv4(),
    name: "Discord bot for League of Legends",
    desc: "I had made this discord bot for people who want to compete among the friends with the league of legends ranking system. Users can create a custom list for their discord server and see the ranking within the made list. For the technologies I had used Discord.py / SQLite / RiotAPI",
    img: discordKayn,
    url: "https://github.com/Xymoh/OdysseyKaynBot",
  },
  {
    id: uuidv4(),
    name: "Uruk'Sahzal Assault",
    desc: "Unity project game for a spaceship battle game working on railway camera!",
    img: uruksahzal,
    url: "https://github.com/Xymoh/Uruk-Sahzal-Assault",
  },
  {
    id: uuidv4(),
    name: "Portfolio",
    desc: "My own website where you can get to know me and see my recent works!",
    img: portfolio,
    url: "https://github.com/Xymoh/Portfolio",
  },
  {
    id: uuidv4(),
    name: "WCF Local Chat",
    desc: "This application allows two or more people to communicate in a chat in the way of sending messages by text form. This chat works on a local connection/local machine.",
    img: wcfLocalChat,
    url: "https://github.com/Xymoh/WcfLocalChat",
  },
  {
    id: uuidv4(),
    name: "Emotion Real Time",
    desc: "Using Python Machine Learning and external camera program upon the successfull training recognizes emotions on human faces in real time.",
    img: emotionrt,
    url: "https://github.com/Xymoh/EmotionsRealTimeML",
  },
  {
    id: uuidv4(),
    name: "Unscramble Words",
    desc: "Software dedicated to decode a text string entered by the user using a textbox or a custom text file.",
    img: unscrambleWords,
    url: "https://github.com/Xymoh/UnscrambleWords",
  },
];

export default projects;
