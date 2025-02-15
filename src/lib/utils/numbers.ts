/**
 * Formats a number into Korean shorthand (e.g., 33000 -> 3.3만)
 *
 * @param value - The number to format
 * @param decimals - Number of decimal places (default: 1)
 * @returns Formatted string in Korean shorthand
 *
 * @example
 * formatToKoreanNumber(33000) // "3.3만"
 * formatToKoreanNumber(1200000) // "120만"
 * formatToKoreanNumber(12000000) // "1.2천만"
 * formatToKoreanNumber(120000000) // "1.2억"
 */
export const formatToKoreanNumber = (
  value: number,
  decimals: number = 1
): string => {
  const units = ["", "만", "억", "조"];
  const unitSize = 10000;

  const absValue = Math.abs(value);

  // Handle small numbers
  if (absValue < unitSize) {
    return `${absValue}`;
  }

  // Find the appropriate unit
  const exponent = Math.floor(Math.log(absValue) / Math.log(unitSize));
  const unit = units[exponent] || "";

  // Calculate the main number
  let number = absValue / Math.pow(unitSize, exponent);

  // Round to specified decimals only if needed
  const hasDecimal = number % 1 !== 0;
  number = hasDecimal ? Number(number.toFixed(decimals)) : number;

  // Remove unnecessary .0
  const formatted = number.toString().replace(/\.0$/, "");

  return `${formatted}${unit}`;
};
