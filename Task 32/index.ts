const current_users: string[] = ['john', 'mary', 'alice', 'alex', 'emma'];
const new_users: string[] = ['Alice', 'joe', 'emily', 'John', 'michael'];

for (const new_username of new_users) {
    const lowercase_new_username = new_username.toLowerCase();

    if (current_users.includes(lowercase_new_username)) {
        console.log(`The username "${new_username}" is not available. Please enter a new username.`);
    } else {
        console.log(`The username "${new_username}" is available.`);
    }
}