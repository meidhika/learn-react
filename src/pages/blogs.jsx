import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, getAllPosts } from "../services/post.service";
import loading from "../assets/loading.png";
import loadingButton from "../assets/loading-button.png";
import BlogLayout from "../components/layouts/BlogLayout";
import { CardPost } from "../components/ui/CardPost";
import { SearchPost } from "../components/ui/SearchPost";
import { FormInput } from "../components/form/FormInput";
import { useState } from "react";

const BlogPageLayout = () => {
  const [keyword, setKeyword] = useState("");
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
    mutate(formData);
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
          data?.map((post) => <CardPost key={post.id} post={post} />)
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
              disabled={isPending}
              className="flex justify-center items-center w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {isPending ? (
                <img
                  src={loadingButton}
                  alt="loading"
                  className="w-5 h-5 animate-spin flex justify-center items-center"
                />
              ) : (
                "Submit Post"
              )}
            </button>
          </form>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogPageLayout;
