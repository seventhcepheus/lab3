import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './init';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getCounterText = () => {
    return t('counter', { 
      count,
      postProcess: i18n.language === 'ru' ? 'plural' : undefined
    });
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <div className="btn-group mb-3">
        <button
          className={`btn ${i18n.language === 'en' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => changeLanguage('en')}
        >
          English
        </button>
        <button
          className={`btn ${i18n.language === 'ru' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => changeLanguage('ru')}
        >
          Русский
        </button>
      </div>

      <button 
        className="btn btn-info mb-3" 
        onClick={() => setCount(c => c + 1)}
      >
        {getCounterText()}
      </button>

      <button 
        className="btn btn-warning"
        onClick={() => setCount(0)}
      >
        {t('reset')}
      </button>
    </div>
  );
}

export default App;