

const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);



let money = 0;
let tool = 'teeth';
let earnings = 1;
let actualIndex = 0;
const tools = [
  { name: 'Rusty Scissors', cost: 5, earnings: 5 },
  { name: 'Old-Timey Push Lawnmower', cost: 25, earnings: 50 },
  { name: 'Fancy Battery-Powered Lawnmower', cost: 250, earnings: 100 },
  { name: 'Team of Starving Students', cost: 500, earnings: 250 }
];

const checkTools = () => {
  for (let i = 0; i < tools.length; i++) {    
    if (money >= tools[i].cost) {
      console.log(` You can buy ${tools[i].name} for $${tools[i].cost}. It will earn you $${tools[i].earnings} per day.`);
      actualIndex = i;
    }
  }
};

const cutGrass = () => {
  money += earnings;
  console.log(`You used your ${tool} to cut grass and earned $${earnings}. You now have $${money}.`);
};

while (money < 1000 || tool !== 'Team of Starving Students') {
  const action = prompt('Enter command (cut/check): ').toLowerCase();
  if (action === 'cut') {
    cutGrass();
  } else if (action === 'check') {
    checkTools();
    const upgrade = prompt('Do you want to buy a new tool? (yes/no): ').toLowerCase();
    if (upgrade === 'yes') {
      for (let i = actualIndex; i < tools.length; i++) {
        if (money >= tools[i].cost ) {
          console.log(`in if condition and money is ${money} and i is ${i} and tools.cost is ${tools[i].cost}`)            
          tool = tools[i].name;
          earnings = tools[i].earnings;
          money -= tools[i].cost;
          console.log(`You bought ${tools[i].name}. You now earn $${tools[i].earnings} per day and have $${money} left.`);
          break;
        }
      }
    }
  } else {
    console.log('Invalid command. Please enter "cut" or "check".');
  }
}

console.log('Congratulations! You have $1000 and a Team of Starving Students. You win the game!');