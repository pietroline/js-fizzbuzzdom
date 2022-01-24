
// definisco una variabile per semplificare la lettura del mio codice e le modifiche future
const mj_getElementById_container = document.getElementById("container");
const multiplo3 = "Fizz";
const multiplo5 = "Buzz";
const multiplo3_5 = "FizzBuzz";
let flag = NaN;

// chiedo all'utente quanti box di FizzBuzz vuole vedere
const numeroBox = parseInt(prompt("Quanti box FizzBuzz vuoi vedere?"));

    // verifico che l'utente abbia inserito un numero
    if(isNaN(numeroBox)){
        alert("Error! Numero box FrizzBuzz non valido!!")
    }else{
        for(let i=1; i<=numeroBox; i++){

            // console del numero dell'iterazione
            console.log(`Ciclo: ${i}`);
         
            // verifico se il numero è divisibile per 3 e/o 5 e setto la variabile flag in maniera appropriata 
            if(i % 3 == 0){
                flag = 3;
                                                                
                // Verifico se il numero i, già divisibile per 3, è anche divisibile per 5
                if(i % 5 == 0){
                    flag = 35;                                  
                }
        
            }else if(i % 5 == 0){
                flag = 5;
                                                                
            }else{
                // verifico se il numero della box, non divisibile ne per 3 ne per 5, è pari o dispari. Mi comporto di conseguenza, applicando un text color differente
                if(i % 2 == 0){
                    flag = null; //numero pari
                }else{
                    flag = NaN; //numero dispari
        
                }                                             
            }
        
            // utilizzo lo switch basato sul valore di flag, precedentemente impostato, al fine di appendere l' elemento stilizzato opportunamente nel DOM
            switch (flag){
                case 3: 
                    mj_getElementById_container.innerHTML = mj_getElementById_container.innerHTML + `<div class="box fizz"> ${multiplo3} </div>`;
                    break;
                case 5: 
                    mj_getElementById_container.innerHTML = mj_getElementById_container.innerHTML + `<div class="box buzz"> ${multiplo5} </div>`; 
                    break;
                case 35:  
                    mj_getElementById_container.innerHTML = mj_getElementById_container.innerHTML + `<div class="box fizz buzz"> ${multiplo3_5} </div>`; 
                    break;
                case null:
                    mj_getElementById_container.innerHTML = mj_getElementById_container.innerHTML + `<div class="box text_white"> ${i} </div>`;
                    break;
                default:
                    mj_getElementById_container.innerHTML = mj_getElementById_container.innerHTML + `<div class="box text_black"> ${i} </div>`; 
                    break;
            }
           
        }
    }


