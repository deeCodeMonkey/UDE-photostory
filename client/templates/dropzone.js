
Template.dropzone.events({
    // Catch the dropped event
    'dropped #dropzone': function (event) {
        console.log('files dropped');

        // If using the cfs api
        //inserts each file dragged over
        FS.Utility.eachFile(event, function (file) {
            var newFile = new FS.File(file);
            Images.insert(newFile, function (err, res) {
                if (err) {
                    FlashMessages.sendError('There was an issue with the upload.');
                } else {
                    //to get an id for an image after successful upload
                    Session.set('imageId', res._id);
                    FlashMessages.sendSuccess('Image uploaded.');

                    Modal.show('add_info');
                    
                }
            });
        });
    }
});