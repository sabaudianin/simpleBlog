import { useFormContext } from 'react-hook-form';

export const InputErrors = ({ name }) => {
  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  if (!error) return null;

  return <p style={{ color: 'red' }}>{error.message}</p>;
};
