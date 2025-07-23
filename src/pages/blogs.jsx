import React from "react";

const BlogPageLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Card List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Blog Posts</h2>

          {/* Post Card */}
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded-xl p-6 space-y-2 border"
            >
              <h3 className="text-xl font-bold text-gray-800">Post Title</h3>
              <p className="text-gray-600">
                This is a sample article content that represents the post.
              </p>
              <p className="text-sm text-gray-400">By: Author Name</p>
              <div className="flex gap-3 mt-2">
                <button className="text-blue-600 hover:underline text-sm">
                  Edit
                </button>
                <button className="text-red-600 hover:underline text-sm">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Search + Form */}
        <div className="space-y-6">
          {/* Search */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Search Post
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search by title..."
                className="flex-1 border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>

          {/* Create Form */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4 border">
            <h2 className="text-xl font-semibold text-gray-800">
              Create New Post
            </h2>

            <div>
              <label className="block text-sm mb-1 text-gray-700">Title</label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Article
              </label>
              <textarea
                className="w-full border px-4 py-2 rounded-md shadow-sm"
                rows={4}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700">Author</label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded-md shadow-sm"
              />
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Submit Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageLayout;
