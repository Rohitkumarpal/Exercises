function checkeven(num) {

    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else {
        return checkeven(num - 2);
    }  
  }
  
  console.log(checkeven(24));