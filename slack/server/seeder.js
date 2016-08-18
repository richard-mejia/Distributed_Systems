Meteor.startup(function() {

  Factory.define('message', Messages, {
    text: function() {
    	return Fake.sentence();
    }
  });
});
