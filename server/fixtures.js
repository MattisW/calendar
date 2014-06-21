if (CALCELLS.find().count() === 0) {
  // var limit = prompt('How many Calendar Cells do you want?');
    for (var i=0; i < 30; i++) {
      CALCELLS.insert({
        name: 'calCell #' + i+1,
        number: i,
        checked: false,
        days: []
      });
    }
}

