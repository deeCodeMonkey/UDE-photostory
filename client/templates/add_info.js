Template.add_info.events({
    'submit .add-image-info': function (event) {
        var imageId = Session.get('imageId');

        var title = event.target.title.value;
        var story = event.target.story.value;

        try {

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
            Modal.hide('add_info');
            FlashMessages.sendSuccess('Image Info Added.');

        } catch (exception) {
            console.log(exception);
        }
        return false;
    }
});