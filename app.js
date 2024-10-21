const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

let tool = teeth;
let action = cut;

// const landscaper = {
//     useTeethToCutGrass: function() {
//       return 'User can use teeth to cut grass';
//     }
//   };
//   console.log(landscaper.useTeethToCutGrass());

function useTeethToCutGrass() {
      return 'User can use teeth to cut grass';
    }

function useRustyScissorsToCutGrass() {
        return 'Landscaper App: user can use scissors to cut grass';
      }
  