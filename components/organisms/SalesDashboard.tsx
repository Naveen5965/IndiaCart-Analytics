'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/atoms/Card';
import { FilterControls } from '@/components/molecules/FilterControls';
import { BarChartComponent } from '@/components/molecules/BarChartComponent';
import { LineChartComponent } from '@/components/molecules/LineChartComponent';
import { PieChartComponent } from '@/components/molecules/PieChartComponent';
import { ChartType } from '@/types/sales';
import { getFilteredSalesData } from '@/lib/mockData';
import { formatIndianNumber, formatNumber } from '@/lib/formatters';
import { TrendingUp, DollarSign, Package, Calendar } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const SalesDashboard: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [threshold, setThreshold] = useState<number>(0);
  const [chartType, setChartType] = useState<ChartType>('bar');

  const salesData = useMemo(() => {
    return getFilteredSalesData(selectedYear, threshold);
  }, [selectedYear, threshold]);

  const stats = useMemo(() => {
    if (!salesData) return null;

    const totalSales = salesData.data.reduce((acc, item) => acc + item.sales, 0);
    const avgSales = totalSales / salesData.data.length;
    const totalUnits = salesData.data.reduce((acc, item) => acc + item.units, 0);
    const monthsDisplayed = salesData.data.length;

    return {
      totalSales,
      avgSales,
      totalUnits,
      monthsDisplayed,
    };
  }, [salesData]);

  const renderChart = () => {
    if (!salesData || salesData.data.length === 0) {
      return (
        <motion.div 
          className="flex items-center justify-center h-96 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>No data available for the selected filters.</p>
        </motion.div>
      );
    }

    const chartTitle = `${selectedYear} Sales Performance`;

    switch (chartType) {
      case 'bar':
        return <BarChartComponent data={salesData.data} title={chartTitle} />;
      case 'line':
        return <LineChartComponent data={salesData.data} title={chartTitle} />;
      case 'pie':
        return <PieChartComponent data={salesData.data} title={chartTitle} />;
      default:
        return <BarChartComponent data={salesData.data} title={chartTitle} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      {stats && (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={cardVariants} whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90 font-medium">Total Sales</p>
                  <motion.p 
                    className="text-2xl font-bold mt-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    {formatIndianNumber(stats.totalSales)}
                  </motion.p>
                </div>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <DollarSign size={40} className="opacity-80" />
                </motion.div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90 font-medium">Average Sales</p>
                  <motion.p 
                    className="text-2xl font-bold mt-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    {formatIndianNumber(Math.round(stats.avgSales))}
                  </motion.p>
                </div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TrendingUp size={40} className="opacity-80" />
                </motion.div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90 font-medium">Total Units</p>
                  <motion.p 
                    className="text-2xl font-bold mt-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    {formatNumber(stats.totalUnits)}
                  </motion.p>
                </div>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Package size={40} className="opacity-80" />
                </motion.div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90 font-medium">Months Shown</p>
                  <motion.p 
                    className="text-2xl font-bold mt-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                  >
                    {stats.monthsDisplayed}
                  </motion.p>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Calendar size={40} className="opacity-80" />
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="shadow-xl">
          <FilterControls
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
            threshold={threshold}
            onThresholdChange={setThreshold}
            chartType={chartType}
            onChartTypeChange={setChartType}
          />
        </Card>
      </motion.div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="min-h-[500px] shadow-xl">
          {renderChart()}
        </Card>
      </motion.div>
    </div>
  );
};
