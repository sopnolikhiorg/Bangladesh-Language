const conversionRules = {
  ' +': ' ',
  'yy': 'y', 'vv': 'v', '­­': '­', 'y&': 'y', '„&': '„', '‡u': 'u‡', 'wu': 'uw',
  ' ,': ',', ' \\|': '\\|', '\\\\ ': '', ' \\\\': '', '\\\\': '', '\n +': '\n', 
  ' +\n': '\n', '\n\n\n\n\n': '\n\n', '\n\n\n\n': '\n\n', '\n\n\n': '\n\n'
};

export default conversionRules;
