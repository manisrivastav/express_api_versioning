

module.exports = {

    processer: (newdata) => {

        let globalObj = {};
        var result = newdata.match(/[^\d]+|\d+/g); // Regex split names and numbers 

        Object.assign(globalObj, result);
        let gloLength = Object.keys(globalObj).length - 1;
        // console.log(gloLength);
        delete globalObj[gloLength]; //assign result object to global object after removing lastindex from result. 
        let resLength = result.length - 1;

        function checkStr(str) { //function to split repeated numbers [ '0000', '000', '999' ] 
            return str.match(/(\S)(\1{2,})/g);
        }
        var results = checkStr(result[resLength])

        results.forEach((result) => {
            objlength = Object.keys(globalObj).length;
            for (let i = objlength; i >= objlength; i = globalObj.length + 1) {
                globalObj[objlength] = result //add repeated numbers to global object
            }
        })

        function find_unique_characters(str) { //removes duplicates 
            var unique = '';
            for (var i = 0; i < str.length; i++) {
                if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
                    unique += str[i];
                }
            }

            objlength = Object.keys(globalObj).length;
            for (let i = objlength; i >= objlength; i = globalObj.length + 1) {
                globalObj[objlength] = unique
            }

            return unique;
        }
        find_unique_characters(result[resLength]);

        return globalObj;
        //console.log("please execute", globalObj);

    }
}
