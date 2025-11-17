import { YearlySalesData } from '@/types/sales';

/**
 * Mock sales data inspired by typical e-commerce patterns
 * Data represents monthly sales for years 2022, 2023, and 2024
 * Patterns include seasonal variations with peaks in Q4 (holiday season)
 */

export const salesData2022: YearlySalesData = {
  year: 2022,
  data: [
    { month: 'Jan', sales: 3735000, revenue: 18675000, units: 450 },
    { month: 'Feb', sales: 3486000, revenue: 17430000, units: 420 },
    { month: 'Mar', sales: 4316000, revenue: 21580000, units: 520 },
    { month: 'Apr', sales: 3984000, revenue: 19920000, units: 480 },
    { month: 'May', sales: 4565000, revenue: 22825000, units: 550 },
    { month: 'Jun', sales: 4814000, revenue: 24070000, units: 580 },
    { month: 'Jul', sales: 5146000, revenue: 25730000, units: 620 },
    { month: 'Aug', sales: 4897000, revenue: 24485000, units: 590 },
    { month: 'Sep', sales: 4482000, revenue: 22410000, units: 540 },
    { month: 'Oct', sales: 5644000, revenue: 28220000, units: 680 },
    { month: 'Nov', sales: 7055000, revenue: 35275000, units: 850 },
    { month: 'Dec', sales: 7885000, revenue: 39425000, units: 950 },
  ],
  totalRevenue: 300045000,
  totalUnits: 7230,
};

export const salesData2023: YearlySalesData = {
  year: 2023,
  data: [
    { month: 'Jan', sales: 3984000, revenue: 19920000, units: 480 },
    { month: 'Feb', sales: 3818000, revenue: 19090000, units: 460 },
    { month: 'Mar', sales: 4814000, revenue: 24070000, units: 580 },
    { month: 'Apr', sales: 4482000, revenue: 22410000, units: 540 },
    { month: 'May', sales: 5146000, revenue: 25730000, units: 620 },
    { month: 'Jun', sales: 5395000, revenue: 26975000, units: 650 },
    { month: 'Jul', sales: 5810000, revenue: 29050000, units: 700 },
    { month: 'Aug', sales: 5644000, revenue: 28220000, units: 680 },
    { month: 'Sep', sales: 5063000, revenue: 25315000, units: 610 },
    { month: 'Oct', sales: 6474000, revenue: 32370000, units: 780 },
    { month: 'Nov', sales: 7636000, revenue: 38180000, units: 920 },
    { month: 'Dec', sales: 8715000, revenue: 43575000, units: 1050 },
  ],
  totalRevenue: 334905000,
  totalUnits: 8070,
};

export const salesData2024: YearlySalesData = {
  year: 2024,
  data: [
    { month: 'Jan', sales: 4316000, revenue: 21580000, units: 520 },
    { month: 'Feb', sales: 4150000, revenue: 20750000, units: 500 },
    { month: 'Mar', sales: 5312000, revenue: 26560000, units: 640 },
    { month: 'Apr', sales: 4980000, revenue: 24900000, units: 600 },
    { month: 'May', sales: 5644000, revenue: 28220000, units: 680 },
    { month: 'Jun', sales: 5976000, revenue: 29880000, units: 720 },
    { month: 'Jul', sales: 6474000, revenue: 32370000, units: 780 },
    { month: 'Aug', sales: 6225000, revenue: 31125000, units: 750 },
    { month: 'Sep', sales: 5644000, revenue: 28220000, units: 680 },
    { month: 'Oct', sales: 7055000, revenue: 35275000, units: 850 },
    { month: 'Nov', sales: 8466000, revenue: 42330000, units: 1020 },
    { month: 'Dec', sales: 9545000, revenue: 47725000, units: 1150 },
  ],
  totalRevenue: 368935000,
  totalUnits: 8890,
};

export const allSalesData = [salesData2022, salesData2023, salesData2024];

export function getSalesDataByYear(year: number): YearlySalesData | undefined {
  return allSalesData.find(data => data.year === year);
}

export function getFilteredSalesData(year: number, threshold: number) {
  const yearData = getSalesDataByYear(year);
  if (!yearData) return null;

  const filteredData = yearData.data.filter(item => item.sales >= threshold);
  
  return {
    ...yearData,
    data: filteredData,
  };
}
