const assert = require('chai').assert;
const expect = require('chai').expect;
const app = require('../script/app');

describe('#loadFile', function() {

  it('Should return a string value', function() {
    let txt = app.loadFile();
    expect(txt).to.be.a('string');
  });

});
