import en from './en.json';
import it from './it.json';

export const languages = ['en', 'it'] as const;
export type Language = (typeof languages)[number];
const defaultRes = it;

export type Tlng = {
  [key in Language]: {
    nativeName: string;
  };
};

export type Tres = {
  [key in Language]: {
    translation: typeof defaultRes;
  };
};

export const lngs: Tlng = {
  en: { nativeName: 'English' },
  it: { nativeName: 'Italiano' }
};

export const resources: Tres = {
  en: {
    translation: en
  },
  it: {
    translation: it
  }
};

export const fallbackLng: Language = 'it';
