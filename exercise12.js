class Group {
    // Your code here.

    data = []
    
    constructor(){

    }



    from(arr){

        for (let index = arr[0]; index <=arr[1]; index++) {
            this.data.push(index)
            
        }

    }

    has(element){

     if (this.data.includes(element)){
         return true
     }
     else{
         return false
     }

    }

    add(){

    }

    delete(){

    }


  }

let group = Group.from([10, 20]);
console.log(group.has(10));

 