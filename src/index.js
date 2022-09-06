/** 1. simple */
// import foo from './foo';

// foo();

/** 2. import and dont use */
// import foo from './foo';
// import bar from './bar';

// foo();

/** 3. import and use */
// import foo from './foo';
// import bar from './bar';

// foo();
// bar();

/** 3.1 guess what happen? */
// import foo from './foo';
// import bar from './bar';

// if (Math.random() > 0.5) {
//   foo();
// }
// bar();

/** 4. css? */
// import './style.css';

/** 5. image in css */

/** 6. babel */
// https://caniuse.com/mdn-javascript_operators_optional_chaining
// const dog1 = {name: 'Alice'};
// dog1.bark = function () {return 'woof'}
// const dog2 = {};

// /** 6.1 babel */
// console.log(dog1.name ?? 'Bob')
// console.log(dog1.bark?.());

// console.log(dog2.name ?? 'Bob')
// console.log(dog2.bark?.());

/** 7. loader */
// const woof = 🐶;
// const meow = 🐱;
// console.log(woof);
// console.log(meow);

// const fight = 🐶 + "!@#!#!@#" + 🐱;
// console.log(fight);

/** 8. resolver */
// import woof from '🐶/woof.js'
// import meow from './meow'
// woof();
// meow();

/** 9. env plugin */
// console.log(process.env.HELLO_WORLD);

/** Exercises A. */
// import data from './data.yaml';
// console.log(data);

/** Exercises B. */
// const Component = <div />;
