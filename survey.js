const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What's your name? Nicknames are also acceptable :) ",
  (answer1) => {
    rl.question("What's an activity you like doing? ", (answer2) => {
      rl.question("What do you listen to while doing that? ", (answer3) => {
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ",(answer4) => {
          rl.question("What's your favourite thing to eat for that meal? ",(answer5) => {
            console.log(`Thank you for your valuable feedback: \n Name: ${answer1} \n Favorite sport: ${answer2} \n Favorite music: ${answer3} \n Favorite meal: ${answer4} \n Favorite food:  ${answer5}`);
            rl.close();
        });           
      });
    });
  });
});
