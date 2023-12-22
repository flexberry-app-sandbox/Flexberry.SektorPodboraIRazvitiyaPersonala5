import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l');
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-e',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-e/:id' });
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-e.new',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-e/new' });
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет-l');
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет-e',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет-e/:id' });
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет-e.new',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет-e/new' });
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком-l');
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком-e',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком-e/:id' });
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком-e.new',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком-e/new' });
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l');
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-специалист-e',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-специалист-e/:id' });
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-специалист-e.new',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-специалист-e/new' });
});

export default Router;
