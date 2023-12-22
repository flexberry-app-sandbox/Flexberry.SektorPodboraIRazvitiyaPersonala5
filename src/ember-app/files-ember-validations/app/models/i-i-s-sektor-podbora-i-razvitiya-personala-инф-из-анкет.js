import {
  defineNamespace,
  defineProjections,
  Model as ИнфИзАнкетMixin
} from '../mixins/regenerated/models/i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИнфИзАнкетMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
