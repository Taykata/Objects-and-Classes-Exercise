function inventory(input) {

    let hero = [];
    let buff = {};

    for (let heroInfo of input) {
        let [name, level, items] = heroInfo.split(' / ');
        buff.Hero = name;
        buff.level = level;
        buff.items = items;
        hero.push(buff);
        buff = {};
    }

    let sorted = hero.sort((a, b) => a.level - b.level);

    for (let obj of sorted) {
        console.log(`Hero: ${obj.Hero}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items}`);
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);