// console.log('iniciando product');

const regexString = new RegExp(/[a-z]/i);
const regexNumber = new RegExp(/\d/);
const regexSpecial = new RegExp(/[$%#@\.+-]/);
const senha = '12a3456';

const hasString = regexString.test(senha);
const hasNumber = regexNumber.test(senha);
const hasSpecial = regexSpecial.test(senha);

const validateSenha = hasString && hasNumber && hasSpecial;

console.log();
