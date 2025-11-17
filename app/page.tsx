'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, TrendingUp, DollarSign, Sparkles } from 'lucide-react';

export default function Home() {
  const iconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <main className="flex w-full max-w-4xl flex-col items-center justify-center px-6 py-12 text-center relative z-10">
        <motion.div 
          className="mb-8 flex gap-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="rounded-full bg-blue-100 p-4"
            whileHover="hover"
            variants={iconVariants}
          >
            <BarChart3 size={40} className="text-blue-600" />
          </motion.div>
          <motion.div 
            className="rounded-full bg-green-100 p-4"
            whileHover="hover"
            variants={iconVariants}
          >
            <TrendingUp size={40} className="text-green-600" />
          </motion.div>
          <motion.div 
            className="rounded-full bg-purple-100 p-4"
            whileHover="hover"
            variants={iconVariants}
          >
            <DollarSign size={40} className="text-purple-600" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-black md:text-6xl flex items-center justify-center gap-3">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              ₹
            </motion.span>
            IndiaCart Analytics
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Sparkles size={40} className="text-yellow-500" />
            </motion.span>
          </h1>
        </motion.div>
        
        <motion.p 
          className="mb-8 max-w-2xl text-xl text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Visualize and analyze sales data in <span className="font-bold text-black">Indian Rupees (₹)</span> across multiple years with interactive, animated charts.
          Filter by year, set custom thresholds, and switch between different chart types.
        </motion.p>

        <motion.div 
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="rounded-lg bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <h3 className="mb-2 text-lg font-semibold text-black">Multiple Chart Types</h3>
            </motion.div>
            <p className="text-black">Switch between bar, line, and pie charts with smooth animations</p>
          </motion.div>
          
          <motion.div 
            className="rounded-lg bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h3 className="mb-2 text-lg font-semibold text-black">Custom Filters</h3>
            </motion.div>
            <p className="text-black">Filter by year and sales threshold in Indian Rupees</p>
          </motion.div>
          
          <motion.div 
            className="rounded-lg bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Real-time Stats</h3>
            </motion.div>
            <p className="text-gray-600">View animated statistics with Indian currency format</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Go to Dashboard
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </Link>
        </motion.div>

        <motion.p 
          className="mt-8 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion & Recharts
        </motion.p>
      </main>
    </div>
  );
}
