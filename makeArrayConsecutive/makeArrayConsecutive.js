function makeArrayConsecutive2(statues) {
    //Used to put everything in order
    var ordered = statues.sort(function (a, b) { return a - b; });

    var max = ordered[ordered.length - 1];
    var min = ordered[0];
    var result = 0;
    var tmp;

    for (var i = min; i < max; i++) {
        tmp = 0;
        for (var j = 0; j < ordered.length; j++) {
            if (i == ordered[j]) {
                tmp += 1;
            }
        }
        if (tmp === 0) {
            result++;
        }
    }

    return result;
}
