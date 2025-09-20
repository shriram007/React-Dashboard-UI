import { activitiesData, contactsData, notificationItems } from '../../data/navigationData';
import { Icon } from '../ui/Icons';

export const RightNotificationBar = ({ isVisible, onClose, screenSize }) => {
  const isDesktop = screenSize === 'desktop';
  const isMobile = screenSize === 'mobile';

  if (!isVisible) return null;

  const sidebarClasses = `
    ${isMobile ? 'w-full' : 'w-80'} bg-white dark:bg-[#1C1C1C] border-l border-gray-200 dark:border-gray-700 
    h-screen fixed right-0 top-0 z-30 transition-all duration-300
    ${isVisible ? 'translate-x-0' : 'translate-x-full'}
  `;

  const renderNotificationItem = (item, index) => (
    <div key={index} className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
      item.highlighted 
        ? 'bg-blue-50 border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800' 
        : 'hover:bg-gray-50 dark:hover:bg-[#1C1C1C33]'
    }`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${item.iconColor}`}>
        {item.icon && 
          <Icon name={item.icon} className="w-4 h-4" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{item.text}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.time}</p>
      </div>
    </div>
  );

  const renderActivityItem = (activity, index) => (
    <div key={index} className="flex items-start space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-[#1C1C1C33] rounded-lg transition-colors">
      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0`}>
        {activity.icon && 
          <Icon name={activity.icon} className="w-6 h-6" />
        }
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 dark:text-white">{activity.text}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
      </div>
    </div>
  );

  const renderContactItem = (contact, index) => (
    <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-[#1C1C1C33] rounded-lg cursor-pointer transition-colors">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${contact.color}`}>
        {contact.icon && (
          <Icon name={contact.icon} className="w-6 h-6" />
        )}
      </div>
      <span className="text-sm text-gray-900 dark:text-white truncate">{contact.name}</span>
    </div>
  );

  return (
    <>
      {!isDesktop && isVisible && (
        <div 
          className="fixed inset-0 bg-opacity-25 z-20"
          onClick={onClose}
        />
      )}
      
      <div className={sidebarClasses}>
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1C1C1C33] rounded-lg transition-colors"
            >
              <Icon name="close" className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="h-full overflow-y-auto pb-20 hide-scrollbar">

          {/* Notifications Section */}

          <div className="p-4 space-y-3">
            {notificationItems?.length ? (
              notificationItems.map(renderNotificationItem)
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">No notifications</p>
            )}
          </div>

          {/* Activities Section  */}

          <div className="px-4 pb-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 px-1">Activities</h3>
            <div className="space-y-2">
              {activitiesData?.length ? (
                activitiesData.map(renderActivityItem)
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center py-4">No activities</p>
              )}
            </div>
          </div>

          {/* Contacts Section */}
          
          <div className="px-4 pb-6">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 px-1">Contacts</h3>
            <div className="space-y-2">
              {contactsData?.length ? (
                contactsData.map(renderContactItem)
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center py-4">No contacts</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
