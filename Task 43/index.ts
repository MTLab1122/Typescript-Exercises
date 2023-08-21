const magicians: string[] = ['Khan', 'Jan' , 'Ali' , 'Nomi'];

function make_great(names: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const name of names) {
        greatMagicians.push("Great " + name);
    }
    return greatMagicians;
}

function show_magicians(names: string[]): void {
    for (const name of names) {
        console.log(name);
    }
}

const greatMagicians = make_great([...magicians]);
show_magicians(magicians);
show_magicians(greatMagicians);
