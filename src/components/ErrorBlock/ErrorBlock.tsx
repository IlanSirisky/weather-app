const ErrorBlock: React.FC<{ title: string; message: string }> = ({
  title,
  message,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorBlock;
