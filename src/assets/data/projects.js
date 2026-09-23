
import seaServiceLogo from "../images/SeaService_icon_square.png"; 
import dkLogo from "../images/dklogo.jpg";
import dkLogoHykwm from "../images/dk_logo_hykwm.svg";
import dkLogoId from "../images/dklogoid.png";
import tdcmscssLogo from "../images/tdcmcss.jpg";
import wattcrowdLogo from "../images/wattcrowd-logo-light.svg";
import dialRecIcon from "../images/phone-dial-out-icon-vector.jpg";
import emotionrt from "../images/Happy.png";
import riyadBankIcon from "../images/riyadbank-icon.png";
import riyadBankPayIcon from "../images/riyadbankpay-icon.png";
import apartmentPermitsIcon from "../images/apartmentpermits-icon.png";
import civitaiLoraSample from "../images/civitai-lora-sample.jpg";
import imgTagbooruCover from "../images/img-tagbooru-cover.jpg";
import tagbooruToolkit from "../images/tagbooru-toolkit.svg";

const projects = [
  {
    id: "project-1",
    name: "RiyadBank",
    desc: "RiyadBank mobile app experience focused on secure digital banking, streamlined account management, and smooth customer flows for everyday financial operations.",
    img: riyadBankIcon,
    url: "https://www.riyadbank.com/",
  },
  {
    id: "project-2",
    name: "RBPay",
    desc: "RBPay is a modern payments app concept built around speed, trust, and usability, enabling fast transfers, bill payments, and wallet-first interactions.",
    img: riyadBankPayIcon,
    url: "https://www.riyadbank.com/",
  },
  {
    id: "project-3",
    name: "Sea Service",
    desc: "Sea Service is a startup mobile application that allows users to track their sea service time and generate a sea service letter. The application is built with React Native and Rails.",
    img: seaServiceLogo,
    url: "https://play.google.com/store/apps/details?id=com.seaservice&hl=en",
  },
  {
    id: "project-4",
    name: "Img-Tagbooru",
    desc: "A local, offline Danbooru-style image tagging tool for anime and illustration workflows. Tags images with an ONNX vision model or generates tags from text with a local LLM, with batch processing, a caption editor and TXT/ZIP export. Built for LoRA trainers and dataset curators - no cloud APIs, fully private.",
    img: imgTagbooruCover,
    url: "https://xymoh.itch.io/img-tagbooru",
  },
  {
    id: "project-5",
    name: "Civitai LoRAs",
    desc: "My Civitai creator profile with published LoRAs: character LoRAs for Zenless Zone Zero, Honkai: Star Rail and Genshin Impact, plus an art-style LoRA. Each model ships with prompts and sample generations - a live showcase of the LoRA training and ComfyUI work I offer as a service.",
    img: civitaiLoraSample,
    url: "https://civitai.com/user/szyrus",
  },
  {
    id: "project-6",
    name: "ApartmentPermits",
    desc: "Parking permit platform for multi-family communities with virtual permits, resident and guest self-registration and enforcement tools. I worked on the camera-based licence plate recognition: point the phone at a car and the plate is scanned and checked against the permit list on the spot.",
    img: apartmentPermitsIcon,
    url: "https://www.apartmentpermits.com/",
  },
  {
    id: "project-7",
    name: "Tagbooru Toolkit",
    desc: "The web companion to Img-Tagbooru. Cleans up noisy tags copied from Danbooru and other sources, categorises them into organised prompt blocks (character, style, composition, ...) and runs local WD14/SwinV2 tagging backed by an offline index of over one million Danbooru tags.",
    img: tagbooruToolkit,
    url: "https://xymoh.github.io/Tagbooru/",
  },
  {
    id: "project-8",
    name: "DK 15 Minute Language Course",
    desc: "A 15-minute language book courses for language learners. The application is built with React Native and GraphQL integration.",
    img: dkLogo,
    url: "https://play.google.com/store/apps/details?id=com.dk.dk15minutesapp&hl=en",
  },
  {
    id: "project-9",
    name: "Help Your Kids With Music",
    desc: "The Help Your Kids With Music book covers all the core subjects needed to pass up to grade 5 music exams around the world, including melody, rhythm, chords and harmony, intervals, scales, and keys, styles and genres, and the instruments of the orchestra.",
    img: dkLogoHykwm,
    url: "https://play.google.com/store/apps/details?id=com.dk.hykw_music&hl=en",
  },
  {
    id: "project-10",
    name: "DK Illustrated Dictionary",
    desc: "The DK Illustrated Dictionary series uses crystal-clear illustrations to help you learn over 10,000 useful words and phrases.",
    img: dkLogoId,
    url: "https://play.google.com/store/apps/details?id=com.illustrated_dictionary&hl=en",
  },
  {
    id: "project-11",
    name: "TDCMCSS.io",
    desc: "TDCMCSS.io is a package with a documentation that allows users to create a custom CSS framework for their projects. The package works well with frameworks like RoL and many others. It's inspired on TailwindCSS, BEM, 7-1 pattern and Bootstrap.",
    img: tdcmscssLogo,
    url: "https://tdcm-io.github.io/TDCMCSS",
  },
  {
    id: "project-12",
    name: "WattCrowd",
    desc: "WattCrowd is a platform that allows users to create and join challenges to reduce their carbon footprint. The application is built with React and Rails.",
    img: wattcrowdLogo,
    url: "https://wattcrowd.solar/welcome?locale=en",
  },
  {
    id: "project-13",
    name: "DialRec",
    desc: "DialRec is a test project for a mobile application that allows users replace their default phone dialer with a new one. The application is built with native Android and Kotlin.",
    img: dialRecIcon,
    url: "https://github.com/Xymoh/DialRec",
  },
  {
    id: "project-14",
    name: "Emotion Real Time",
    desc: "Using Python Machine Learning and external camera program upon the successfull training recognizes emotions on human faces in real time.",
    img: emotionrt,
    url: "https://github.com/Xymoh/EmotionsRealTimeML",
  },
];

export default projects;
