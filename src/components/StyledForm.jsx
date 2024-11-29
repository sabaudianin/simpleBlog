import { useFormContext } from "react-hook-form";
import { InputErrors } from "./InputErrors";

export const StyledForm = ({ submitForm }) => {
  const { register, handleSubmit } = useFormContext();

  return (
    <section className="flex flex-col w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-4"
      >
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700">Title</span>
          <input
            {...register("title")}
            placeholder="Add title"
            type="text"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <InputErrors name="title" />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700">Body</span>
          <textarea
            {...register("body")}
            placeholder="Write your post here..."
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <InputErrors name="body" />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700">User</span>
          <input
            {...register("user")}
            placeholder="Your Name"
            type="text"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <InputErrors name="user" />
        </label>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Wyslij
        </button>
      </form>
    </section>
  );
};
