// Import required modules
import { converter } from '../unicode2bijoy/js/converter.js';

// Example usage
const bengaliText = "আমি বাংলায় লিখছি";
const convertedText = converter.convertToBijoy(bengaliText);
console.log(convertedText);