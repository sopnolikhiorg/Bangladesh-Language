export const charChecks = {
    isBengaliDigit(char) {
      return char >= '০' && char <= '৯';
    },
  
    isBengaliPreKar(char) {
      return ['ি', 'ৈ', 'ে'].includes(char);
    },
  
    isBengaliPostKar(char) {
      return ['া', 'ো', 'ৌ', 'ৗ', 'ু', 'ূ', 'ী', 'ৃ'].includes(char);
    },
  
    isBengaliKar(char) {
      return this.isBengaliPreKar(char) || this.isBengaliPostKar(char);
    },
  
    isBengliBanjonborno(char) {
      return ['ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ', 'ট', 'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন', 'প', 'ফ', 'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ', 'স', 'হ', 'ড়', 'ঢ়', 'য়', 'ৎ', 'ং', 'ঃ', 'ঁ'].includes(char);
    },
  
    isBengaliNukta(char) {
      return char === 'ঁ';
    },
  
    isBengaliHalant(char) {
      return char === '্';
    },
  
    isSpace(char) {
      return [' ', '\t', '\n', '\r'].includes(char);
    }
  };