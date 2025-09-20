import { useState } from "react";
import { LeftSidebar } from "./LeftSidebar";
import { TopNavbar } from "./TopNavbar";
import { RightNotificationBar } from "./RightNotificationbar";
import { useResponsive } from "../../hooks/useResponsive";

export const Layout = ({ children }) => {
  const screenSize = useResponsive();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationBarOpen, setNotificationBarOpen] = useState(false);
  const [activePage, setActivePage] = useState({
    title: "Default",
    breadcrumb: ["Dashboards", "Default"],
  });

  const handlePageChange = (pageInfo) => {
    setActivePage(pageInfo);
    if (screenSize === "mobile") setSidebarOpen(false);
  };

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
        onPageChange={handlePageChange}
        activePage={activePage}
      />

      <div
        className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${getMainContentClasses()}`}
      >
        <TopNavbar
          onMenuClick={() => setSidebarOpen(true)}
          onNotificationClick={() =>
            setNotificationBarOpen((prev) => !prev)
          }
          screenSize={screenSize}
          activePage={activePage}
        />

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>


      <RightNotificationBar
        isVisible={notificationBarOpen}
        onClose={() => setNotificationBarOpen(false)}
        screenSize={screenSize}
      />
    </div>
  );
};
