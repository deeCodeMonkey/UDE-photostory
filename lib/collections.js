Images = new FS.Collection('Imges', {
    stores: [new FS.Store.GridFS('Images')],
    //tailor image uploads
    filter: {
        allow: {
            //image is any extension
            contentTypes: ['image/*']
        },
        onInvalid: function (message) {
            FlashMessage.sendError(message);
        }
    }
});

Images.allow({
    insert: function () {
        return true;
    }, 
    update: function () {
        return true;
    },
    download: function () {
        return true;
    }

});

//attach fields to the image
ImageInfo = new Mongo.Collection('imageinfo');