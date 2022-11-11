import AnakinSkywalker from './assets/AnakinSkywalker.jpg';
import LukeSkywalker from './assets/LukeSkywalker.jpg';
import HanSolo from './assets/HanSolo.jpg';
import ObiWanKenobi from './assets/ObiWanKenobi.jpg';
import Yoda from './assets/Yoda.jpg';
import PrincessLeia from './assets/PrincessLeia.jpg';
import Chewbacca from './assets/Chewbacca.jpg';

export const listAuthors = [
    {
        name: "Anakin Skywalker",
        nickname: "@dart_vader",
        photo: AnakinSkywalker,
    },
    {
        name: "Luke Skywalker",
        nickname: "@luke_skywalker",
        photo: LukeSkywalker,
    },
    {
        name: "Han Solo",
        nickname: "@han_solo",
        photo: HanSolo,
    },
    {
        name: "Obi-Wan Kenobi",
        nickname: "@kenobi",
        photo: ObiWanKenobi,
    },
    {
        name: "Yoda",
        nickname: "@yoda",
        photo: Yoda,
    },
    {
        name: "Princess Leia",
        nickname: "@leia",
        photo: PrincessLeia,
    },
    {
        name: "Chewbacca",
        nickname: "@chewbacca",
        photo: Chewbacca,
    }
]

export const randomNumber = () => Math.floor(Math.random()*100);