const Input = ({ wrapperProps, labelProps, inputProps }: any) => {
  return (
    <div className="flex flex-col" {...wrapperProps}>
      {labelProps && (
        <label className="text-slate-50" {...labelProps}>
          {labelProps.name}
        </label>
      )}
      <input
        {...inputProps}
        className={`border-gray-50 border-2 bg-transparent outline-none rounded-lg h-[52px] py-2 px-4 text-white ${inputProps?.className}`}
      />
    </div>
  );
};

export default Input;
