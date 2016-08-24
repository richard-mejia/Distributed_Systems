Meteor.startup(function() {

  Meteor.users.remove({});
  Accounts.createUser({
    username: "mario",
    email: "mario@gmail.com",
    password: "123456"
  });

  Factory.define('message', Messages, {
    text: function() {
    	return Fake.sentence();
    },
    user: Meteor.users.findOne()._id,
    timestamp: Date.now()
  });

  //Messages.remove({});
});