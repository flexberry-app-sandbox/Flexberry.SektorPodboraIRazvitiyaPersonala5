import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  телефон: DS.attr('string'),
  фИО: DS.attr('string'),
  электрПочта: DS.attr('string')
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-специалист.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-специалист.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-специалист.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  электрПочта: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-специалист.validations.электрПочта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпециалистE', 'i-i-s-sektor-podbora-i-razvitiya-personala-специалист', {
    номер: attr('Номер', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    электрПочта: attr('Электронная почта', { index: 3 })
  });

  modelClass.defineProjection('СпециалистL', 'i-i-s-sektor-podbora-i-razvitiya-personala-специалист', {
    номер: attr('Номер', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    электрПочта: attr('Электр почта', { index: 3 })
  });
};
