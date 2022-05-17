class Vec {
    constructor(x,y) {
      this.x = x;
      this.y = y;
    }

    plus(){

        return Math.sqrt(this.x*this.x + this.y+this.y)

    }

    minus(){
       return  Math.sqrt(this.x*this.x + this.y+this.y)
    }
 
  }
  
  let newVec = new Vec(1,2);

  console.log(newVec.plus())
 