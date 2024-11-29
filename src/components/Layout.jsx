export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          My Simple Blog
        </h1>
      </header>
      {children}
    </div>
  );
};
