Template.home.helpers({
    images: function () {
        return Images.find({}, { sort: {uploadedAt: -1}})
    }

});