import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПричУволИРекомMixin
} from '../mixins/regenerated/models/i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПричУволИРекомMixin, Validations, {
});

defineProjections(Model);

export default Model;
