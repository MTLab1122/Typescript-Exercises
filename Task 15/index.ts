let guestsNames:string[]=['Ali', 'Khan', 'Jan', 'Shakir'];

const a:string='Shakir';
    console.log(`${a} can't come to the dinner`);

const b:string=a.replace('Shakir' , 'Abdullah\nYou are invted to dinner.');
    console.log(b);
guestsNames.pop();

for(let c of guestsNames){
    console.log(`${c}\nYou are invited to dinner`);
}

