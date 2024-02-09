import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  const jsMentors = [];
  for (let i = 0; i < mentors.length; i++) {
    if (mentors[i].canTeach.includes(moduleName)) {
      jsMentors.push(mentors[i].name);
    }
  }

  return jsMentors;
};

// You can uncomment out this line to try your function
console.log(possibleMentorsForModule('using-apis'));


/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  const randMentor = Math.floor(Math.random() * (possibleMentorsForModule(moduleName).length));
  const possibleMentors = possibleMentorsForModule(moduleName);

  return possibleMentors[randMentor];
};

// You can uncomment out this line to try your function
for (let i = 0; i < 20; i++) {
  console.log(findMentorForModule('using-apis'));
}
