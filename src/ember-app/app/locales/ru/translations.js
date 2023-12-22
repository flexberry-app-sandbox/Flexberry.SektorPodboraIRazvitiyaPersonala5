import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Sektor_podbora_i_razvitiya_personala',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sektor_podbora_i_razvitiya_personala',
          title: 'Sektor_podbora_i_razvitiya_personala'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
