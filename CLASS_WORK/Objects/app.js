let  myJSON = {
    name:"noreen",
     age:25,
     education: 'BS-CS'
    };
    //traverse
    for ( let name in myJSON){
        console.log(name+ ": "+ myJSON[name] )
    }
//access
console.log(myJSON.age);
//insertion
myJSON.location= 'karachi';

console.log( myJSON) 
//updation
myJSON.location= 'lahore';
console.log( myJSON);
//delete
delete myJSON.location;
console.log( myJSON);

//searching
for ( let name in myJSON){
    if (name === 'age'){
        console.log('true')
    } else{
        console.log('false')
    }
}