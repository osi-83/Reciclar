type Props = {
  children: React.ReactNode;
};

export const AuthTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {children}
      </div>
    </div>
  );
};