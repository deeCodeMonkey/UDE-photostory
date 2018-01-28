Meteor.methods({
    addImageInfo: function (imageId, title, story) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not Authroized.');
        }
        ImageInfo.insert({
            title,
            story,
            imageId,
            imageUrl: '/cfs/files/Images/' + imageId,
            userId: Meteor.userId(),
            //twitter handle
            username: Meteor.user().profile.name,
            createdAt: new Date()
        });
    },
                
    deleteImage: function (imageId) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not Authroized.');
        }
        Images.remove(imageId);

        //get if of image in order to delete
        var ImageInfoId = ImageInfo.findOne({ imageId: imageId })._id;
        ImageInfo.remove(ImageInfoId);
    }
});