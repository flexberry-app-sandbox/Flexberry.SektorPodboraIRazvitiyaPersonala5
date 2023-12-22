import { Serializer as ИнфИзАнкетSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИнфИзАнкетSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
