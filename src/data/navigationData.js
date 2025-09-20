export const navigationSections = [
  {
    type: 'tabs',
    items: [],
    tabs: [
      { 
        id: 'favourites',
        label: 'Favourites', 
        items: [
        
          { label: 'Dashboard', icon: 'greydot', active: false },
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