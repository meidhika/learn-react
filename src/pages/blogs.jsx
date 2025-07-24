import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createPost,
  deletePost,
  getAllPosts,
  updatePost,
} from "../services/post.service";
import loading from "../assets/loading.png";
import loadingButton from "../assets/loading-button.png";
import BlogLayout from "../components/layouts/BlogLayout";
import { CardPost } from "../components/ui/CardPost";
import { SearchPost } from "../components/ui/SearchPost";
import { FormInput } from "../components/form/FormInput";
import { useState } from "react";

const BlogPageLayout = () => {
  const [keyword, setKeyword] = useState("");
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  const { data, isLoading, isRefetching } = useQuery({
    queryKey: ["posts", keyword],
    queryFn: getAllPosts,
  });
  const handleSearch = (value) => {
    setKeyword(value);
  };
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      // Refresh data setelah post berhasil dibuat
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setFormData({ title: "", description: "", author: "" });
    },
  });

  const { mutate: editPost, isPending: isUpdating } = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setEditingPost(null);
      setFormData({ title: "", description: "", author: "" });
    },
  });

  const { mutate: removePost } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setDeletingId(null); // reset setelah sukses
    },
    onError: () => {
      setDeletingId(null); // reset juga kalau error
    },
  });

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      editPost({ id: editingPost.id, data: formData });
    } else {
      mutate(formData);
    }
  };

  return (
    <BlogLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Blog Posts</h2>
        {isLoading || isRefetching ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <img
              src={loading}
              alt="loading"
              className="w-12 h-12 animate-spin"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data?.map((post) => (
              <CardPost
                key={post.id}
                post={post}
                onClick={() => setSelectedPostId(post.id)}
                isDeleting={deletingId === post.id}
                onClickEdit={() => {
                  setEditingPost(post);
                  setFormData({
                    title: post.title,
                    description: post.description,
                    author: post.author,
                  });
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="space-y-6 md:mt-10">
        <SearchPost
          onSearch={handleSearch}
          label="Search Post"
          placeholder="Search..."
          buttonText="Search"
        />

        <div className="bg-white p-6 rounded-xl shadow space-y-4 border">
          <h2 className="text-xl font-semibold text-gray-800">
            Create New Post
          </h2>

          <form onSubmit={handleSubmit}>
            <FormInput
              label="Title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Input your title here"
            />
            <FormInput
              label="Description"
              type="textarea"
              name="description"
              onChange={handleChange}
              value={formData.description}
              placeholder="Input your description here"
            />
            <FormInput
              label="Author"
              type="text"
              name="author"
              onChange={handleChange}
              value={formData.author}
              placeholder="Input your author here"
            />
            <button
              disabled={isPending || isUpdating}
              className="flex justify-center items-center w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {isPending || isUpdating ? (
                <img
                  src={loadingButton}
                  alt="loading"
                  className="w-5 h-5 animate-spin"
                />
              ) : editingPost ? (
                "Update Post"
              ) : (
                "Submit Post"
              )}
            </button>
          </form>
        </div>
      </div>
      {selectedPostId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md space-y-4">
            <h3 className="text-lg font-semibold">Are you sure?</h3>
            <p>Do you really want to delete this post?</p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100"
                onClick={() => setSelectedPostId(null)} // cancel
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
                onClick={() => {
                  setDeletingId(selectedPostId);
                  removePost(selectedPostId);
                  setSelectedPostId(null); // tutup modal setelah klik delete
                }}
              >
                {deletingId === selectedPostId ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </BlogLayout>
  );
};

export default BlogPageLayout;
