function getCountOfString(str, char) {

    let count = 0;
    for (let index = 0; index < str.length; index++) {
        if(char == str[index]){
            count +=1
            
        } 
    }
    return count

}

console.log(getCountOfString("Hello","H"))