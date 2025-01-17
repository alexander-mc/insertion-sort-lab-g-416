function findMinAndRemove(array){
    let min = array[0]
    let idx = 0

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            idx = i
        }
    }

    array.splice(idx, 1)
    return min
}

function insertionSort(array){
    let newArray = [];
    while (array.length !== 0) {
        newArray.push(findMinAndRemove(array))
    }
    return newArray;
}
