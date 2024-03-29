// src/validation/index.js
import { defineRule, configure } from 'vee-validate';
import { required, email, min, max } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 設定 locale，這裡以 'en' 為例，你可以選擇其他語言
// setLocale('tw');

// 註冊規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);

// 設定全域的規則
configure({
  generateMessage: localize({ zh_TW: zhTW })
});

setLocale('zh_TW');

// export default (Form, Field, ErrorMessage);
