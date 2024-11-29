export const Layout = ({ children }) => {
  return (
    <section className="container mx-auto px-4 py-8 bg-gradient-to-b from-indigo-300 via-indigo-700 to-indigo-900 min-h-screen">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-center text-blue-900 font-serif">
          My Simple Blog
        </h1>
      </header>
      {children}
    </section>
  );
};
