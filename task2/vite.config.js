import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Порт по умолчанию
    open: true, // Автоматически открывать браузер
    strictPort: true // Запрещать использовать занятый порт
  },
  optimizeDeps: {
    include: ['i18next', 'react-i18next'] // Важно для работы i18n
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /locales/] // Обработка JSON-файлов переводов
    }
  }
});