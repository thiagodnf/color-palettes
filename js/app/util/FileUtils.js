var FileUtils = {
    readTextFile: function(inputId, callback){

        console.log("Reading Text file...");

        var files = document.getElementById(inputId).files;

        if (files.length == 0) {
            return;
        }

        var file = files[0];

        var reader = new FileReader();

        // If we use onloadend, we need to check the readyState.
        reader.onloadend = function(evt) {
            if (evt.target.readyState == FileReader.DONE) { // DONE == 2
                if(callback) callback(evt.target.result)
            };
        }

        var blob = file.slice(0, file.size);

        reader.readAsText(blob, "UTF-8");
    },
    readImageFile: function(inputId, callback){

        console.log("Reading Image file...");

        var files = document.getElementById(inputId).files;

        if (files.length == 0) {
            return;
        }

        var file = files[0];

        var reader = new FileReader();

        // If we use onloadend, we need to check the readyState.
        reader.onloadend = function(evt) {
            if (evt.target.readyState == FileReader.DONE) { // DONE == 2
                if(callback) callback(reader.result)
            };
        }

        reader.readAsDataURL(file);
    }

}
