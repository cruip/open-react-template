import React, { PropsWithChildren } from "react";

interface TooltipProps {
  content: string;
}

const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({
  content,
  children,
}) => {
  return (
    <div className="relative group">
      <div>{children}</div>
      <div
        className={`absolute bg-gray-800 text-white p-2 rounded-md invisible group-hover:visible z-50`}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
