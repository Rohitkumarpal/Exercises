function range(start, end){

    let results = []

    for (let index = start; index <= end; index++) {

        results.push(index)
    
    }
    return results

}

function sum (arr){

    let sum  = 0

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sum += element
    }

    return sum;
}

function reverseArray(arr){

    reversed = []

    for (let index = arr.length-1; index >=0; index--) {

        const element = arr[index];

        reversed.push(element)
    }

    return reversed

} 

console.log("display range values ",range(1,10))

console.log('Sum of values', sum(range(1,10)))

console.log("Revered Array",reverseArray(range(10,20)))


