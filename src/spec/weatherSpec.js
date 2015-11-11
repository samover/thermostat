describe('Weather', function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
    spyOn(Math, 'random').and.returnValue(0.4);
  });

  it('returns true when stormy', function(){
    Math.random.and.returnValue(0.6);
    expect(weather.isStormy()).toBe(true);
  });

  it('returns false when not stormy', function(){
    expect(weather.isStormy()).toBe(false);
  });

});
