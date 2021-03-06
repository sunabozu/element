const Steps = require('./src/steps');
const Step = require('./src/step');

module.exports = function(Vue) {
  Vue.component(Steps.name, Steps);
  Vue.component(Step.name, Step);
};

exports.Steps = Steps;
exports.Step = Step;
