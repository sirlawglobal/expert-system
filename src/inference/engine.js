const rules = require('../knowledge/rules');

function getSolution(symptoms) {
  for (const rule of rules) {
    if (rule.symptoms.every(s => symptoms.includes(s))) {
      return rule.solution;
    }
  }
  return 'No exact match found. Please contact IT support.';
}

module.exports = { getSolution };
