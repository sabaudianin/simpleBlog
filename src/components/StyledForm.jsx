import { useFormContext } from 'react-hook-form';
import { InputErrors } from './InputErrors';

export const StyledForm = ({ submitForm }) => {
  const { register, handleSubmit } = useFormContext();

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input
        {...register('title')}
        placeholder="add title"
        type="text"
      />
      <InputErrors name="title" />
      <textarea
        {...register('body')}
        placeholder="Write your post here..."
        type="text"
      />
      <InputErrors name="body" />
      <input
        {...register('user')}
        placeholder="Your Name"
        type="text"
      />
      <InputErrors name="user" />
      <button type="submit">Wyslij</button>
    </form>
  );
};
