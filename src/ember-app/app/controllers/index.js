import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.специалисты.caption'),
          title: i18n.t('forms.application.sitemap.специалисты.title'),
          children: [{
            link: 'i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l',
            caption: i18n.t('forms.application.sitemap.специалисты.i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l.caption'),
            title: i18n.t('forms.application.sitemap.специалисты.i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.статистика-увольнений.caption'),
          title: i18n.t('forms.application.sitemap.статистика-увольнений.title'),
          children: [{
            link: 'i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком-l',
            caption: i18n.t('forms.application.sitemap.статистика-увольнений.i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком-l.caption'),
            title: i18n.t('forms.application.sitemap.статистика-увольнений.i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет-l',
            caption: i18n.t('forms.application.sitemap.статистика-увольнений.i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет-l.caption'),
            title: i18n.t('forms.application.sitemap.статистика-увольнений.i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l',
            caption: i18n.t('forms.application.sitemap.статистика-увольнений.i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.статистика-увольнений.i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})