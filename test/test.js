var code = require('../main.js');
var expect = require('chai').expect;

describe("Leap Year", function(){

  //Should be true
  it("should return true for 2016", function(){
    expect(code.leapYear(2016)).to.equal(true);
  });
  it("should return true for 4", function(){
    expect(code.leapYear(4)).to.equal(true);
  });

  //Should be false
  it("should return false for 1700", function(){
    expect(code.leapYear(1700)).to.equal(false);
  });
  it("should return false for 1800", function(){
    expect(code.leapYear(1800)).to.equal(false);
  });
  it("should return false for 1900", function(){
    expect(code.leapYear(1900)).to.equal(false);
  });
})
