function shapeArea(n) {
    var middle = (n * 2) - 1;
    var result = 0;

    for (var i = 1; i < middle; i += 2) {
        result += i;
    }

    for (i; i > 0; i -= 2) {
        result += i;
    }

    return result;
}