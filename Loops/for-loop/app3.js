// Work on the problem above to dynamically
//  print the name of each animal and prepend
//   it with ‘this is’ conditionally. Print 
//   ‘something else’ if the name doesn’t equal any 
//   of the names in the list.

var animals = ['cat', 'rabbit', 'pigeon','parrot', 'goldfish'];
// let pet = 'horse'
for(var i=0; i<animals.length; i++) {
    // if(animals.includes(pet))
    if(animals[i] == animals[i]) {
        console.log( "This is:" +animals[i]);
    }
    else{
        console.log("Something else")
    }
} 