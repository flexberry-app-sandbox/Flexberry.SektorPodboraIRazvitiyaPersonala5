import {
  defineNamespace,
  defineProjections,
  Model as ПричУволИРекомMixin
} from '../mixins/regenerated/models/i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПричУволИРекомMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
