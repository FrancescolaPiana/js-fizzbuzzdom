const buzz = ('buzz')
const fizz = ('fizz')
const fizzbuzz = ('fizzbuzz')
// log che sustituiranno il numero 

for (let count = 1; count < 101; count++) {
    if (count % 5 == 0 && count % 3 == 0) {
        console.log(fizzbuzz);
    }
    // if che determina se multiplo di 5 e 3 contemporaneamente

    else if (count % 5 == 0){
        console.log(fizz);
    }
    // if che determina se multiplo di 5
    
    else if (count % 3 == 0){
        console.log(buzz);
    }
   // if che determina se multiplo di 3

    else{
        console.log(count);
    }
    // else che altrimenti mostrerà semplicemente il numero contato
}