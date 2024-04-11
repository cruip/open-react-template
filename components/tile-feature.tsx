import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

interface TileComponentProps {
  icon: any;
  title: string;
  description: string;
}

const TileComponent: React.FC<TileComponentProps> = ({icon, title, description}) => {
  return (
    <div className="bg-slate-800 text-white p-4 w-64 border border-gray-600">
      <div className="flex text-white mb-4">
        <FontAwesomeIcon icon={icon} size="sm" className="mr-2 h-12 bg-emerald-600 p-2 rounded-lg" />
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default TileComponent;
