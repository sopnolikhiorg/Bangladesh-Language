export const converter = {
    convertToBijoy(text) {
      if (!text) return text;
  
      let processedText = "কর্ড" + text;
  
      processedText = textUtils.pregReplace('ো', 'ো', processedText);
      processedText = textUtils.pregReplace('ৌ', 'ৌ', processedText);
      processedText = textUtils.pregReplace('ড়', 'ড়', processedText);
      processedText = textUtils.pregReplace('য়', 'য়', processedText);
  
      processedText = textArranger.rearrangeForAscii(processedText);
      processedText = textUtils.doCharMap(processedText, conversionMaps.toUnicode);
  
      if (processedText.endsWith('©')) {
        processedText = processedText.slice(0, -1);
      }
  
      processedText = processedText
        .replace("q‡", "‡q")
        .replace("o‡", "‡o");
  
      // Handle special characters
      const chars = [...processedText];
      for (let i = 0; i < chars.length - 1; i++) {
        if (chars[i] === '©') {
          [chars[i], chars[i + 1]] = [chars[i + 1], chars[i]];
          i++;
        }
      }
  
      return chars.join('').slice(2);
    }
  };