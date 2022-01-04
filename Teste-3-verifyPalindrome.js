const args = ["arara", "jabuticaba", "asa", "caminhao", "aba", "abacad"];
console.log(verifyPalindromes(args));

function verifyPalindromes(args) {
    const newArray = [];

    args.forEach(element => {
        let finalWord = "";
        var i = element.length;
        while(i--){
            finalWord += element.charAt(i);
        }
        if(finalWord === element){
            newArray.push(true);
        } else {
            newArray.push(false);
        }
    });
    
    return newArray;
}