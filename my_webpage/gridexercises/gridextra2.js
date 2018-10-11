
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.
        if (i == j) {
            console.log('0x1F4A9');
            document.write("<div class='box avocado'></div>");
        }else {
            console.log("turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}
