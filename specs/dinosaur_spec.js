var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function () {

  var dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur({ type: 'Tyrannosaurus', offspring_per_year: 3 });
  });

  it('should have a type', function () {
    assert.strictEqual('Tyrannosaurus', dinosaur.type);
  });

  it('should have offspring per year', function () {
    assert.strictEqual(3, dinosaur.offspring_per_year);
  });

});