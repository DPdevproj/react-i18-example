import { useTranslation } from 'react-i18next';
import './App.css';
import { languages, lngs } from './i18n/languages';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h2>{t('welcome')}</h2>
      <div>
        {languages.map((lng) => (
          <button
            key={lng}
            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
