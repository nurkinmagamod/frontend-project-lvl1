import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
const getUserName = () => readlineSync.question('May I have your name? ');
export default getUserName;
