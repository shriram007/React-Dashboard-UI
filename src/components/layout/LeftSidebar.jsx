import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navigationSections } from "../../data/navigationData";
import { Icon } from "../ui/Icons";

export const LeftSidebar = ({ isOpen, onClose, activePage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("favourites");
  const [expandedItems, setExpandedItems] = useState({
    "2-0": true
  });

  const toggleItemExpansion = (key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleNavigation = (path, closeAfter = true) => {
    navigate(path);
    if (closeAfter) {
      onClose?.();
    }
  };

  const getRouteFromLabel = (label) => {
    switch (label.toLowerCase()) {
      case 'default':
        return '/dashboard';
      case 'ecommerce':
        return '/orders'; // Route eCommerce to orders
      case 'projects':
        return '/projects';
      case 'online courses':
        return '/courses';
      case 'user profile':
        return '/profile';
      case 'account':
        return '/account';
      case 'corporate':
        return '/corporate';
      case 'blog':
        return '/blog';
      case 'social':
        return '/social';
      default:
        return '/dashboard';
    }
  };

  const isItemActive = (item, sectionTitle) => {
    const expectedRoute = getRouteFromLabel(item.label);
    return location.pathname === expectedRoute;
  };

  const NavigationItem = ({ item, itemIndex, sectionIndex, sectionTitle }) => {
    const hasSubitems = item.subitems?.length > 0;
    const key = `${sectionIndex}-${itemIndex}`;
    const isExpanded = expandedItems[key];
    const isActive = isItemActive(item, sectionTitle);

    const handleClick = () => {
      if (hasSubitems) {
        toggleItemExpansion(key);
      } else {
        const route = getRouteFromLabel(item.label);
        handleNavigation(route);
      }
    };

    return (
      <div>
        <button
          onClick={handleClick}
          className={`flex items-center w-full py-2 px-3 rounded-md transition-colors justify-between md:justify-start ${
            isActive 
              ? 'bg-[#1C1C1C0D] text-gray-900 dark:bg-[#1C1C1C33] dark:text-white'
              : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-[#1C1C1C33]'
          }`}
        >
          <div className="flex items-center space-x-3">
            {hasSubitems ? (
              <Icon 
                name={isExpanded ? "chevronDown" : "chevronRight"} 
                className="w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform" 
              />
            ) : (
              <div className="px-2"></div>
            )}
            {item.icon ? (
              <Icon name={item.icon} className="w-4 h-4" />
            ) : (
              <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
            )}
            <span className="inline text-black dark:text-white md:hidden lg:inline text-sm">
              {item.label}
            </span>
          </div>
        </button>

        {hasSubitems && (
          <div 
            className={`ml-6 overflow-hidden transition-all duration-300 ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } md:block`}
          >
            {item.subitems.map((subitem, idx) => (
              <button
                key={idx}
                onClick={() => handleNavigation(`/${subitem.toLowerCase().replace(/\s+/g, '-')}`)}
                className="flex w-full pl-6 py-2 text-sm rounded-md transition-colors text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-[#1C1C1C33]"
              >
                {subitem}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const TabSection = (section) => {
    const currentTab = section.tabs.find(tab => tab.id === activeTab);

    return (
      <div>
        <div className="flex">
          {section.tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab.id
                  ? 'text-gray-900 border-gray-900 dark:text-white'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-3 space-y-1">
          {currentTab?.items.length ? (
            currentTab.items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavigation(getRouteFromLabel(item.label))}
                className={`flex items-center space-x-3 px-3 py-2 text-sm rounded-md transition-colors ${
                  location.pathname === getRouteFromLabel(item.label)
                    ? 'bg-gray-100 text-gray-900 dark:bg-[#1C1C1C33] dark:text-white'
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-[#1C1C1C33]'
                }`}
              >
                <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
                <span className="inline md:hidden lg:inline">{item.label}</span>
              </button>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
              {activeTab === 'favourites' ? 'No favorites yet' : 'No recent items'}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={`fixed inset-0 bg-opacity-25 z-30 md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`} 
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-40 h-screen border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-[#1C1C1C] transition-transform duration-300 ease-in-out w-64 md:w-16 lg:w-64 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        aria-label="Sidebar Navigation"
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 md:px-2">
          <div className="flex items-center space-x-2">
            <Icon name="user" className="w-8 h-8" />
            <span className="hidden md:inline text-lg font-semibold text-gray-900 dark:text-white">
              ByeWind
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 md:px-2 space-y-6 overflow-y-auto h-full pb-20">
          {navigationSections.map((section, sectionIndex) => 
            section.type === 'tabs' ? (
              <TabSection key={sectionIndex} {...section} />
            ) : (
              <div key={sectionIndex}>
                {section.title && (
                  <div className="hidden md:block mb-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    {section.title}
                  </div>
                )}
                <div className="space-y-1">
                  {section.items.map((item, idx) => (
                    <NavigationItem
                      key={idx}
                      item={item}
                      itemIndex={idx}
                      sectionIndex={sectionIndex}
                      sectionTitle={section.title}
                    />
                  ))}
                </div>
              </div>
            )
          )}
        </nav>
      </aside>
    </>
  );
};