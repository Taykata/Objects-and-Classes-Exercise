function employees(arr) {

    for (let i = 0; i < arr.length; i++) {
        let person = {
            name: arr[i],
            personalNum: arr[i].length
        }
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNum}`);
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);