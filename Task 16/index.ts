let guestsNames:string[]=['Ali', 'Khan', 'Jan', 'Abdullah'];

    console.log(`We just found a big dinner table`);

guestsNames.unshift('Shakir');
guestsNames.push('Mustafa');
guestsNames.splice(2,0 , 'Talha');

for(let a of guestsNames)
    console.log(`Dear ${a},\n You are invited to dinner`);
