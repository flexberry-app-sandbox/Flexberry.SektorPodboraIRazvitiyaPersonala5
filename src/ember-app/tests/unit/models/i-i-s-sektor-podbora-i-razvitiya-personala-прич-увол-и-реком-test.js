import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком', 'Unit | Model | i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-sektor-podbora-i-razvitiya-personala-анкеты',
    'model:i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет',
    'model:i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком',
    'model:i-i-s-sektor-podbora-i-razvitiya-personala-рекомендац',
    'model:i-i-s-sektor-podbora-i-razvitiya-personala-специалист',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
