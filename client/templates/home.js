Template.home.helpers({
  calCell: function() {
    return CALCELLS.find();
  },
  selectedNumber: function() {
    if (!! Session.get('clickedCell')) {
      var x = CALCELLS.findOne(Session.get('clickedCell'));
      return x.number;
    }
  }
})