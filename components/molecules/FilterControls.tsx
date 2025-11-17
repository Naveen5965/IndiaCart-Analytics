'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Select } from '@/components/atoms/Select';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { ChartType } from '@/types/sales';
import { BarChart3, LineChart as LineChartIcon, PieChart } from 'lucide-react';

interface FilterControlsProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
  threshold: number;
  onThresholdChange: (threshold: number) => void;
  chartType: ChartType;
  onChartTypeChange: (type: ChartType) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export const FilterControls: React.FC<FilterControlsProps> = ({
  selectedYear,
  onYearChange,
  threshold,
  onThresholdChange,
  chartType,
  onChartTypeChange,
}) => {
  const yearOptions = [
    { value: 2022, label: '2022' },
    { value: 2023, label: '2023' },
    { value: 2024, label: '2024' },
  ];

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Select
          label="Select Year"
          options={yearOptions}
          value={selectedYear}
          onChange={(e) => onYearChange(Number(e.target.value))}
        />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Input
          label="Sales Threshold (₹)"
          type="number"
          value={threshold}
          onChange={(e) => onThresholdChange(Number(e.target.value))}
          placeholder="e.g., ₹50,00,000"
          min={0}
        />
      </motion.div>
      
      <motion.div className="lg:col-span-2" variants={itemVariants}>
        <label className="text-sm font-medium text-black mb-2 block">
          Chart Type
        </label>
        <div className="flex gap-2">
          <motion.div 
            className="flex-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={chartType === 'bar' ? 'primary' : 'outline'}
              onClick={() => onChartTypeChange('bar')}
              className="w-full flex items-center justify-center gap-2"
            >
              <motion.div
                animate={chartType === 'bar' ? { y: [0, -4, 0] } : {}}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
              >
                <BarChart3 size={20} />
              </motion.div>
              Bar
            </Button>
          </motion.div>
          <motion.div 
            className="flex-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={chartType === 'line' ? 'primary' : 'outline'}
              onClick={() => onChartTypeChange('line')}
              className="w-full flex items-center justify-center gap-2"
            >
              <motion.div
                animate={chartType === 'line' ? { x: [-2, 2, -2] } : {}}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
              >
                <LineChartIcon size={20} />
              </motion.div>
              Line
            </Button>
          </motion.div>
          <motion.div 
            className="flex-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={chartType === 'pie' ? 'primary' : 'outline'}
              onClick={() => onChartTypeChange('pie')}
              className="w-full flex items-center justify-center gap-2"
            >
              <motion.div
                animate={chartType === 'pie' ? { rotate: 360 } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <PieChart size={20} />
              </motion.div>
              Pie
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
