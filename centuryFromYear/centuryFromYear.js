function centuryFromYear(year) {
    var count = 1;
    for (var i = 100; i < year; i += 100) {
        count += 1;
    }

    return count;
}