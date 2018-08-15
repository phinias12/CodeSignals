function adjacentElementsProduct(inputArray) {
    var max = inputArray[0] * inputArray[1];
    var tmp;
    
    for (var i = 1; i < inputArray.length;i++){
        tmp = inputArray[i] * inputArray[i + 1];
        if(tmp > max){
            max = tmp;
        }
    }
    
    return max;
}
