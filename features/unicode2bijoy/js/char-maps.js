export const conversionMaps = {
    toUnicode: {
        'Av': 'আ', 'A': 'অ', 'B': 'ই', 'C': 'ঈ', 'D': 'উ', 'E': 'ঊ', 'F': 'ঋ', 'G': 'এ', 
        'H': 'ঐ', 'I': 'ও', 'J': 'ঔ', 'K': 'ক', 'L': 'খ', 'M': 'গ', 'N': 'ঘ', 'O': 'ঙ', 
        'P': 'চ', 'Q': 'ছ', 'R': 'জ', 'S': 'ঝ', 'T': 'ঞ', 'U': 'ট', 'V': 'ঠ', 'W': 'ড', 
        'X': 'ঢ', 'Y': 'ণ', 'Z': 'ত', '_': 'থ', '`': 'দ', 'a': 'ধ', 'b': 'ন', 'c': 'প', 
        'd': 'ফ', 'e': 'ব', 'f': 'ভ', 'g': 'ম', 'h': 'য', 'i': 'র', 'j': 'ল', 'k': 'শ', 
        'l': 'ষ', 'm': 'স', 'n': 'হ', 'o': 'ড়', 'p': 'ঢ়', 'q': 'য়', 'r': 'ৎ', 's': 'ং', 
        't': 'ঃ', 'u': 'ঁ', '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', 
        '6': '৬', '7': '৭', '8': '৮', '9': '৯', '•': 'ঙ্', 'v': 'া', 'w': 'ি', 'x': 'ী', 
        'y': 'ু', 'z': 'ু', '“': 'ু', '–': 'ু', '~': 'ূ', 'ƒ': 'ূ', '‚': 'ূ', '„„': 'ৃ', 
        '„': 'ৃ', '…': 'ৃ', '†': 'ে', '‡': 'ে', 'ˆ': 'ৈ', '‰': 'ৈ', 'Š': 'ৗ', '\\|': '।', 
        '\\&': '্‌', '\\^': '্ব', '‘': '্তু', '’': '্থ', '‹': '্ক', 'Œ': '্ক্র', '”': 'চ্', 
        '—': '্ত', '˜': 'দ্', '™': 'দ্', 'š': 'ন্', '›': 'ন্', 'œ': '্ন', 'Ÿ': '্ব', 
        '¡': '্ব', '¢': '্ভ', '£': '্ভ্র', '¤': 'ম্', '¥': '্ম', '¦': '্ব', '§': '্ম', 
        '¨': '্য', '©': 'র্', 'ª': '্র', '«': '্র', '¬': '্ল', '­': '্ল', '®': 'ষ্', 
        '¯': 'স্', '°': 'ক্ক', '±': 'ক্ট', '²': 'ক্ষ্ণ', '³': 'ক্ত', '´': 'ক্ম', 'µ': 'ক্র', 
        '¶': 'ক্ষ', '·': 'ক্স', '¸': 'গু', '¹': 'জ্ঞ', 'º': 'গ্দ', '»': 'গ্ধ', '¼': 'ঙ্ক', 
        '½': 'ঙ্গ', '¾': 'জ্জ', '¿': '্ত্র', 'À': 'জ্ঝ', 'Á': 'জ্ঞ', 'Â': 'ঞ্চ', 'Ã': 'ঞ্ছ', 
        'Ä': 'ঞ্জ', 'Å': 'ঞ্ঝ', 'Æ': 'ট্ট', 'Ç': 'ড্ড', 'È': 'ণ্ট', 'É': 'ণ্ঠ', 'Ê': 'ণ্ড', 
        'Ë': 'ত্ত', 'Ì': 'ত্থ', 'Í': 'ত্ম', 'Î': 'ত্র', 'Ï': 'দ্দ', 'Ð': '-', 'Ñ': '-', 
        'Ò': '"', 'Ó': '"', 'Ô': "'", 'Õ': "'", 'Ö': '্র', '×': 'দ্ধ', 'Ø': 'দ্ব', 'Ù': 'দ্ম', 
        'Ú': 'ন্ঠ', 'Û': 'ন্ড', 'Ü': 'ন্ধ', 'Ý': 'ন্স', 'Þ': 'প্ট', 'ß': 'প্ত', 'à': 'প্প', 
        'á': 'প্স', 'â': 'ব্জ', 'ã': 'ব্দ', 'ä': 'ব্ধ', 'å': 'ভ্র', 'æ': 'ম্ন', 'ç': 'ম্ফ', 
        'è': '্ন', 'é': 'ল্ক', 'ê': 'ল্গ', 'ë': 'ল্ট', 'ì': 'ল্ড', 'í': 'ল্প', 'î': 'ল্ফ', 
        'ï': 'শু', 'ð': 'শ্চ', 'ñ': 'শ্ছ', 'ò': 'ষ্ণ', 'ó': 'ষ্ট', 'ô': 'ষ্ঠ', 'õ': 'ষ্ফ', 
        'ö': 'স্খ', '÷': 'স্ট', 'ø': 'স্ন', 'ù': 'স্ফ', 'ú': '্প', 'û': 'হু', 'ü': 'হৃ', 
        'ý': 'হ্ন', 'þ': 'হ্ম'    
    }
}