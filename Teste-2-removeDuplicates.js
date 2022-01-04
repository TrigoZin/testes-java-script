const args = ["g", "g", "y", "c", "c", "c", "q", "c", "y", "y"];
console.log(removeDuplicates(args));

function removeDuplicates(args) {
    const newArray = [];

    args.forEach(element => {
        if (newArray.length == 0) {
            newArray.push(element);
        } else {
            if (element != newArray[newArray.length - 1]) {
                newArray.push(element);
            }
        }
    });

    return newArray;
}