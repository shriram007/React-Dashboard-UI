import React from 'react';
import { Icon } from '../ui/Icons';
import useDarkMode from '../../hooks/useDarkMode';

export const TopNavbar = ({ onMenuClick, onNotificationClick, screenSize, activePage }) => {
  const isMobile = screenSize === 'mobile';
  const isTablet = screenSize === 'tablet';
  const isDesktop = screenSize === 'desktop';
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const buttonClasses = "p-1.5 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 focus:outline-none hover:bg-gray-100 dark:hover:bg-[#1C1C1C33] rounded-lg transition-colors";
  const mobileButtonClasses = "p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 focus:outline-none hover:bg-gray-100 dark:hover:bg-[#1C1C1C33] rounded-lg transition-colors";

  return (
    <div className="bg-white dark:bg-[#1C1C1C] border-b border-gray-200 dark:border-gray-700 px-4 py-3 relative z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          {isMobile && (
            <button onClick={onMenuClick} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 focus:outline-none flex-shrink-0">
              <Icon name="menu" className="w-6 h-6" />
            </button>
          )}

          <div className="flex items-center space-x-2 flex-shrink-0">
            <button className={buttonClasses}>
              <Icon name="dots" className="w-5 h-5" />
            </button>
            <button className={buttonClasses}>
              <Icon name="star" className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 min-w-0">
            {isDesktop && activePage.breadcrumb && activePage.breadcrumb.length > 1 && (
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                {activePage.breadcrumb.map((crumb, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <span className="text-gray-400 dark:text-gray-500">/</span>}
                    <span className={index === activePage.breadcrumb.length - 1 ? 'text-gray-900 dark:text-gray-100 font-medium' : ''}>
                      {crumb}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            )}

            {(isTablet || isMobile) && activePage.breadcrumb && activePage.breadcrumb.length > 1 && !isMobile && (
              <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 mb-1">
                {activePage.breadcrumb.slice(-2).map((crumb, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <span className="text-gray-400 dark:text-gray-500">/</span>}
                    <span className="truncate">{crumb}</span>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-shrink-0">
          {isDesktop && (
            <>
              <div className="relative mr-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-64 pl-10 pr-12 py-2 bg-gray-50 dark:bg-[#1C1C1C33] border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="search" className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                </div>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Icon name="Text" className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button onClick={toggleDarkMode} className={buttonClasses}>
                  <Icon name="sun" className="w-5 h-5" />
                </button>
                <button className={buttonClasses}>
                  <Icon name="chart" className="w-5 h-5" />
                </button>
                <button onClick={onNotificationClick} className={buttonClasses}>
                  <Icon name="notification" className="w-5 h-5" />
                </button>
                <button className={buttonClasses}>
                  <Icon name="dots" className="w-5 h-5" />
                </button>
              </div>
            </>
          )}

          {isTablet && (
            <>
              <div className="relative mr-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-40 pl-10 pr-4 py-2 bg-gray-50 dark:bg-[#1C1C1C33] border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="search" className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button onClick={toggleDarkMode} className={mobileButtonClasses}>
                  <Icon name={isDarkMode ? "moon" : "sun"} className="w-5 h-5" />
                </button>
                <button onClick={onNotificationClick} className={mobileButtonClasses}>
                  <Icon name="notification" className="w-5 h-5" />
                </button>
                <button className={mobileButtonClasses}>
                  <Icon name="dots" className="w-5 h-5" />
                </button>
              </div>
            </>
          )}

          {isMobile && (
            <div className="flex items-center space-x-1">
              <button className={mobileButtonClasses}>
                <Icon name="search" className="w-5 h-5" />
              </button>
              <button onClick={toggleDarkMode} className={mobileButtonClasses}>
                <Icon name={isDarkMode ? "moon" : "sun"} className="w-5 h-5" />
              </button>
              <button onClick={onNotificationClick} className={mobileButtonClasses}>
                <Icon name="notification" className="w-5 h-5" />
              </button>
              <button className={mobileButtonClasses}>
                <Icon name="dots" className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
