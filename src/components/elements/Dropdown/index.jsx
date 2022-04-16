import React, { useState } from "react";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";

export const Dropdown = ({ title, options, dropDownRight }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <DropdownMenu
        isOpen={isOpen}
        onOpenChange={(attrs) => {
          setIsOpen(attrs.isOpen);
        }}
        trigger={title}
        placement={dropDownRight ? "right-start" : ""}
      >
        <DropdownItemGroup title="Group 1">
          {options.map((option) => {
            if (option.options) {
              return (
                <Dropdown
                  title={option.title}
                  options={option.options}
                  dropDownRight
                />
              );
            } else {
              return (
                <DropdownItem
                  key={option.title}
                  onMouseDown={() => {
                    //alert(`You clicked ${option.title}`);
                    //TODO: use react-router instead
                    window.location.href = option.route;
                  }}
                >
                  {option.title}
                </DropdownItem>
              );
            }
          })}
        </DropdownItemGroup>
      </DropdownMenu>
    </div>
  );
};
