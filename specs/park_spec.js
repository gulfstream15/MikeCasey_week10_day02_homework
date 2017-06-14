var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');
var assert = require('assert');

describe('Park', function () {

  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach(function () {
    park = new Park();
    dinosaur1 = new Dinosaur({ type: 'Tyrannosaurus', offspring_per_year: 3 });
    dinosaur2 = new Dinosaur({ type: 'Velociraptor', offspring_per_year: 1 });
    dinosaur3 = new Dinosaur({ type: 'Triceratops', offspring_per_year: 4 });
  });

  it('park should have no dinosaurs to begin with', function () {
    assert.strictEqual(0, park.dinosaurs.length);
  });

  it('should be able to add a dinosaur', function () {
    park.addDinosaur(dinosaur1);
    assert.strictEqual(1, park.dinosaurs.length);
  });

  it('should be able to remove a dinosaur', function () {
    park.addDinosaur(dinosaur1);
    park.removeDinosaur('Tyrannosaurus');
    assert.strictEqual(0, park.dinosaurs.length);
  });

  it('should return all dinosaurs with offspring greater than two', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.findDinosaurOffspringGreaterThanTwo(2);
    assert.strictEqual(2, park.dinosaursOffspringMoreThanTwo.length);
  });


});