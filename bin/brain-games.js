#!/usr/bin/env node
import getUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const user = getUserName();
console.log(user);
