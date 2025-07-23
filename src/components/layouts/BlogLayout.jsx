export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {children}
      </div>
    </div>
  );
}
