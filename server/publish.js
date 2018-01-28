Meteor.publish('images', function () {
    return Images.find();
});

Meteor.publish('imageInfo', function () {
    return ImageInfo.find();
});