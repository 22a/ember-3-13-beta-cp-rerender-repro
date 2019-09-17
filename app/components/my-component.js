import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  // myProp: and('cheese', 'model.validations.isValid'),
  init() {
    this._super(...arguments);
    this.myProp;
    this.model.validations.isValid;
  },
  cheese: true,
  myProp: computed('cheese', 'model.validations.isValid', function() {
    return this.cheese;
  }),
});
