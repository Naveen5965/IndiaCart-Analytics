export interface MonthlySalesData {
  month: string;
  sales: number;
  revenue: number;
  units: number;
}

export interface YearlySalesData {
  year: number;
  data: MonthlySalesData[];
  totalRevenue: number;
  totalUnits: number;
}

export type ChartType = 'bar' | 'line' | 'pie';

export interface FilterOptions {
  year: number;
  threshold: number;
}
