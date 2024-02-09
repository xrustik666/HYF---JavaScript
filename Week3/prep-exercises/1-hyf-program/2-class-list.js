import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */

const getModuleName = (className) => {
  for (let i = 0; i < classes.length; i++) {
    if ('currentModule' in classes[i] && classes[i].name === className) {
      return classes[i].currentModule;
    }
  }

  return 'There is no current module in this class';
}

//console.log(getModuleName('class34'));

const getPeopleOfClass = (className) => {
  let activePeople = [];

  
  for (let i = 0; i < mentors.length; i++) {
    if (mentors[i].nowTeaching === getModuleName(className)) {
      activePeople.push(mentors[i].name);
    }
  }

  for (let i = 0; i <students.length; i++) {
    if (students[i].class === className) {
      activePeople.push(students[i].name);
    }
  }

  return activePeople;
};

// You can uncomment out this line to try your function
console.log(getPeopleOfClass('class34'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
  // TODO complete this function
};
// You can uncomment out this line to try your function
// console.log(getActiveClasses());
