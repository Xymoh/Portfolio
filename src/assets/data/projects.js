import { v4 as uuidv4 } from "uuid";
import discordKayn from "../images/discordkayn.png";
import uruksahzal from "../images/uruksahzal.png";
import wcfLocalChat from "../images/wcfLocalChat.png";
import unscrambleWords from "../images/unscrambleWords.png";

const projects = [
  {
    id: uuidv4(),
    name: "Discord bot for League of Legends",
    desc: "I had made this discord bot for people who want to compete among the friends with the league of legends ranking system. Users can create a custom list for their discord server and see the ranking within the made list. For the technologies I had used Discord.py / SQLite / RiotAPI",
    img: discordKayn,
  },
  {
    id: uuidv4(),
    name: "Uruk'Sahzal Assault",
    desc: "Unity project game for a spaceship battle game working on railway camera!",
    img: uruksahzal,
  },
  {
    id: uuidv4(),
    name: "WCF Local Chat",
    desc: "This application allows two or more people to communicate in a chat in the way of sending messages by text form. This chat works on a local connection/local machine.",
    img: wcfLocalChat,
  },
  {
    id: uuidv4(),
    name: "Unscramble Words",
    desc: "Software dedicated to decode a text string entered by the user using a textbox or a custom text file.",
    img: unscrambleWords,
  },
];

export default projects;
