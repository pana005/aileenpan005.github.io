for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.
        if (i < 3) {
            console.log("pink");
            document.write("<div class='box pink'></div>");
        }else if(i > 6){
            console.log("yellow");
            document.write("<div class='box yellow'></div>");
        }else {
            console.log("turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}
