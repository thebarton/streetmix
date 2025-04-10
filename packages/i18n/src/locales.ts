export type LocaleLevel = 1 | 2 | 3 | 4

export interface LocaleDefinition {
  label: string
  name: string
  value: string
  key: string
  level: LocaleLevel
}

const LOCALES: LocaleDefinition[] = [
  {
    label: 'አማርኛ',
    name: 'Amharic',
    value: 'am',
    key: 'i18n.lang.am',
    level: 3
  },
  {
    label: 'لغة عربية',
    name: 'Arabic',
    value: 'ar',
    key: 'i18n.lang.ar',
    level: 3
  },
  {
    label: 'Català',
    name: 'Catalan',
    value: 'ca',
    key: 'i18n.lang.ca',
    level: 3
  },
  {
    label: 'čeština',
    name: 'Czech',
    value: 'cs',
    key: 'i18n.lang.cs',
    level: 3
  },
  {
    label: 'Deutsch',
    name: 'German',
    value: 'de',
    key: 'i18n.lang.de',
    level: 3
  },
  {
    label: 'English',
    name: 'English',
    value: 'en',
    key: 'i18n.lang.en',
    level: 4
  },
  {
    label: 'English (United Kingdom)',
    name: 'English (United Kingdom)',
    value: 'en-GB',
    key: 'i18n.lang.en-gb',
    level: 1
  },
  {
    label: 'Español',
    name: 'Spanish',
    value: 'es',
    key: 'i18n.lang.es',
    level: 1
  },
  {
    label: 'Español (América Latina)',
    name: 'Spanish (Latin America)',
    value: 'es-419',
    key: 'i18n.lang.es-419',
    level: 3
  },
  {
    label: 'Español (España)',
    name: 'Spanish (Spain)',
    value: 'es-ES',
    key: 'i18n.lang.es-es',
    level: 3
  },
  {
    label: 'Español (México)',
    name: 'Spanish (Mexico)',
    value: 'es-MX',
    key: 'i18n.lang.es-mx',
    level: 3
  },
  {
    label: 'Suomi',
    name: 'Finnish',
    value: 'fi',
    key: 'i18n.lang.fi',
    level: 3
  },
  {
    label: 'Filipino',
    name: 'Filipino',
    value: 'fil',
    key: 'i18n.lang.fil',
    level: 1
  },
  {
    label: 'Français',
    name: 'French',
    value: 'fr',
    key: 'i18n.lang.fr',
    level: 3
  },
  {
    label: 'bahasa Indonesia',
    name: 'Indonesian',
    value: 'id',
    key: 'i18n.lang.id',
    level: 3
  },
  {
    label: 'Italiano',
    name: 'Italian',
    value: 'it',
    key: 'i18n.lang.it',
    level: 3
  },
  {
    label: '日本語',
    name: 'Japanese',
    value: 'ja',
    key: 'i18n.lang.ja',
    level: 3
  },
  {
    label: '한국어',
    name: 'Korean',
    value: 'ko',
    key: 'i18n.lang.ko',
    level: 3
  },
  {
    label: 'Nederlands',
    name: 'Dutch (Netherlands)',
    value: 'nl-NL',
    key: 'i18n.lang.nl-nl',
    level: 2
  },
  {
    label: 'Bokmål',
    name: 'Norwegian Bokmål',
    value: 'nb-NO',
    key: 'i18n.lang.nb-no',
    level: 3
  },
  {
    label: 'Polski',
    name: 'Polish',
    value: 'pl',
    key: 'i18n.lang.pl',
    level: 3
  },
  {
    label: 'Português (Brasil)',
    name: 'Portuguese (Brazil)',
    value: 'pt-BR',
    key: 'i18n.lang.pt-br',
    level: 3
  },
  {
    label: 'Roemeense',
    name: 'Romanian',
    value: 'ro-RO',
    key: 'i18n.lang.ro-ro',
    level: 1
  },
  {
    label: 'Русский',
    name: 'Russian',
    value: 'ru',
    key: 'i18n.lang.ru',
    level: 3
  },
  {
    label: 'Slovak',
    name: 'Slovak',
    value: 'sk',
    key: 'i18n.lang.sk',
    level: 1
  },
  {
    label: 'Svenska',
    name: 'Swedish',
    value: 'sv',
    key: 'i18n.lang.sv',
    level: 3
  },
  {
    label: 'Türkçe',
    name: 'Turkish',
    value: 'tr',
    key: 'i18n.lang.tr',
    level: 3
  },
  {
    label: '简体中文',
    name: 'Simplified Chinese',
    value: 'zh-Hans',
    key: 'i18n.lang.zh-hans',
    level: 3
  },
  {
    label: '繁體中文',
    name: 'Traditional Chinese',
    value: 'zh-Hant',
    key: 'i18n.lang.zh-hant',
    level: 3
  }
]

export default LOCALES
