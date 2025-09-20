import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { TrendingUp, TrendingDown } from 'lucide-react';
import WorldMap from "react-svg-worldmap";
import { useResponsive } from '../hooks/useResponsive';
import {
  COLORS,
  CHART_MONTHS,
  METRICS_DATA,
  PRODUCTS_DATA,
  LOCATIONS_DATA,
  SALES_BREAKDOWN,
  CHART_DATA_CONFIG,
  MAP_DATA,
  TABLE_HEADERS
} from '../data/navigationData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MetricCard = ({ title, value, change, trend, bgColor }) => {
  const isPositive = trend === 'up';
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  const isColoredBackground = bgColor.includes('#E3F5FF') || bgColor.includes('#E5ECF6');
  const titleColor = isColoredBackground ? 'text-gray-600' : 'text-gray-600 dark:text-gray-400';
  const valueColor = isColoredBackground ? 'text-gray-900' : 'text-gray-900 dark:text-white';

  return (
    <div className={`${bgColor} rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-600 h-full`}>
      <h3 className={`text-sm font-medium ${titleColor} mb-2`}>{title}</h3>
      <div className="flex items-center justify-between">
        <div className={`text-xl font-bold ${valueColor}`}>{value}</div>
        <div className={`flex items-center text-xs font-medium ${
          isPositive 
            ? 'text-green-600 dark:text-green-400' 
            : 'text-red-600 dark:text-red-400'
        }`}>
          <span className="mr-1">{change}</span>
          <TrendIcon className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

const ChartContainer = ({ title, children, className = "", showLegend = false, legendData = null }) => (
  <div className={`bg-[#F7F9FB] dark:bg-[#1C1C1C] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-200 flex flex-col ${className}`}>
    <div className="flex items-center justify-between mb-4 flex-shrink-0">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      {showLegend && legendData && (
        <div className="flex items-center space-x-6 text-sm">
          {legendData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-900 dark:bg-gray-100 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
              <span className="font-semibold text-gray-900 dark:text-white">{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
    <div className="flex-1 min-h-0">
      {children}
    </div>
  </div>
);

const LocationItem = ({ city, amount }) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center space-x-2 min-w-0">
      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
      <span className="text-sm text-gray-600 dark:text-gray-400 truncate">{city}</span>
    </div>
    <span className="text-sm font-semibold text-gray-900 dark:text-white ml-2 flex-shrink-0">{amount}</span>
  </div>
);

const SalesItem = ({ label, amount, color }) => (
  <div className="flex items-center justify-evenly">
    <div className="flex items-center space-x-3">
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
    </div>
    <span className="text-sm font-medium text-gray-900 dark:text-white">{amount}</span>
  </div>
);

const ProductRow = ({ product }) => (
  <tr className="border-b border-gray-100 dark:border-gray-800 last:border-0">
    <td className="py-3 text-sm text-gray-900 dark:text-white">{product.name}</td>
    <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{product.price}</td>
    <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{product.quantity}</td>
    <td className="py-3 text-sm font-medium text-gray-900 dark:text-white text-right">{product.amount}</td>
  </tr>
);

export const Dashboard = () => {
  const screenSize = useResponsive();
  const isDarkMode = () => document.documentElement.classList.contains('dark');
  const getTextColor = (isDark = false) => isDark ? COLORS.text.dark : COLORS.text.light;
  const getGridColor = (isDark = false) => isDark ? COLORS.grid.dark : COLORS.grid.light;

  const createTooltipConfig = (isDark = false) => ({
    backgroundColor: isDark ? COLORS.primary : COLORS.background.light,
    titleColor: isDark ? COLORS.text.primaryDark : COLORS.text.primary,
    bodyColor: isDark ? COLORS.text.primaryDark : COLORS.text.primary,
    borderColor: isDark ? COLORS.grid.dark : '#E5E7EB',
    borderWidth: 1,
  });

  const createChartOptions = (type, isStacked = false) => {
    const isDark = isDarkMode();
    const textColor = getTextColor(isDark);
    const gridColor = getGridColor(isDark);

    if (type === 'doughnut') {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            ...createTooltipConfig(isDark),
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.parsed + '%';
              }
            }
          }
        }
      };
    }

    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: false },
        tooltip: createTooltipConfig(isDark)
      },
      scales: {
        x: {
          stacked: isStacked,
          grid: { display: false, color: gridColor },
          ticks: { color: textColor, font: { size: 12 } }
        },
        y: {
          stacked: isStacked,
          grid: { color: gridColor },
          min: 0,
          max: 30,
          ticks: { 
            color: textColor,
            font: { size: 12 },
            stepSize: 10,
            maxTicksLimit: 4,
            callback: function(value, index, ticks) {
              if (value === 0) {
                return '0';
              }
              return value + 'M';
            }
          }
        }
      }
    };
  };

  const createChartData = (type) => {
    const chartConfig = CHART_DATA_CONFIG[type];
    
    if (type === 'sales') {
      return {
        labels: SALES_BREAKDOWN.map(item => item.label),
        datasets: [{
          data: SALES_BREAKDOWN.map(item => item.percentage),
          backgroundColor: SALES_BREAKDOWN.map(item => item.color),
          borderWidth: 0,
          cutout: '70%'
        }]
      };
    }

    return {
      labels: CHART_MONTHS,
      datasets: chartConfig.datasets
    };
  };

  const getMapStyle = ({ countryValue }) => ({
    fill: countryValue ? COLORS.blue : "#D9D9D9",
    fillOpacity: countryValue ? 0.8 : 0.3,
    stroke: "#D1D5DB",
    strokeWidth: 0.5,
    strokeOpacity: 1,
    cursor: "pointer"
  });

  const revenueLegendData = CHART_DATA_CONFIG.revenue.legend;

  const getGridClasses = () => {
    if (screenSize === 'mobile') {
      return 'grid-cols-1';
    }
    return 'grid-cols-[68%_32%]';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1C1C1C] p-6">
      <div className="px-2 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-6">
          <div className="h-[252px] grid grid-cols-2 gap-3 bg-white dark:bg-[#1C1C1C] rounded-xl">
            {METRICS_DATA.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          <ChartContainer title="Projections vs Actuals" className="h-[252px]">
            <div className="h-[170px]">
              <Bar 
                data={createChartData('projections')} 
                options={createChartOptions('bar', true)} 
              />
            </div>
          </ChartContainer>
        </div>

        <div className={`grid ${getGridClasses()} gap-6`}>
          <ChartContainer 
            title="Revenue" 
            className="" 
            showLegend={true} 
            legendData={revenueLegendData}
          >
            <div className="h-64">
              <Line 
                data={createChartData('revenue')} 
                options={createChartOptions('line')} 
              />
            </div>
          </ChartContainer>

          <ChartContainer title="Revenue by Location" className="">
            <div className="space-y-2">
              <div className="flex justify-center">
                <WorldMap
                  data={MAP_DATA}
                  size="sm"
                  styleFunction={getMapStyle}
                  backgroundColor="transparent"
                />
              </div>
              <div className="space-y-2">
                {LOCATIONS_DATA.map((location, index) => (
                  <LocationItem key={index} {...location} />
                ))}
              </div>
            </div>
          </ChartContainer>
        </div>

        <div className={`grid ${getGridClasses()} gap-6`}>
          <ChartContainer title="Top Selling Products">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    {TABLE_HEADERS.products.map((header, index) => (
                      <th key={index} className={`text-${header.align} text-sm font-medium text-gray-600 dark:text-gray-400 pb-3`}>
                        {header.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS_DATA.map((product, index) => (
                    <ProductRow key={index} product={product} />
                  ))}
                </tbody>
              </table>
            </div>
          </ChartContainer>

          <ChartContainer title="Total Sales">
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32">
                <Doughnut 
                  data={createChartData('sales')} 
                  options={createChartOptions('doughnut')} 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">38.6%</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {SALES_BREAKDOWN.map((item, index) => (
                <SalesItem key={index} {...item} />
              ))}
            </div>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
