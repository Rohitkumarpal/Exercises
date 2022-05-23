for (let index = 0; index < 101; index++) {

    if (index %3 == 0  && index % 5 ==0) {
        console.log('FizzBuzz', index)
    }
    
    else if(index %3 ==0){
        console.log("Fizz", index )
    }

    else if (index % 5 ){
        console.log('Buzz', index)
    }
}