/* 
Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function make_shirt(size:string = 'Large' , message:string = '"I love Typescript".'):void {
    console.log(`The ${size} shirt will be printed with the massage ${message}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small' , 'Hello Pakistan');
