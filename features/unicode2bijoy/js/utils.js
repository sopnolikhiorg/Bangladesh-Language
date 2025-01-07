export const textUtils = {
    mbStrlen(str) {
      return [...str].length;
    },
  
    mbCharAt(str, index) {
      return [...str][index];
    },
  
    subString(str, start, end) {
      return [...str].slice(start, end).join('');
    },
  
    doCharMap(str, charMap) {
      let result = str;
      for (const [key, value] of Object.entries(charMap)) {
        result = result.replace(new RegExp(key, 'g'), value);
      }
      return result;
    },
  
    pregReplace(pattern, replacement, str) {
      return str.replace(new RegExp(pattern, 'g'), replacement);
    }
  };