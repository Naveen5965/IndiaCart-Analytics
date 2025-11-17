# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd sales-dashboard
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to: **http://localhost:3000**

---

## 📱 Using the Dashboard

### Navigate to Dashboard
Click **"Go to Dashboard"** on the landing page or visit `/dashboard` directly.

### Filter Sales Data

1. **Select Year**: Choose 2022, 2023, or 2024 from dropdown
2. **Set Threshold**: Enter minimum sales amount (e.g., 60000)
3. **Change Chart Type**: Click Bar, Line, or Pie buttons

### View Statistics
Four cards display:
- 💰 Total Sales
- 📈 Average Sales  
- 📦 Total Units
- 📅 Months Shown

---

## 🎨 Features at a Glance

### Interactive Visualizations
- **Bar Chart**: Compare monthly sales side-by-side
- **Line Chart**: See trends and patterns over time
- **Pie Chart**: View distribution of sales by month

### Smart Filtering
- **Year Filter**: Focus on specific year
- **Threshold Filter**: Hide months below your target
- **Real-time Updates**: Charts update instantly

### Responsive Design
- **Mobile**: Full functionality on phones
- **Tablet**: Optimized layout for medium screens
- **Desktop**: Best experience with full width

---

## 🔌 API Testing

### Get All Sales Data
```bash
curl http://localhost:3000/api/sales
```

### Get Data for 2024
```bash
curl http://localhost:3000/api/sales?year=2024
```

### Get 2024 Data with $60K Threshold
```bash
curl "http://localhost:3000/api/sales?year=2024&threshold=60000"
```

---

## 📊 Understanding the Data

### Years Available
- **2022**: $3.6M total revenue
- **2023**: $4.0M total revenue  
- **2024**: $4.4M total revenue

### Sales Patterns
- **Peak Season**: November-December (holidays)
- **Growth**: Consistent year-over-year increase
- **Range**: $42K - $115K per month

---

## 🏗️ Component Architecture

```
Page (Dashboard)
    ↓
Organism (SalesDashboard)
    ↓
Molecules (FilterControls + Charts)
    ↓
Atoms (Button, Input, Select, Card)
```

### Atomic Design Benefits
- ✅ Reusable components
- ✅ Easy to maintain
- ✅ Scalable architecture
- ✅ Testable in isolation

---

## 🛠️ Development Commands

```bash
# Development with hot reload
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Check code quality
npm run lint
```

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `app/dashboard/page.tsx` | Main dashboard page |
| `components/organisms/SalesDashboard.tsx` | Complete dashboard logic |
| `lib/mockData.ts` | Sales data and utilities |
| `app/api/sales/route.ts` | API endpoint |
| `types/sales.ts` | TypeScript definitions |

---

## 💡 Tips & Tricks

### Exploring Different Views
1. Start with **Bar Chart** for easy comparison
2. Switch to **Line Chart** to see trends
3. Use **Pie Chart** for distribution insights

### Using Filters Effectively
- Set threshold to **0** to see all months
- Set threshold to **70000** to see only strong months
- Compare different years to track growth

### Understanding Statistics
- **Total Sales**: Sum for selected period
- **Average Sales**: Mean across visible months
- **Total Units**: All units in selected period
- **Months Shown**: How many passed filter

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill existing process or use different port
npm run dev -- -p 3001
```

### Module Not Found Error
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

---

## 🎯 Next Steps

After exploring the dashboard:

1. **Modify Data**: Edit `lib/mockData.ts` to add more years
2. **Add Features**: Create new chart types or filters
3. **Style Changes**: Update Tailwind classes for custom look
4. **API Integration**: Connect to real database or API

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Recharts Guide](https://recharts.org/en-US/guide)

---

## ✨ Enjoy Your Dashboard!

You now have a fully functional sales analytics dashboard. Explore the features, modify the code, and make it your own!

**Happy Coding! 🚀**
