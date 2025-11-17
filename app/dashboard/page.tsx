'use client';

import { motion } from 'framer-motion';
import { SalesDashboard } from '@/components/organisms/SalesDashboard';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.header 
          className="mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-black mb-2 flex items-center gap-3"
            animate={{ 
              textShadow: [
                "0px 0px 0px rgba(59, 130, 246, 0)",
                "0px 0px 8px rgba(59, 130, 246, 0.5)",
                "0px 0px 0px rgba(59, 130, 246, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ₹
            </motion.span>
            IndiaCart Analytics
          </motion.h1>
          <motion.p 
            className="text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Monitor and analyze sales performance across multiple years in Indian Rupees
          </motion.p>
        </motion.header>
        
        <SalesDashboard />
      </div>
    </main>
  );
}
