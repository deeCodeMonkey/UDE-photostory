//user has to be logged in and can only delete their own
Template.image.helpers({
    'isOwn': function (imageId) {
        var owner = ImageInfo.findOne({ imageId: imageId }).userId;
        if (owner == Meteor.userId()) {
            return true
        } else {
            return false;
        }
    }
});


Template.image.events({
    'click .remove-image': function () {
        if (confirm ('Are you sure?')){
            //Images.remove(this._id);

            ////get if of image in order to delete
            //var ImageInfoId = ImageInfo.findOne({ imageId: this._id })._id;
            //ImageInfo.remove(ImageInfoId);
            Meteor.call('deleteImage', this._id);
            FlashMessages.sendSuccess('Image removed.');
        }
        return false;
    }
});