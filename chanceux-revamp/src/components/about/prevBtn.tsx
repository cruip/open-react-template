type prevProps = {
  className: string;
  onClick: any;
};

const PrevBtn: React.FC<prevProps> = ({ className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
    </button>
  );
};

export default PrevBtn;
