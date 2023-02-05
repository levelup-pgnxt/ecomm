// console.log('iniciando product');

const regexString = new RegExp(/[a-z]/i);
const regexNumber = new RegExp(/\d/);
const regexSpecial = new RegExp(/[$%#&*!?\.+-]/);
const senha = 'Pagonext23%23';

const hasString = regexString.test(senha);
const hasNumber = regexNumber.test(senha);
const hasSpecial = regexSpecial.test(senha);

const validateSenha = hasString && hasNumber && hasSpecial;

console.log("hasString ", hasString);
console.log("hasNumber ", hasNumber);
console.log("hasSpecial ", hasSpecial);
console.log("ValidateSenha ", validateSenha);

