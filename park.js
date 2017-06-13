var Park = function () {
  this.dinosaurs = [];
}

Park.prototype = {
  empty: function () {
    this.dinosaurs = [];
  },

  addDinosaur: function (dinosaur) {
    this.dinosaurs.push(dinosaur);
  },

  removeDinosaur: function (type) {
    for (var dinosaur of this.dinosaurs) {
      if (dinosaur.type === type) {
        var index = this.dinosaurs.indexOf(type);
        this.dinosaurs.splice(index, 1);
      }
    }
  }
};

module.exports = Park;