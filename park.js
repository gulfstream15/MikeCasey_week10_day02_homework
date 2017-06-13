var Park = function () {
  this.dinosaurs = [];
  this.dinosaursOffspringMoreThanTwo = [];
}

Park.prototype = {
  empty: function () {
    this.dinosaurs = [];
    this.dinosaursOffspringMoreThanTwo = [];
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
  },

  calcDinosaur: function (offspring_per_year) {

    for (var dinosaur of this.dinosaurs) {
      if (dinosaur.offspring_per_year > offspring_per_year) {
        this.dinosaursOffspringMoreThanTwo.push(dinosaur.type);
      }
    }
  }


};

module.exports = Park;