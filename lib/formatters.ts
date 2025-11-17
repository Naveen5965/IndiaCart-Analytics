/**
 * Format number to Indian Rupee currency format
 * @param amount - Number to format
 * @returns Formatted string with ₹ symbol and Indian numbering system
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format large numbers in Indian format (Lakhs/Crores)
 * @param num - Number to format
 * @returns Formatted string with L/Cr suffix
 */
export function formatIndianNumber(num: number): string {
  if (num >= 10000000) {
    return `₹${(num / 10000000).toFixed(2)} Cr`;
  } else if (num >= 100000) {
    return `₹${(num / 100000).toFixed(2)} L`;
  } else if (num >= 1000) {
    return `₹${(num / 1000).toFixed(2)} K`;
  }
  return `₹${num.toLocaleString('en-IN')}`;
}

/**
 * Format number with Indian numbering system (no currency symbol)
 * @param num - Number to format
 * @returns Formatted string
 */
export function formatNumber(num: number): string {
  return num.toLocaleString('en-IN');
}
