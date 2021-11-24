import { addStrings, registerLocale } from 'meteor/vulcan:core';

registerLocale({
  id: 'en',
  label: 'English',
  required: false,
});

registerLocale({
  id: 'fr',
  label: 'Français',
  required: true,
});

addStrings('fr', {
  'datatable.new': 'Nouvelle candidature',
  'forms.submit': 'Soumettre',
});