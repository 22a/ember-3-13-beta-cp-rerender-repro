import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  username: validator('presence', true),
});

export default DS.Model.extend(Validations, {
  'username': DS.attr('string'),
});

