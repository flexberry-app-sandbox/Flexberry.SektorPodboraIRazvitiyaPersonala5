import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSektor_podbora_i_razvitiya_personalaАнкетыLForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l';
import IISSektor_podbora_i_razvitiya_personalaИнфИзАнкетLForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет-l';
import IISSektor_podbora_i_razvitiya_personalaПричУволИРекомLForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком-l';
import IISSektor_podbora_i_razvitiya_personalaСпециалистLForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l';
import IISSektor_podbora_i_razvitiya_personalaАнкетыEForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-e';
import IISSektor_podbora_i_razvitiya_personalaИнфИзАнкетEForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет-e';
import IISSektor_podbora_i_razvitiya_personalaПричУволИРекомEForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком-e';
import IISSektor_podbora_i_razvitiya_personalaСпециалистEForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-специалист-e';
import IISSektor_podbora_i_razvitiya_personalaАнкетыModel from './models/i-i-s-sektor-podbora-i-razvitiya-personala-анкеты';
import IISSektor_podbora_i_razvitiya_personalaИнфИзАнкетModel from './models/i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет';
import IISSektor_podbora_i_razvitiya_personalaПричУволИРекомModel from './models/i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком';
import IISSektor_podbora_i_razvitiya_personalaРекомендацModel from './models/i-i-s-sektor-podbora-i-razvitiya-personala-рекомендац';
import IISSektor_podbora_i_razvitiya_personalaСпециалистModel from './models/i-i-s-sektor-podbora-i-razvitiya-personala-специалист';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты': IISSektor_podbora_i_razvitiya_personalaАнкетыModel,
    'i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет': IISSektor_podbora_i_razvitiya_personalaИнфИзАнкетModel,
    'i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком': IISSektor_podbora_i_razvitiya_personalaПричУволИРекомModel,
    'i-i-s-sektor-podbora-i-razvitiya-personala-рекомендац': IISSektor_podbora_i_razvitiya_personalaРекомендацModel,
    'i-i-s-sektor-podbora-i-razvitiya-personala-специалист': IISSektor_podbora_i_razvitiya_personalaСпециалистModel
  },

  'application-name': 'Sektor_podbora_i_razvitiya_personala',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Sektor_podbora_i_razvitiya_personala',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sektor_podbora_i_razvitiya_personala',
          title: 'Sektor_podbora_i_razvitiya_personala'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        специалисты: {
          caption: 'Специалисты',
          title: 'Специалисты',
          'i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l': {
            caption: 'Специалист',
            title: ''
          }
        },
        'статистика-увольнений': {
          caption: 'Статистика увольнений',
          title: 'Статистика увольнений',
          'i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком-l': {
            caption: 'Прич увол и реком',
            title: ''
          },
          'i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет-l': {
            caption: 'Инф из анкет',
            title: ''
          },
          'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l': {
            caption: 'Анкеты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l': IISSektor_podbora_i_razvitiya_personalaАнкетыLForm,
    'i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет-l': IISSektor_podbora_i_razvitiya_personalaИнфИзАнкетLForm,
    'i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком-l': IISSektor_podbora_i_razvitiya_personalaПричУволИРекомLForm,
    'i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l': IISSektor_podbora_i_razvitiya_personalaСпециалистLForm,
    'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-e': IISSektor_podbora_i_razvitiya_personalaАнкетыEForm,
    'i-i-s-sektor-podbora-i-razvitiya-personala-инф-из-анкет-e': IISSektor_podbora_i_razvitiya_personalaИнфИзАнкетEForm,
    'i-i-s-sektor-podbora-i-razvitiya-personala-прич-увол-и-реком-e': IISSektor_podbora_i_razvitiya_personalaПричУволИРекомEForm,
    'i-i-s-sektor-podbora-i-razvitiya-personala-специалист-e': IISSektor_podbora_i_razvitiya_personalaСпециалистEForm
  },

});

export default translations;
