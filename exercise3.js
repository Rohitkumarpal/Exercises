function repeatString(n,s,noOfSpace){
    let multiStr = "";
    for (let index = 1; index < n; index++) {

        if(index % 2 ==0){
            multiStr = ' '.repeat(noOfSpace)+s
            console.log(multiStr)
        }
        else{
            multiStr = s
            console.log(multiStr)
        }  
    }
}
let numberOfTimesRepeat = 8
let str = '####'
let noOfSpace = 1
repeatString(numberOfTimesRepeat,str,noOfSpace)