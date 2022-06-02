export interface PatternsDict {
  regexp: RegExp;
  errorText: string;
}

interface DictionaryWithRegex {
  [key: string]: PatternsDict
}

export const DICT_PATTERNS: DictionaryWithRegex = {
  email: {
    regexp: /^([a-zA-Z0-9]+[-_.]*[a-zA-Z0-9]+|[a-zA-Z0-9]+)@[-a-zA-Z0-9]+\.[a-zA-Z.]{2,}$/,
    errorText: 'от 3 до 20 символов, латиница, цифры, - _',
  },
  login: {
    regexp: /^[a-z0-9-_]{3,20}$/i,
    errorText: 'от 3 до 20 символов, латиница, цифры, - _',
  },
  first_name: {
    regexp: /^[A-ZА-Я][a-zа-я]{3,19}$/,
    errorText: 'латиница или кириллица, первая буква заглавная',
  },
  second_name: {
    regexp: /^[A-Z][A-Za-zа-я]{3,19}$/,
    errorText: 'латиница или кириллица, первая буква заглавная',
  },
  display_name: {
    regexp: /^[A-Z][A-Za-zа-я]{3,19}$/,
    errorText: 'латиница или кириллица, первая буква заглавная',
  },
  phone: {
    regexp: /^[+]?[\d]{10,15}/,
    errorText: 'введите телефон',
  },
  avatar: {
    regexp: /^(?!\s*$).+/,
    errorText: 'файл не выбран',
  },
  password: {
    regexp: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[А-Яа-яA-Za-z\d]{8,40}$/,
    errorText: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  },
  oldPassword: {
    regexp: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[А-Яа-яA-Za-z\d]{8,40}$/,
    errorText: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  },
  passwordRepeat: {
    regexp: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[А-Яа-яA-Za-z\d]{8,40}$/,
    errorText: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  },
  message: {
    regexp: /^(?!\s*$).+/,
    errorText: 'введите сообщение',
  },
  search_message: {
    regexp: /^[a-zа-я0-9-_]{3,20}$/i,
    errorText: '',
  },
};
