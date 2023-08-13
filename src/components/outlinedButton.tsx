interface propsInterface {
  children: React.ReactNode;
  onClick: () => void;
}

export default function OutlinedButton({ children, onClick }: propsInterface) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:scale-105 rounded-2xl"
    >
      {children}
    </button>
  );
}
