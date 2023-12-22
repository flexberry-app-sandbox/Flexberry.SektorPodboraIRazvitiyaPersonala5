import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПолEnum from '../enums/i-i-s-sektor-podbora-i-razvitiya-personala-пол';

export default FlexberryEnum.extend({
  enum: ПолEnum,
  sourceType: 'IIS.Sektor_podbora_i_razvitiya_personala.Пол'
});
