const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const app = require('../script/app');

describe('app', function() {

  // Need to figure out how to replicate event or alternative approach.
  describe.skip('#loadFile', function() {
    let onChangeSuccessSpy;

    before(function() {
      onChangeSuccessSpy = sinon.spy();
      document.getElementsByTagName('input').trigger('onChangeSuccess', onChangeSuccessSpy);
    });

    it('Should trigger an event', function() {
      document.getElementsByTagName('input').onchange();
      expect(onChangeSuccessSpy.callCount).to.equal(1);
    });

    it('Should return a string', function() {
      expect(app.loadFile()).to.be.a('string');
    });
  });

  describe('#mkArr', function(){
    it('Should return an array given a string', function() {
      let str = 'i spy with my eye';
      expect(app.mkArr(str)).to.be.an('array');
    });

    it('Should return an array of words', function() {
      let str = 'I like fishing';
      assert.equal(app.mkArr(str).indexOf('like'), 1);
    });
  });

  describe('#wordFreq', function() {
    it('Should return and object give an array', function() {
      let arr = ['hi', 'hi', 'hi', 'the', 'the', 'the', 'red', 'green', 'yellow', 'yellow'];
      expect(app.wordFreq()).to.be.an('object');
    });

    it('Should return { word: num of occurances }', function() {
      let arr = ['one', 'one', 'one', 'three', 'three', 'three', 'three', 'is', 'is', 'is', 'a', 'cat', 'dog', 'dog'];
      assert.isObject(app.wordFreq(arr), '{ one: 3, three: 4, is: 3, a: 1 }');
    });

    it('Should return an array of non duplicate words', function() {
      let arr = ['ok', 'ok', 'ok', 'dice', 'dice', 'is', 'is', 'at', 'red', 'red', 'red', 'red'];
      assert.equal(app.wordFreq(arr).indexOf('ok'), 0);
      assert.equal(app.wordFreq(arr).indexOf('dice'), 1);
      assert.equal(app.wordFreq(arr).indexOf('is'), 2);
      assert.equal(app.wordFreq(arr).indexOf('at'), 3);
      assert.equal(app.wordFreq(arr).indexOf('red'), 4);

    });
  });

});
