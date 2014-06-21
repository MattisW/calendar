Template.calCellSingle.events({
  'click .calCell': function(e) {
    Session.set('clickedCell', this._id);
    console.log('clicked: ' + Session.get('clickedCell'));    
    Meteor.call('dayCheck', this._id);
  }
});

Template.calCellSingle.helpers({
  selected: function() {
    if (Session.get('clickedCell') === this._id) {
      return 'checked';
    }
  },
  checked: function() {
    if (!! CALCELLS.findOne(this._id).checked) {
      return 'checked'; 
    }
  }
})
