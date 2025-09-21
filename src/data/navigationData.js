
 export const COLORS = {
  primary: '#1F2937',
  secondary: '#9CA3AF',
  lgreen: '#BAEDBD',
  lblue:'#B1E3FF',
  blue: '#3B82F6',
  grey: '#D9D9D9',
  yellow: '#F59E0B',
  red: '#EF4444',
  purple: '#8B5CF6',
  lightBlue: '#B5CEE6',
  mediumBlue: '#7CA3D3',
  backcolor:"#F7F9FB",
  background: {
    light: '#FFFFFF',
    dark: '#1C1C1C',
    accent1: '#E3F5FF',
    accent2: '#E5ECF6',
  },
  text: {
    light: '#6B7280',
    dark: '#9CA3AF',
    primary: '#111827',
    primaryDark: '#F9FAFB'
  },
  grid: {
    light: '#F3F4F6',
    dark: '#374151'
  },
  lines:{
    blue:'#A8C5DA',
    blueDark: '#95A4FC',
  }
};


export const CHART_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const navigationSections = [
  {
    type: 'tabs',
    items: [],
    tabs: [
      { 
        id: 'favourites',
        label: 'Favourites', 
        items: [
          { label: 'Overview', icon: 'greydot', active: false },
          { label: 'Projects', icon: 'greydot', active: false },
        ]
      },
      { 
        id: 'recently',
        label: 'Recently', 
        items: [
          { label: 'Projects', icon: 'greydot', active: false },
        ]
      }
    ]
  },
  {
    title: 'Dashboards',
    items: [
      { label: 'Default', icon: 'overview', active: true },
      { label: 'eCommerce', icon: 'ecommerce', active: false,subitems: ['ecommerce']},
      { label: 'Projects', icon: 'project', active: false,subitems: ['Projects'] },
      { label: 'Online Courses', icon: 'onlinecourse', active: false,subitems: ['Documents'] }
    ]
  },
  {
    title: 'Pages',
    items: [
      { 
        label: 'User Profile', 
        icon: 'idd',
        subitems: ['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers']
      },
      { label: 'Account', icon: 'account', active: false ,subitems: ['profile'] }, 
      { label: 'Corporate', icon: 'corporate', active: false,subitems: ['profile'] },
      { label: 'Blog', icon: 'blog', active: false,subitems: ['Overview', 'Followers'] },
      { label: 'Social', icon: 'social', active: false,subitems: ['Links', 'Followers']}
    ]
  }
];


export const activitiesData = [
  { icon:'people1', text: 'You have a bug that needs...', time: 'Just now' },
  { icon:'people2', text: 'Released a new version', time: '59 minutes ago' },
  { icon:'people3', text: 'Submitted a bug', time: '12 hours ago' },
  { icon:'people4', text: 'Modified a data in Page X', time: 'Today, 11:59 AM' },
  { icon:'people5', text: 'Deleted a page in Project X', time: 'Feb 2, 2023' }
];


export const contactsData = [
  { name: 'Natali Craig',icon:'people10' },
  { name: 'Drew Cano',icon:'people6'},
  { name: 'Orlando Diggs', icon:'people11'},
  { name: 'Andi Lane', icon:'people7' },
  { name: 'Kate Morrison', icon:'people8' },
  { name: 'Koray Okumus', icon:'people9' }
];

export const notificationItems = [
  { 
    icon: 'warning', 
    iconColor: 'bg-blue-500 text-white', 
    text: 'You have a bug that needs...', 
    time: 'Now',
    highlighted: true
  },
  { 
    icon: 'profile', 
    iconColor: 'bg-green-100 text-green-600', 
    text: 'New user registered', 
    time: '59 minutes ago'
  },
  { 
    icon: 'warning', 
    iconColor: 'bg-blue-500 text-white', 
    text: 'You have a bug that needs...', 
    time: '12 hours ago'
  },
  { 
    icon: 'hotspot', 
    iconColor: 'bg-purple-100 text-purple-600', 
    text: 'Andi Lane subscribed to you', 
    time: 'Today, 11:59 AM'
  }
];

export const METRICS_DATA = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    trend: "up",
    bgColor: "bg-[#E3F5FF]",
    textColor: "text-gray-800"
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    trend: "down",
    bgColor: "bg-[#F7F9FB] dark:bg-[#1C1C1C]"
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    trend: "up",
    bgColor: "bg-[#F7F9FB] dark:bg-[#1C1C1C]"
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    trend: "up",
    bgColor: "bg-[#E5ECF6]"
  }
];


export const PRODUCTS_DATA = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: '82', amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: '37', amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: '64', amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: '184', amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: '64', amount: '$1,965.81' }
];

export const LOCATIONS_DATA = [
  { city: 'New York', amount: '72K', country: 'us', progress: 72 },
  { city: 'San Francisco', amount: '39K', country: 'us', progress: 39 },
  { city: 'Sydney', amount: '25K', country: 'au', progress: 25 },
  { city: 'Singapore', amount: '61K', country: 'my', progress: 61 }
];



export const SALES_BREAKDOWN = [
  { label: 'Direct', amount: '$300.56', color: COLORS.primary, percentage: 38.6 },
  { label: 'Affiliate', amount: '$135.18', color: COLORS.lgreen, percentage: 21.9 },
  { label: 'Sponsored', amount: '$154.02', color: COLORS.lblue, percentage: 25.0 },
  { label: 'E-mail', amount: '$48.96', color: COLORS.lines.blueDark, percentage: 14.5 }
];


export const CHART_DATA_CONFIG = {
  projections: {
   datasets: [
      {
        label: 'Projected (Base)',
        data: [17, 21, 19, 22, 16, 21],
        backgroundColor: COLORS.lightBlue,
        borderRadius: { topLeft: 3, topRight: 0, bottomLeft: 2, bottomRight: 2 },
        barThickness: 40,
      },
      {
        label: 'Variance',
      
        data: [4, 3, 4, 6, 12, 5], 
        backgroundColor: COLORS.grey, 
        borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 0, bottomRight: 0 },
        barThickness: 40,
      }
    ]
  },
 revenue: {
  datasets: [
    {
      label: 'Current Week',
      data: [8, 19, 15, 10, 18, 27],
      borderColor: COLORS.lines.blue,
      backgroundColor: 'transparent',
      borderWidth: 4,
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: 'Previous Week (Solid)', 
      data: [14, 10, 12, 18, null, null], 
      borderColor: COLORS.secondary,
      backgroundColor: 'transparent',
      borderWidth: 4,
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: 'Previous Week (Dashed)',
      data: [null, null, null, 18, 22, 23],
      backgroundColor: 'transparent',
      borderColor: COLORS.secondary,
      borderWidth: 3,
      borderDash: [8, 8],
      tension: 0.4,
      pointRadius: 0,
    }
  ],
  legend: [
    { label: 'Current Week', value: '$58,211', color: COLORS.secondary},
    { label: 'Previous Week', value: '$68,768', color: COLORS.lines.blue }
  ]
}
};


export const MAP_DATA = [
  { country: "us", value: 111 },
  { country: "au", value: 25 }, 
  { country: "my", value: 61 }
];


export const TABLE_HEADERS = {
  products: [
    { key: 'name', label: 'Name'},
    { key: 'price', label: 'Price'},
    { key: 'quantity', label: 'Quantity'},
    { key: 'amount', label: 'Amount', align: 'right' }
  ]
};

export const SAMPLE_ORDER_DATA = [
  {
    id: "CM9801",
    user: { name: "Natali Craig", avatar: "people2" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "CM9802",
    user: { name: "Kate Morrison", avatar: "people3" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "CM9803",
    user: { name: "Drew Cano", avatar: "people4" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "CM9804",
    user: { name: "Orlando Diggs", avatar: "people5" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "CM9805",
    user: { name: "Andi Lane", avatar: "people6" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "CM9806",
    user: { name: "Sarah Wilson", avatar: "people2" },
    project: "E-commerce Platform",
    address: "Pine Street Seattle",
    date: "2 hours ago",
    status: "In Progress",
  },
  {
    id: "CM9807",
    user: { name: "Michael Chen", avatar: "people3" },
    project: "Mobile App UI",
    address: "Market Street Denver",
    date: "3 hours ago",
    status: "Complete",
  },
  {
    id: "CM9808",
    user: { name: "Jessica Brown", avatar: "people4" },
    project: "Dashboard Analytics",
    address: "Oak Avenue Portland",
    date: "5 hours ago",
    status: "Pending",
  },
  {
    id: "CM9809",
    user: { name: "David Rodriguez", avatar: "people5" },
    project: "Landing Page Redesign",
    address: "Elm Street Austin",
    date: "1 day ago",
    status: "Approved",
  },
  {
    id: "CM9810",
    user: { name: "Emily Johnson", avatar: "people6" },
    project: "CRM Integration",
    address: "Maple Drive Phoenix",
    date: "2 days ago",
    status: "Complete",
  },
  {
    id: "CM9811",
    user: { name: "Alex Thompson", avatar: "people2" },
    project: "API Documentation",
    address: "Cedar Lane Miami",
    date: "3 days ago",
    status: "In Progress",
  },
  {
    id: "CM9812",
    user: { name: "Rachel Davis", avatar: "people3" },
    project: "User Portal",
    address: "Birch Road Chicago",
    date: "4 days ago",
    status: "Pending",
  },
  {
    id: "CM9813",
    user: { name: "James Miller", avatar: "people4" },
    project: "Admin Panel",
    address: "Willow Street Boston",
    date: "5 days ago",
    status: "Rejected",
  },
  {
    id: "CM9814",
    user: { name: "Lisa Garcia", avatar: "people5" },
    project: "Marketing Website",
    address: "Spruce Avenue Dallas",
    date: "1 week ago",
    status: "Approved",
  },
  {
    id: "CM9815",
    user: { name: "Robert Lee", avatar: "people6" },
    project: "Client Dashboard",
    address: "Poplar Court Nashville",
    date: "1 week ago",
    status: "Complete",
  },
  {
    id: "CM9816",
    user: { name: "Amanda White", avatar: "people2" },
    project: "Mobile Responsive Design",
    address: "Ash Boulevard Atlanta",
    date: "2 weeks ago",
    status: "In Progress",
  },
  {
    id: "CM9817",
    user: { name: "Kevin Martinez", avatar: "people3" },
    project: "Database Migration",
    address: "Hickory Lane Houston",
    date: "2 weeks ago",
    status: "Pending",
  },
  {
    id: "CM9818",
    user: { name: "Nicole Anderson", avatar: "people4" },
    project: "Payment Integration",
    address: "Cherry Street Las Vegas",
    date: "3 weeks ago",
    status: "Complete",
  },
  {
    id: "CM9819",
    user: { name: "Brandon Taylor", avatar: "people5" },
    project: "Security Audit",
    address: "Walnut Drive Salt Lake City",
    date: "3 weeks ago",
    status: "Approved",
  },
  {
    id: "CM9820",
    user: { name: "Stephanie Thomas", avatar: "people6" },
    project: "Performance Optimization",
    address: "Chestnut Road Minneapolis",
    date: "1 month ago",
    status: "Rejected",
  },
];