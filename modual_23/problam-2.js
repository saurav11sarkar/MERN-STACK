function matchFinder(str1,str2){
    if (typeof str1 !== 'string' || typeof str2 !== 'string'){
        return "Not a string, plese curcation!";
    }else{
        let string1 = str1.toLowerCase();
        let string2 = str2.toLowerCase();
        return string1.includes(string2);
    } 
}

console.log(matchFinder('john deo',1));
console.log(matchFinder('Javascript','Code'));
console.log(matchFinder('Peter Parker','pet'));