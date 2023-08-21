"use strict";
const magicians = ['Khan', 'Jan', 'Ali', 'Nomi'];
function make_great(names) {
    const greatMagicians = [];
    for (const name of names) {
        greatMagicians.push("Great " + name);
    }
    return greatMagicians;
}
function show_magicians(names) {
    for (const name of names) {
        console.log(name);
    }
}
const greatMagicians = make_great([...magicians]);
show_magicians(magicians);
show_magicians(greatMagicians);
