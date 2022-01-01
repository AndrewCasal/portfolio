let char = ['Goku', 'Luffy', 'Naruto', 'Ichigo', 'Eren Jaeger', 'Deku', 'Yusuke', 'Saitama', 'Jotaro Kujo', 'Meliodas'];
let item = ['Dragon Balls', 'Devil Fruit', 'Kunai', 'Substitute Shinigami Badge', 'Omni-Directional Mobility Gear', 'Grenade Bracer', 'Spirit Sword', "Child Emporer's Backpack", 'Star Platinum', 'Spirit Spear Chastiefol' ];
let power = ['Super Saiyan', 'Haki', 'Biguu Mode', 'Final Hollowification', 'Attack Titan Form', 'One for All', 'Spirit Gun', 'Destroy with One Punch', 'Hamon', 'Sunshine'];

const randNumberGen = () => {
    return Math.floor(Math.random() * 10) - 1
}
const randChar = char[randNumberGen()];
const randItem = item[randNumberGen()];
const randPower = power[randNumberGen()];

const ultimateAnimeWarrior = () => {
    console.log(`Your ultimate anime warrier is ${randChar} with the use of ${randItem} and the ability of ${randPower}!`);
}

function charImage (){
    let imgChar = document.getElementById("character_img").src;
    switch (randChar) {
        case 'Goku':
            imgChar.innerHTML = "/images/characters/goku.jpg";
            break;
        case 'Luffy':
            imgChar.innerHTML = "/images/characters/luffy.png";
            break;
        case 'Naruto':
            imgChar.innerHTML = "/images/characters/naruto.jpg";
            break;
        case 'Ichigo':
            imgChar.innerHTML = "/images/characters/ichigo.png";
            break;
        case 'Eren Jaeger':
            imgChar.innerHTML = "/images/characters/eren_jaeger.jpg";
            break;
        case 'Deku':
            imgChar.innerHTML = "/images/characters/deku.png";
            break;
        case 'Yusuke':
            imgChar.innerHTML = "/images/characters/yusuke.png";
            break;
        case 'Saitama':
            imgChar.innerHTML = "/images/characters/saitama.png";
            break;
        case 'Jotaro Kujo':
            imgChar.innerHTML = "/images/characters/jotaro_kujo.jpg";
            break;
        case 'Meliodas':
            imgChar.innerHTML = "/images/characters/meliodas.png";
            break;
    }
}

let element = document.querySelector("button");

function generate (){
    let message = document.querySelector("h3");
    message.innerHTML = ultimateAnimeWarrior();
}
element.onclick = generate();