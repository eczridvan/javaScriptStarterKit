function add(...numbers){
    
    for (let i = 0; i < numbers.length; i++) { 
        let sayac = 0;
        for (let j =2; j<numbers[i]; j++) {
            if(numbers[i] % j == 0) {
                sayac++;
            }
        }
        if(sayac ==0){
            console.log(numbers[i] + " asal sayıdır." )
        } else {
            console.log(numbers[i] + " asal sayı değildir.")
        }
    }
    
}

//add(5,9,8,7,6,55,41,47,77)


 function friendsNumbers(sayi1, sayi2){
     let total = 0;
     for (let i = 1; i < sayi1; i++){
         if(sayi1 % i == 0){
             total = total+ i
         }
     }
     let total2 = 0;  
     for (let i = 1; i < sayi2; i++){
        if(sayi2 % i == 0){
            total2 = total2+ i
        }
    }
      if(total == sayi2 & total2 == sayi1){
          console.log("Bu sayılar arkadaş sayılardır")
      } else {
        console.log("Bu sayılar arkadaş sayı değildir")
      }
     

 }

 //friendsNumbers(1184,1210)

 function perfectNumber(number){

     let total = 0;
     for(let i = 1; i <= number; i++) {
         if(number % i == 0){
             total = total + i;
         }   
     }
     console.log(total);
     
     
 }
 
 //perfectNumber(28)

 function primeNumber(number){
     let total = 0;
     for(let i = 2; i <= number; i++) {
         if(number % i == 0){
           total++
         }
         else {
             
         }
     }
     console.log(total);
     
 }
 primeNumber(10)

