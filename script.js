/*obtaining elements from the html dom*/
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl= document.getElementById('clipboard');

const randomFunc ={
    lower: getRandomLower,
    upper:getRandomUpper,
    number: getRandomNumber,
    symbol:getRandomSymbol
}
//create an listener to the clibboard element click,
//whenever the user click on it, use navigator function to copy the
//password
 clipboardEl.addEventListener('click', ()=>{
    const password = resultEl.innerText;
    if(!password){
        return;
    }
    navigator.clipboard.writeText(password);
    alert('Password was copied to the cliboard!');

 })

 generateEl.addEventListener('click', ()=>{
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

 })

 //function to generate the password:
 function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item=>Object.values(item)[0]);

    //verify if a least ones of the checkbox is checked:
        if(typesCount===0){
            return '';
        }

        for(let index = 0; index < length; index+=typesCount){
            typesArray.forEach(type =>{
                const funcName = Object.keys(type)[0]
                generatedPassword +=randomFunc[funcName]()
            })
        }
        const finalPassword = generatedPassword.slice(0, length)
        return finalPassword;
 }

 function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

 }

 function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }

 function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }

 function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
 }












