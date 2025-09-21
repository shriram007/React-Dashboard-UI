import { useState } from "react";
import { useLocation } from "react-router-dom";
import { LeftSidebar } from "./LeftSidebar";
import { TopNavbar } from "./TopNavbar";
import { RightNotificationBar } from "./RightNotificationbar";
import { useResponsive } from "../../hooks/useResponsive";

export const Layout = ({ children }) => {
  const location = useLocation();
  const screenSize = useResponsive();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationBarOpen, setNotificationBarOpen] = useState(false);

  const getActivePageInfo = () => {
    const path = location.pathname;
    switch (path) {
      case '/dashboard':
        return {
          title: "Default",
          breadcrumb: ["Dashboards", "Default"],
          section: "Dashboards"
        };
      case '/orders':
      case '/ecommerce':
        return {
          title: "eCommerce",
          breadcrumb: ["Dashboards", "eCommerce", "Orders"],
          section: "Dashboards"
        };
      case '/projects':
        return {
          title: "Projects",
          breadcrumb: ["Dashboards", "Projects"],
          section: "Dashboards"
        };
      case '/courses':
        return {
          title: "Online Courses",
          breadcrumb: ["Dashboards", "Online Courses"],
          section: "Dashboards"
        };
      case '/profile':
        return {
          title: "User Profile",
          breadcrumb: ["Pages", "User Profile"],
          section: "Pages"
        };
      default:
        return {
          title: "Dashboard",
          breadcrumb: ["Dashboards", "Default"],
          section: "Dashboards"
        };
    }
  };

  const activePage = getActivePageInfo();

  const getMainContentClasses = () => {
    switch (screenSize) {
      case "desktop":
        return `ml-64 ${notificationBarOpen ? 'mr-80' : ''}`;
      case "tablet":
        return "ml-16";
      default:
        return "";
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-[#1C1C1C] relative">
      <LeftSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        screenSize={screenSize}
        activePage={activePage}
      />

      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${getMainContentClasses()}`}>
        <TopNavbar
          onMenuClick={() => setSidebarOpen(true)}
          onNotificationClick={() => setNotificationBarOpen(prev => !prev)}
          screenSize={screenSize}
          activePage={activePage}
        />

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>

      <RightNotificationBar
        isVisible={notificationBarOpen}
        onClose={() => setNotificationBarOpen(false)}
        screenSize={screenSize}
      />
    </div>
  );
};