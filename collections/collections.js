CALCELLS = new Meteor.Collection('calCells');

Meteor.methods({
  dayCheck: function(calCellId) {
    if (CALCELLS.findOne(calCellId).checked === false) {
      CALCELLS.update(calCellId, {
        $addToSet: { days: this.number },
        $set: { checked: true }
      })
    } else {
      CALCELLS.update(calCellId, {
        $pull: { days: this.number },
        $set: { checked: false }
      })
    }
  },
     
  dayComplete: function(id, calCell) {
      Goals.update({_id: this._id}, {
        $set: { "calCells.$.checked" : true } 
      });
  }
})