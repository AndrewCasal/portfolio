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
let element = document.querySelector("button");
function generate (){
    let message = document.querySelector("h3");
    message.innerHTML = ultimateAnimeWarrior();
}
element.onclick = generate();

function charImage (){
    let imgChar = document.querySelector("character_img");
    switch (randChar) {
        case 'Goku':
            imgChar
            break;
        case 'Luffy':
            imgChar
            break;
        case 'Naruto':
            imgChar
            break;
        case 'Ichigo':
            imgChar
            break;
        case 'Eren Jaeger':
            imgChar
            break;
        case 'Deku':
            imgChar
            break;
        case 'Yusuke':
            imgChar
            break;
        case 'Saitama':
            imgChar
            break;
        case 'Jotaro Kujo':
            imgChar
            break;
        case 'Meliodas':
            imgChar
            break;
    }
}