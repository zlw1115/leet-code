function foo(matrix) {
    var i = 0
    var j = 0
    var length = matrix.length
    for (j = 0; j < length; j++) {
        for (i = 1; i <= length; i++) {
            if (!matrix[j].includes(i)) {
                return false
            }
        }
    }

    var rematrix = []
    var tmpitem = []
    for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
            tmpitem.push(matrix[j][i])
        }
        rematrix.push(tmpitem)
        tmpitem = []
    }
    for (j = 0; j < length; j++) {
        for (i = 1; i <= length; i++) {
            if (!rematrix[j].includes(i)) {
                return false
            }
        }
    }
    return true
}
