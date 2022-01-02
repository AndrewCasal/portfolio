let char = ['Goku', 'Luffy', 'Naruto', 'Ichigo', 'Eren Jaeger', 'Deku', 'Yusuke', 'Saitama', 'Jotaro Kujo', 'Meliodas'];
let item = ['Dragon Balls', 'Devil Fruit', 'Kunai', 'Substitute Shinigami Badge', 'Omni-Directional Mobility Gear', 'Grenade Bracer', 'Spirit Sword', "Child Emporer's Backpack", 'Star Platinum', 'Spirit Spear Chastiefol' ];
let power = ['Super Saiyan', 'Haki', 'Biguu Mode', 'Final Hollowification', 'Attack Titan Form', 'One for All', 'Spirit Gun', 'Destroy with One Punch', 'Hamon', 'Sunshine'];

const randNumberGen = () => {
    return Math.floor(Math.random() * 10) - 1
}
const randChar = char[randNumberGen()];
const randItem = item[randNumberGen()];
const randPower = power[randNumberGen()];

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
        case 'Super Saiyan':
            imgPower.src = "./images/powers/super_saiyan.jpg";
            break;
        case 'Haki':
            imgPower.src = "./images/powers/haki.jpg";
            break;
        case 'Biguu Mode':
            imgPower.src = "./images/powers/bijuu_mode.jpg";
            break;
        case 'Final Hollowification':
            imgPower.src = "./images/powers/final_hollowification.jpg";
            break;
        case 'Attack Titan Form':
            imgPower.src = "./images/powers/attack_titan.png";
            break;
        case 'One for All':
            imgPower.src = "./images/powers/one_for_all.jpg";
            break;
        case 'Spirit Gun':
            imgPower.src = "./images/powers/spirit_gun.png";
            break;
        case 'Destroy with One Punch':
            imgPower.src = "./images/powers/one_punch.jpg";
            break;
        case 'Hamon':
            imgPower.src = "./images/powers/hamon.png";
            break;
        case 'Sunshine':
            imgPower.src = "./images/powers/sunshine.jpg";
            break;
    }
}

function itemImage (){
    let imgItem = document.getElementById("item_img");
    switch (randItem) {
        case 'Dragon Balls':
            imgPower.src = "./images/items/dragon_balls.png";
            break;
        case 'Devil Fruit':
            imgPower.src = "./images/items/devil_fruit.png";
            break;
        case 'Kunai':
            imgPower.src = "./images/items/kunai.png";
            break;
        case 'Substitute Shinigami Badge':
            imgPower.src = "./images/items/shinigami_badge.png";
            break;
        case 'Omni-Directional Mobility Gear':
            imgPower.src = "./images/items/mobility_gear.png";
            break;
        case 'Grenade Bracer':
            imgPower.src = "./images/items/grenade_bracer.png";
            break;
        case 'Spirit Sword':
            imgPower.src = "./images/items/spirit_sword.png";
            break;
        case "Child Emporer's Backpack":
            imgPower.src = "./images/items/backpack.jpg";
            break;
        case 'Star Platinum':
            imgPower.src = "./images/items/star_platinum.jpg";
            break;
        case 'Spirit Spear Chastiefol':
            imgPower.src = "./images/items/chastiefol.png";
            break;
    }
}

let element = document.getElementById("button");

function generate (){
    let message = document.getElementById("resultText");
    message.innerHTML = `Your ultimate anime warrier is ${randChar} with the use of ${randItem} and the ability of ${randPower}!`
    charImage();
    powerImage();
    itemImage();
    element.innerHTML = 'Generate Another!';
}
element.onclick = generate();