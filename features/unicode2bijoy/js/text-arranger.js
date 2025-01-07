export const textArranger = {
    rearrangeUnicode(text) {
      let processedText = text;
      let index = 0;
  
      while (index < textUtils.mbStrlen(processedText)) {
        const currentChar = textUtils.mbCharAt(processedText, index);
        const nextChar = textUtils.mbCharAt(processedText, index + 1);
  
        if (index < textUtils.mbStrlen(processedText) - 1 && 
            currentChar === 'র' && 
            charChecks.isBengaliHalant(nextChar)) {
          
          // Handle reph formation
          let j = 1;
          while (true) {
            if (index - j < 0) break;
            
            if (charChecks.isBengliBanjonborno(textUtils.mbCharAt(processedText, index - j)) && 
                charChecks.isBengaliHalant(textUtils.mbCharAt(processedText, index - j - 1))) {
              j += 2;
            } else if (j === 1 && charChecks.isBengaliKar(textUtils.mbCharAt(processedText, index - j))) {
              j += 1;
            } else {
              break;
            }
          }
  
          processedText = this.reconstructText(processedText, index, j);
          index++;
          continue;
        }
        index++;
      }
      return processedText;
    },
  
    rearrangeForAscii(text) {
      let processedText = text;
      let index = 0;
      let lastYPos = 0;
  
      while (index < textUtils.mbStrlen(processedText)) {
        if (charChecks.isBengaliPreKar(textUtils.mbCharAt(processedText, index))) {
          let j = 1;
          
          while (charChecks.isBengliBanjonborno(textUtils.mbCharAt(processedText, index - j))) {
            if ((index - j) < 0 || (index - j) <= lastYPos) break;
            
            if (charChecks.isBengaliHalant(textUtils.mbCharAt(processedText, index - j - 1))) {
              j += 2;
            } else {
              break;
            }
          }
  
          processedText = this.reconstructTextForAscii(processedText, index, j);
          lastYPos = index + 1;
          continue;
        }
        index++;
      }
      return processedText;
    },
  
    reconstructText(text, pos, offset) {
      const prefix = textUtils.subString(text, 0, pos - offset);
      const middle = textUtils.mbCharAt(text, pos) + textUtils.mbCharAt(text, pos + 1);
      const infix = textUtils.subString(text, pos - offset, pos);
      const suffix = textUtils.subString(text, pos + 2, textUtils.mbStrlen(text));
      return prefix + middle + infix + suffix;
    },
  
    reconstructTextForAscii(text, pos, offset) {
      const prefix = textUtils.subString(text, 0, pos - offset);
      const kar = textUtils.mbCharAt(text, pos);
      const middle = textUtils.subString(text, pos - offset, pos);
      const suffix = textUtils.subString(text, pos + 1, textUtils.mbStrlen(text));
      return prefix + kar + middle + suffix;
    }
  };