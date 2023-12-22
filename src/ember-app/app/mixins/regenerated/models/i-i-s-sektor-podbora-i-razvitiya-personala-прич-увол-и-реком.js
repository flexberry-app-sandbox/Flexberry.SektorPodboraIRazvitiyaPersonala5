import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаполн: DS.attr('date', { defaultValue() { return new Date(); } }),
  причинУвол: DS.attr('i-i-s-sektor-podbora-i-razvitiya-personala-факторы'),
  специалист: DS.belongsTo('i-i-s-sektor-podbora-i-razvitiya-personala-специалист', { inverse: null, async: false }),
  рекомендации: DS.hasMany('i-i-s-sektor-podbora-i-razvitiya-personala-рекомендац', { inverse: 'причУволИРеком', async: false })
});

export let ValidationRules = {
  датаЗаполн: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком.validations.датаЗаполн.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  причинУвол: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком.validations.причинУвол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  специалист: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком.validations.специалист.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  рекомендации: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком.validations.рекомендации.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПричУволИРекомE', 'i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком', {
    датаЗаполн: attr('Дата заполнения', { index: 0 }),
    причинУвол: attr('Причина увольнения', { index: 2 }),
    специалист: belongsTo('i-i-s-sektor-podbora-i-razvitiya-personala-специалист', 'ФИО специалиста', {

    }, { index: 1, displayMemberPath: 'фИО' }),
    рекомендации: hasMany('i-i-s-sektor-podbora-i-razvitiya-personala-рекомендац', 'Рекомендации', {
      специалисты: attr('Специалисты', { index: 0 }),
      руководители: attr('Руководители', { index: 1 }),
      рабочие: attr('Рабочие', { index: 2 })
    })
  });

  modelClass.defineProjection('ПричУволИРекомL', 'i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком', {
    датаЗаполн: attr('Дата заполнения', { index: 0 }),
    причинУвол: attr('Причина увольнения', { index: 2 }),
    специалист: belongsTo('i-i-s-sektor-podbora-i-razvitiya-personala-специалист', 'ФИО специалиста', {

    }, { index: 1, displayMemberPath: 'фИО' })
  });
};
