export function CardPost({ post, onClick, isDeleting, onClickEdit }) {
  return (
    <div
      key={post.id}
      className="bg-white shadow rounded-xl p-6 space-y-2 border"
    >
      <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
      <p className="text-gray-600">{post.description}</p>
      <p className="text-sm text-gray-400">By: {post.author}</p>
      <div className="flex gap-3 mt-2">
        <button
          className="text-blue-600 hover:underline text-sm"
          onClick={onClickEdit}
        >
          Edit
        </button>
        <button
          className="text-red-600 hover:underline text-sm"
          onClick={onClick}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
