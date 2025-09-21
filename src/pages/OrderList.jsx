import React, { useState, useMemo, useEffect } from "react";
import { Icon } from "../components/ui/Icons";
import { useResponsive } from "../hooks/useResponsive";
import {
 SAMPLE_ORDER_DATA
} from "../data/navigationData";


const sampleOrderData = SAMPLE_ORDER_DATA;

const StatusBadge = ({ status }) => {
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "in progress":
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800";
      case "complete":
        return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800";
      case "pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800";
      case "approved":
        return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800";
      case "rejected":
        return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800";
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyle(
        status
      )}`}
    >
      <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-current opacity-75"></span>
      {status}
    </span>
  );
};

const TopToolbar = ({
  searchTerm,
  setSearchTerm,
  sortDirection,
  onSort,
  screenSize,
}) => {
  const isMobile = screenSize === "mobile";

  return (
    <div className="bg-white dark:bg-[#1C1C1C] rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1V15M1 8H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                d="M14.625 5C14.625 5.16576 14.5592 5.32473 14.4419 5.44194C14.3247 5.55915 14.1658 5.625 14 5.625H4C3.83424 5.625 3.67527 5.55915 3.55806 5.44194C3.44085 5.32473 3.375 5.16576 3.375 5C3.375 4.83424 3.44085 4.67527 3.55806 4.55806C3.67527 4.44085 3.83424 4.375 4 4.375H14C14.1658 4.375 14.3247 4.44085 14.4419 4.55806C14.5592 4.67527 14.625 4.83424 14.625 5ZM17.125 0.625H0.875C0.70924 0.625 0.550268 0.690848 0.433058 0.808058C0.315848 0.925269 0.25 1.08424 0.25 1.25C0.25 1.41576 0.315848 1.57473 0.433058 1.69194C0.550268 1.80915 0.70924 1.875 0.875 1.875H17.125C17.2908 1.875 17.4497 1.80915 17.5669 1.69194C17.6842 1.57473 17.75 1.41576 17.75 1.25C17.75 1.08424 17.6842 0.925269 17.5669 0.808058C17.4497 0.690848 17.2908 0.625 17.125 0.625ZM10.875 8.125H7.125C6.95924 8.125 6.80027 8.19085 6.68306 8.30806C6.56585 8.42527 6.5 8.58424 6.5 8.75C6.5 8.91576 6.56585 9.07473 6.68306 9.19194C6.80027 9.30915 6.95924 9.375 7.125 9.375H10.875C11.0408 9.375 11.1997 9.30915 11.3169 9.19194C11.4342 9.07473 11.5 8.91576 11.5 8.75C11.5 8.58424 11.4342 8.42527 11.3169 8.30806C11.1997 8.19085 11.0408 8.125 10.875 8.125Z"
                fill="#1C1C1C"
              />
            </svg>
          </button>

          <button
            onClick={onSort}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            <svg
              stroke="currentColor"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.19194 10.3081C1.07473 10.1908 0.91576 10.125 0.75 10.125C0.58424 10.125 0.425269 10.1908 0.308058 10.3081C0.190848 10.4253 0.125 10.5842 0.125 10.75C0.125 10.9158 0.190848 11.0747 0.308058 11.1919L2.80806 13.6919C2.92527 13.8092 3.08424 13.875 3.25 13.875C3.41576 13.875 3.57473 13.8092 3.69194 13.6919L6.19171 11.1922C6.30892 11.075 6.375 10.9158 6.375 10.75C6.375 10.5842 6.30915 10.4253 6.19194 10.3081C6.07473 10.1908 5.91576 10.125 5.75 10.125C5.58424 10.125 5.42527 10.1908 5.30806 10.3081L3.25 12.3661L1.19194 10.3081Z"
                fill="#1C1C1C"
              />
              <path
                d="M2.625 0.75V13.25C2.625 13.5952 2.90482 13.875 3.25 13.875C3.59518 13.875 3.875 13.5952 3.875 13.25V0.75C3.875 0.404822 3.59518 0.125 3.25 0.125C2.90482 0.125 2.625 0.404822 2.625 0.75Z"
                fill="#1C1C1C"
              />
              <path
                d="M12.8077 3.69162C12.9249 3.80883 13.0842 3.875 13.25 3.875C13.4158 3.875 13.5747 3.80915 13.6919 3.69194C13.8092 3.57473 13.875 3.41576 13.875 3.25C13.875 3.08424 13.8092 2.92527 13.6919 2.80806L11.1919 0.308058C11.0747 0.190848 10.9158 0.125 10.75 0.125C10.5842 0.125 10.4253 0.190848 10.3081 0.308058L7.80806 2.80806C7.69085 2.92527 7.625 3.08424 7.625 3.25C7.625 3.26001 7.62524 3.27002 7.62572 3.28002C7.63318 3.43522 7.69819 3.58207 7.80806 3.69194C7.92527 3.80915 8.08424 3.875 8.25 3.875C8.41576 3.875 8.57473 3.80915 8.69194 3.69194L10.75 1.63388L12.8077 3.69162Z"
                fill="#1C1C1C"
              />
              <path
                d="M11.375 13.25V0.75C11.375 0.404822 11.0952 0.125 10.75 0.125C10.4048 0.125 10.125 0.404822 10.125 0.75V13.25C10.125 13.5952 10.4048 13.875 10.75 13.875C11.0952 13.875 11.375 13.5952 11.375 13.25Z"
                fill="#1C1C1C"
              />
            </svg>
          </button>
        </div>

        <div className={`relative ${isMobile ? "flex-1" : "w-80"}`}>
          <Icon
            name="search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500"
          />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-[#1C1C1C33] border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

const OrderTable = ({ orders, screenSize }) => {
  const isMobile = screenSize === "mobile";

  if (isMobile) {
    return (
      <div className="space-y-4">
        {orders.map((order, index) => (
          <div
            key={order.id}
            className="bg-white dark:bg-[#1C1C1C] rounded-lg border border-gray-200 dark:border-gray-700 p-4"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Icon name={order.user.avatar} className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {order.user.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    #{order.id}
                  </p>
                </div>
              </div>
              <StatusBadge status={order.status} />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-900 dark:text-white">
                {order.project}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {order.address}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {order.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#1C1C1C] rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#1C1C1C33] border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-[#1C1C1C] dark:checked:bg-blue-600"
                />
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                User
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Project
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Address
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 dark:hover:bg-[#1C1C1C33] transition-colors"
              >
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-[#1C1C1C] dark:checked:bg-blue-600"
                  />
                </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  #{order.id}
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Icon name={order.user.avatar} className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {order.user.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 dark:text-white">
                  {order.project}
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {order.address}
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {order.date}
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-4 py-4 text-right">
                  <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <Icon name="moreVertical" className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  screenSize,
  totalItems,
  itemsPerPage,
}) => {
  const isMobile = screenSize === "mobile";

  const getVisiblePages = () => {
    if (isMobile) return [currentPage];

    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-end mt-6">
      <div className="flex items-center space-x-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Previous page"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {!isMobile &&
          visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`min-w-[36px] h-9 px-3 text-sm font-medium rounded-md transition-colors ${
                page === currentPage
                  ? "bg-[#1C1C1C0D] text-gray-900 dark:bg-[#FFFFFF1A] dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {page}
            </button>
          ))}

        {isMobile && (
          <div className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400 bg-[#1C1C1C0D] dark:bg-[#FFFFFF1A] rounded-md">
            {currentPage} of {totalPages}
          </div>
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Next page"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const OrderList = () => {
  const screenSize = useResponsive();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortDirection, setSortDirection] = useState("asc");
  const itemsPerPage = 5;

  const handleSort = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    setCurrentPage(1);
  };

  const processedOrders = useMemo(() => {
    let filtered = [...sampleOrderData];
    if (searchTerm) {
      filtered = filtered.filter(
        (order) =>
          order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      const comparison = a.project.localeCompare(b.project);
      return sortDirection === "desc" ? -comparison : comparison;
    });

    return filtered;
  }, [searchTerm, sortDirection]);

  const totalPages = Math.ceil(processedOrders.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return processedOrders.slice(indexOfFirstItem, indexOfLastItem);
  }, [processedOrders, currentPage, itemsPerPage]);


  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1C1C1C] p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Orders
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage and track all your orders
        </p>
      </div>

      <TopToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortDirection={sortDirection}
        onSort={handleSort}
        screenSize={screenSize}
      />
      <OrderTable orders={currentItems} screenSize={screenSize} />

      {processedOrders.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          screenSize={screenSize}
          totalItems={processedOrders.length}
          itemsPerPage={itemsPerPage}
        />
      )}

      {processedOrders.length === 0 && (
        <div className="bg-white dark:bg-[#1C1C1C] rounded-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
          <Icon
            name="search"
            className="w-12 h-12 text-gray-400 mx-auto mb-4"
          />
          <p className="text-gray-500 dark:text-gray-400">
            No orders found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderList;
