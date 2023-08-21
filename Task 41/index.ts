/*
Make a array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

const magician_names:string[]=['Khan', 'Jan' , 'Ali' , 'Nomi'];

function show_magicians(magicians:string[]):void {
    for(const magician of magicians)
    console.log(magician);
}

show_magicians(magician_names);