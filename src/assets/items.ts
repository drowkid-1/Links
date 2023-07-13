import website from '../assets/website.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.jpg'
import youtube from '../assets/youtube.jpeg'
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'
import twitter from '../assets/twitter.png'
import xyz from '../assets/custom.png' 

import { ItemType } from '../ts';
import { SponsorsType } from '../ts';

const items: ItemType[] = [{
    "title": "Website",
    "subtitle": "Visita mi sitio web 🌐",
    "image": website,
    "link": "https://drowkid.bswc.net" //your personal website or portfolio  link
},
{
    "title": "GitHub",
    "subtitle": "@drowkid-1 | Todos mis proyectos de código abierto  🏡 ",
    "image": github,
    "link": "https://github.com/drowkid-1" //Github Profile link
},
{
    "title": "Instagram",
    "subtitle": "@lalo_01dk |  Sígueme en mi ig🙂",
    "image": instagram,
    "link": "https://instagram.com/lalo_01dk" //instagram profile link 
},
{
    "title": "Twitter",
    "subtitle": "@drowkid-1 |  Sígueme en Twitter😉",
    "image": twitter,
    "link": "https://twitter.com/drowkid-1"// twitter profile link 
},
{
    "title": "React Apps",
    "subtitle": "Apps en línea que he creado 👽",
    "image": linkedin,
    "link": "https://drowkid.vercel.pub/" // linkedin
},
{
    "title": "YouTube",
    "subtitle": "DrowKid |  Mi canal de YouTube 🎬",
    "image": youtube,
    "link": "https://www.youtube.com/channel/UCOUa9hvd4sJWQWQRIQctbSg"//youtube channel link 
},

{
    "title": "Telegram",
    "subtitle": "@drowkid01 | Contáctame 💎",
    "image": telegram,
    "link": "https://telegram.me/drowkid01" //Telegram Pofile 
}]

const sponsors: SponsorsType[] = [{
        "link": "https://drowkidvercel.pub/",
        'image': xyz
    },
    {
        'link': 'https://www.instagram.com/lalo_01dk/',
        'image': xyz
    }]

export { items, sponsors }


