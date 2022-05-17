function flattenArray(arr){

    let results = arr.reduce((acc, item) => {
        console.log('item',acc,item)
        return acc.concat(item); 
  
    });
    return results
}
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log('flattenArray',flattenArray(arrays))


function every(arr, test){

        for (let element of arr) {
          value = test(element);
          if(!value){
              break;

          }
        }
        return value;
      }
      
console.log("check every value of array ",every([1, 2, 11, 4], n => n < 10));