# IndiaCart Analytics 🇮🇳

A modern, interactive sales analytics dashboard built with Next.js 15, TypeScript, Tailwind CSS, Recharts, and Framer Motion. This application provides comprehensive visualization and analysis of sales data across multiple years with dynamic filtering capabilities and beautiful animations. All values are displayed in **Indian Rupees (₹)**.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)
![Recharts](https://img.shields.io/badge/Recharts-Charts-8884d8)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff69b4)

## 🚀 Features

### Core Functionality
- **Multi-Year Sales Data**: View sales data for 2022, 2023, and 2024
- **Interactive Charts**: Switch between Bar, Line, and Pie chart visualizations with smooth animations
- **Indian Currency Format**: All values displayed in ₹ (Rupees) with proper formatting (Lakhs/Crores)
- **Custom Filters**: 
  - Year selection dropdown
  - Custom sales threshold input (₹) to filter data
- **Real-Time Statistics**: Display total sales, average sales, total units, and active months in INR
- **Smooth Animations**: Beautiful transitions and hover effects powered by Framer Motion
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices

### Enhancements Implemented
✅ **Custom Filter Input**: Users can set their own sales threshold in ₹ to filter months by minimum sales
✅ **API Integration**: RESTful API endpoints ready for real data integration
✅ **Multiple Chart Types**: Switch between bar, line, and pie charts with animated transitions
✅ **Atomic Design Structure**: Components organized following atomic design principles
✅ **Indian Rupee Currency**: Complete currency conversion with proper formatting
✅ **Framer Motion Animations**: 
  - Staggered card reveals
  - Hover effects on interactive elements
  - Icon animations (rotate, pulse, scale)
  - Chart entrance animations
  - Floating background elements
  - Button and CTA animations

## 🏗️ Architecture

This project follows the **Atomic Design Principle** for component organization:

```
components/
├── atoms/          # Basic building blocks (Button, Input, Card, Select)
├── molecules/      # Simple combinations (Chart components, Filter controls)
└── organisms/      # Complex components (Complete dashboard)
```

### Project Structure
```
sales-dashboard/
├── app/
│   ├── api/
│   │   └── sales/
│   │       └── route.ts        # API endpoint for sales data
│   ├── dashboard/
│   │   └── page.tsx            # Main dashboard page
│   ├── layout.tsx
│   └── page.tsx                # Landing page
├── components/
│   ├── atoms/
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── Card.tsx            # Card container component
│   │   ├── Input.tsx           # Input field component
│   │   └── Select.tsx          # Dropdown select component
│   ├── molecules/
│   │   ├── BarChartComponent.tsx   # Bar chart visualization
│   │   ├── LineChartComponent.tsx  # Line chart visualization
│   │   ├── PieChartComponent.tsx   # Pie chart visualization
│   │   └── FilterControls.tsx      # Filter UI controls
│   └── organisms/
│       └── SalesDashboard.tsx      # Complete dashboard organism
├── lib/
│   └── mockData.ts             # Mock sales data and utilities
├── types/
│   └── sales.ts                # TypeScript type definitions
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 📊 Data Structure

The application uses realistic mock sales data with values in Indian Rupees:

```typescript
interface MonthlySalesData {
  month: string;
  sales: number;      // Sales amount in ₹ (Rupees)
  revenue: number;    // Total revenue in ₹
  units: number;      // Number of units sold
}

interface YearlySalesData {
  year: number;
  data: MonthlySalesData[];
  totalRevenue: number;
  totalUnits: number;
}
```

Sales data includes seasonal variations with peak sales during Q4 (holiday season).

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step-by-Step Setup

1. **Clone or navigate to the project directory**
   ```bash
   cd sales-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 🎯 Usage Guide

### Accessing the Dashboard
1. Start the application
2. Navigate to the landing page at `/`
3. Click "Go to Dashboard" button
4. Or directly access `/dashboard`

### Using Filters
- **Year Selection**: Choose between 2022, 2023, or 2024 from the dropdown
- **Sales Threshold**: Enter a minimum sales amount to filter out months below that threshold
- **Chart Type**: Click on Bar, Line, or Pie buttons to switch visualization types

### Statistics Cards
The dashboard displays four key metrics:
- **Total Sales**: Sum of all sales for the selected period
- **Average Sales**: Mean sales across displayed months
- **Total Units**: Total number of units sold
- **Months Shown**: Number of months displayed after filtering

## 🔌 API Integration

### Endpoints

#### GET `/api/sales`
Retrieve all sales data or filtered data.

**Query Parameters:**
- `year` (optional): Filter by specific year (2022, 2023, or 2024)
- `threshold` (optional): Minimum sales threshold

**Examples:**
```bash
# Get all data
GET /api/sales

# Get data for 2024
GET /api/sales?year=2024

# Get 2024 data with $60,000 threshold
GET /api/sales?year=2024&threshold=60000
```

**Response:**
```json
{
  "year": 2024,
  "data": [
    {
      "month": "Jan",
      "sales": 52000,
      "revenue": 260000,
      "units": 520
    }
  ],
  "totalRevenue": 4445000,
  "totalUnits": 8890
}
```

### Future Integration
To integrate real data from an external API:

1. Create a new service in `lib/dataService.ts`
2. Replace mock data imports with API calls
3. Update the `SalesDashboard` component to use the new service
4. Add loading states and error handling

## 🎨 Design Decisions

### Atomic Design Pattern
Components are organized hierarchically:
- **Atoms**: Basic UI elements with minimal logic
- **Molecules**: Combinations of atoms forming functional units
- **Organisms**: Complex components combining molecules

### Why This Matters
- **Reusability**: Atoms and molecules can be used across different pages
- **Maintainability**: Changes to basic components propagate throughout the app
- **Scalability**: Easy to add new features by combining existing components
- **Testing**: Each level can be tested independently

### Color Scheme
- Primary: Blue (Trust, Analytics)
- Secondary: Green (Growth, Positive metrics)
- Accent: Purple, Orange (Engagement, Diversity)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚧 Future Enhancements

Potential improvements for the application:

- [ ] Export data to CSV/Excel
- [ ] Date range picker for custom periods
- [ ] Comparison view (multiple years side-by-side)
- [ ] Dark mode support
- [ ] Animation and transitions
- [ ] User authentication
- [ ] Save custom filter presets
- [ ] Real-time data updates with WebSockets
- [ ] Advanced analytics (trends, predictions)
- [ ] Multiple data sources integration

## 📝 What I Did in This Project

1. **Project Initialization**
   - Set up Next.js 15 with TypeScript and Tailwind CSS
   - Configured ESLint and development environment
   - Installed necessary dependencies (Recharts, Lucide React)

2. **Data Modeling**
   - Created TypeScript interfaces for type safety
   - Generated realistic mock sales data with seasonal patterns
   - Implemented data filtering utilities

3. **Component Development**
   - Built atomic components (Button, Input, Card, Select)
   - Created chart molecules (Bar, Line, Pie) using Recharts
   - Developed filter controls molecule
   - Assembled complete dashboard organism

4. **Page Creation**
   - Designed landing page with feature highlights
   - Built main dashboard page with all functionality
   - Implemented responsive layouts

5. **API Development**
   - Created RESTful API endpoint for sales data
   - Implemented query parameter filtering
   - Added error handling and validation

6. **Documentation**
   - Wrote comprehensive README
   - Added inline code comments
   - Documented API endpoints

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS

## 🙏 Acknowledgments

- Sales data patterns inspired by typical e-commerce seasonal trends
- Chart visualizations powered by [Recharts](https://recharts.org/)
- Icons from [Lucide React](https://lucide.dev/)
- UI design inspired by modern dashboard aesthetics

---

**Note**: This is a demonstration project using mock data. For production use, integrate with real data sources and implement proper authentication and authorization.
