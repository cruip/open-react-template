const Item = ({ title, desc }: any) => {
  return (
    <div className="bg-slate-400 hover:bg-slate-500 p-6 rounded-lg">
      <button>icon</button>
      <h4 className="text-2xl font-medium my-2">{title}</h4>
      <p className="text-md font-light leading-relaxed mb-5">{desc}</p>
      <button className="bg-blue-500 text-white px-6 py-1 rounded-md text-lg font-medium">
        lorem
      </button>
      {/* <rightArrow /> */}
    </div>
  );
};

export default Item;
