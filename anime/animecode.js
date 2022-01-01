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
    let imgChar = document.getElementById("character_img");
    switch (randChar) {
        case 'Goku':
            imgChar.src = "./images/characters/goku.jpg";
            break;
        case 'Luffy':
            imgChar.src = "./images/characters/luffy.png";
            break;
        case 'Naruto':
            imgChar.src = "./images/characters/naruto.jpg";
            break;
        case 'Ichigo':
            imgChar.src = "./images/characters/ichigo.png";
            break;
        case 'Eren Jaeger':
            imgChar.src = "./images/characters/eren_jaeger.jpg";
            break;
        case 'Deku':
            imgChar.src = "./images/characters/deku.png";
            break;
        case 'Yusuke':
            imgChar.src = "./images/characters/yusuke.png";
            break;
        case 'Saitama':
            imgChar.src = "./images/characters/saitama.png";
            break;
        case 'Jotaro Kujo':
            imgChar.src = "./images/characters/jotaro_kujo.jpg";
            break;
        case 'Meliodas':
            imgChar.src = "./images/characters/meliodas.png";
            break;
    }
}

function powerImage (){
    let imgPower = document.getElementById("power_img");
    switch (randPower) {
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
    }
}

function itemImage (){
    let imgItem = document.getElementById("item_img");
    switch (randPower) {
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
        case :
            imgPower.src = "";
            break;
    }
}

let element = document.querySelector("button");

function generate (){
    let message = document.querySelector("h3");
    message.innerHTML = ultimateAnimeWarrior();
    charImage();
}
element.onclick = generate();