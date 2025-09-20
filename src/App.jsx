import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <div className="p-4 lg:p-6 bg-gray-50 dark:bg-[#1C1C1C] min-h-screen overflow-hidden">
        <div className="bg-white dark:bg-[#1C1C1C] rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-8 text-center shadow-sm dark:shadow-lg">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            React Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            dashboard content
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default App;
