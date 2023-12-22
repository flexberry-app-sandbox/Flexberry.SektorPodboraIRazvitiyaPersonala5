import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  анкеты: DS.belongsTo('i-i-s-sektor-podbora-i-razvitiya-personala-анкеты', { inverse: null, async: false }),
  специалист: DS.belongsTo('i-i-s-sektor-podbora-i-razvitiya-personala-специалист', { inverse: null, async: false })
});

export let ValidationRules = {
  анкеты: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет.validations.анкеты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  специалист: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет.validations.специалист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнфИзАнкетE', 'i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет', {
    анкеты: belongsTo('i-i-s-sektor-podbora-i-razvitiya-personala-анкеты', 'Номер анкеты', {
      датаЗаполн: attr('Дата заполнения анкеты', { index: 1 }),
      главнПричин: attr('Причина увольнения', { index: 2 }),
      полУволСотр: attr('Пол', { index: 3 }),
      относКатСотр: attr('Категория', { index: 4 }),
      возрастСотруд: attr('Возраст', { index: 5 })
    }, { index: 0, displayMemberPath: 'номер' })
  });

  modelClass.defineProjection('ИнфИзАнкетL', 'i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет', {
    анкеты: belongsTo('i-i-s-sektor-podbora-i-razvitiya-personala-анкеты', 'Номер анкеты', {
      датаЗаполн: attr('Дата заполнения анкеты', { index: 1 }),
      главнПричин: attr('Причина увольнения', { index: 2 }),
      полУволСотр: attr('Пол', { index: 3 }),
      относКатСотр: attr('Категория', { index: 4 }),
      возрастСотруд: attr('Возраст', { index: 5 })
    }, { index: 0, displayMemberPath: 'номер' })
  });
};
