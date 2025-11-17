'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { MonthlySalesData } from '@/types/sales';
import { formatIndianNumber } from '@/lib/formatters';

interface LineChartComponentProps {
  data: MonthlySalesData[];
  title?: string;
}

export const LineChartComponent: React.FC<LineChartComponentProps> = ({ data, title }) => {
  return (
    <motion.div 
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <motion.h4 
          className="text-lg font-semibold mb-4 text-black"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h4>
      )}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.8}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="month" 
            tick={{ fill: '#666', fontSize: 12 }}
            tickLine={{ stroke: '#666' }}
          />
          <YAxis 
            tick={{ fill: '#666', fontSize: 12 }}
            tickLine={{ stroke: '#666' }}
            label={{ value: 'Sales (₹)', angle: -90, position: 'insideLeft', fill: '#666' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '2px solid #8b5cf6',
              borderRadius: '12px',
              padding: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
            formatter={(value: number) => [formatIndianNumber(value), 'Sales']}
            cursor={{ stroke: '#8b5cf6', strokeWidth: 2 }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Line 
            type="monotone" 
            dataKey="sales" 
            stroke="url(#lineGradient)" 
            strokeWidth={4}
            dot={{ fill: '#3b82f6', r: 6, strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 8, strokeWidth: 2 }}
            name="Sales Amount"
            animationDuration={1500}
            animationBegin={0}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};
