import React, { useState, useContext } from "react";
import i18next from "i18next";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { CurrentLanguage } from "../../../utils/Store";

export default function LanguageSwitch() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);

  const [currentLn] = useContext(CurrentLanguage);

  return (
    <Dropdown size="sm" isOpen={isOpen} toggle={toggle} className="ml-24">
      <DropdownToggle style={{ background: "transparent", border: "none" }}>
        {currentLn}
      </DropdownToggle>
      <DropdownMenu
        modifiers={{
          setMaxHeight: {
            enabled: true,
            order: 890,
            fn: (data) => {
              return {
                ...data,
                styles: {
                  ...data.styles,
                  overflow: "auto",
                  maxHeight: "300px",
                },
              };
            },
          },
        }}
      >
        <DropdownItem
          onClick={() => {
            i18next.changeLanguage("ar");
          }}
        >
          عربي
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            i18next.changeLanguage("en");
          }}
        >
          English
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
