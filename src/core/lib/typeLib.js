export default {

    sexType (input) {
        let returnVal = "";

        if(input === "2")
            returnVal = '여';
        else if (input === "1")
            returnVal = '남';
    
        return returnVal;
    },

    memberType (input) {
        let returnVal = "";

        if(input === 'PERSON')
            returnVal = "개인";
        else if (input === 'COMPANY')
            returnVal = "사업자";

        return returnVal;
    }
    
}