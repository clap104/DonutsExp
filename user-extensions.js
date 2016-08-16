Selenium.prototype.continueFromRow = function( row_num ){
    if(row_num == undefined || row_num == null || row_num < 0) {
        throw new Error( "Invalid row_num specified." );
    }
    testCase.debugContext.debugIndex = row_num;
}

// do nothing. simple label
Selenium.prototype.doLabel = function(){};

Selenium.prototype.doGotolabel = function( label ){
    if( undefined == gotoLabels[label] ) {
        throw new Error( "Specified label '" + label + "' is not found." );
    }
    this.continueFromRow( gotoLabels[ label ] );
};

Selenium.prototype.doGoto = Selenium.prototype.doGotolabel;

Selenium.prototype.doGotoIf = function( condition, label ){
    if( eval(condition) ) this.doGotolabel( label );
}

Selenium.prototype.doWhile = function( condition ){
    if( !eval(condition) ) {
        var last_row = testCase.debugContext.debugIndex;
        var end_while_row = whileLabels.whiles[ last_row ];
        if( undefined == end_while_row ) throw new Error( "Corresponding 'endWhile' is not found." );
        this.continueFromRow( end_while_row );
    }
}

Selenium.prototype.doEndWhile = function(){
    var last_row = testCase.debugContext.debugIndex;
    var while_row = whileLabels.ends[ last_row ] - 1;
    if( undefined == while_row ) throw new Error( "Corresponding 'While' is not found." );
    this.continueFromRow( while_row );
}

//----------------- add by linh.vu
Selenium.prototype.doTypeRepeated = function(locator, text) {
    // All locator-strategies are automatically handled by "findElement"
    var element = this.page().findElement(locator);

    // Create the text to type
    var valueToType = text + "__" +text;

    // Replace the element text with the new text
    this.page().replaceText(element, valueToType);
};
//--------------------------------
Selenium.prototype.doTypeRandom = function randomString(locator,string_length) {

    var element = this.page().findElement(locator);

        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        //return randomstring;
        var valueToType ="test"+randomstring;

         this.page().replaceText(element, valueToType);
    }
 //-------------------------------
 Selenium.prototype.doTypeRandomEmail = function randomString(locator,string_length) {

    var element = this.page().findElement(locator);

        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        //return randomstring;
        var valueToType =randomstring+"@yopmail.com";

         this.page().replaceText(element, valueToType);
    }

 //-------------------------------
 Selenium.prototype.doTypeRandomNumber = function randomString(locator,string_length) {

    var element = this.page().findElement(locator);

        var chars1 = "123456789";
    var chars2 = "0123456789";
        var randomstring1 = '';
        var randomstring2 = '';
        for (var i=0; i<1; i++) {
            var rnum1 = Math.floor(Math.random() * chars1.length);
            randomstring1 += chars1.substring(rnum1,rnum1+1);
        }

    for (var j=0; j<string_length-1; j++) {
            var rnum2 = Math.floor(Math.random() * chars2.length);
            randomstring2 += chars2.substring(rnum2,rnum2+1);
        }
        //return randomstring;
        var valueToType =randomstring1 + randomstring2;

         this.page().replaceText(element, valueToType);
    }
