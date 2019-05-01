const getRandomId = function (context, events, done) {
  const randomId = Math.floor(Math.random()*10000000);
  context.vars.randomId = randomId;
  return done();
}

module.exports = {
  getRandomId
};