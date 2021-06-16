// You are given an array of pet animals like 
// [‘cat’, ‘rabbit’, ‘pigeon’, ‘parrot’, ‘goldfish’].
//  You need to loop over it and then if you encounter
//   the name of rabbit, print out ‘this is rabbit’. Wh
// don’t get the name of a rabbit, print ‘this is not a rabbit’. 
// let animals = ["cat", "rabbit", "pigeon", "parrot", "goldfish"];

// var animals = ['cat', 'rabbit', 'pigeon','parrot', 'goldfish'];

// for(var i=0; i<animals.length; i++) {
//     var mammals = new Array("cat","dog","human","whale","seal");
//     var animalString = "";
//     for (var i = 0; i < mammals. length; i++) {
//        animalString += mammals[i] + " ";
//     }
//     alert(animalString);
// }

let petAnimals = ["cat", "rabbit", "pigeon", "parrot", "goldfish"];
for (let i = 0; i < petAnimals.length; i++) {
    if (petAnimals[i] == "rabbit") {
        console.log("This is " +petAnimals[i]);
    }
    else {
        console.log("This is not a rabbit");
    }

}

// if(animals.name = 'monkey') {
    //     console.log("This is Rabbit")
	// }
    // else{
    //     console.log("This is not a rabbit")
    // }
// const animals = [
//     {name: 'cat'},
//     {name: 'rabbit'},
//     {name: 'pigeon'}
// ];

// const getAnimal = animals.find(animals => animals.name === 'rabbit');

// console.log(getAnimal);
