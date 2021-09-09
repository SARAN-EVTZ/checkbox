import React from "react";

import DropdownMenu, {
  DropdownItemCheckbox,
  DropdownItemGroupCheckbox
} from "@atlaskit/dropdown-menu";

const DropdownItemCheckboxDefaultSelectedExample = () => {
  return (
    <DropdownMenu trigger="Job type" triggerType="button">
      <DropdownItemGroupCheckbox id="actions">
        <DropdownItemCheckbox id="delete">Full time (02)</DropdownItemCheckbox>
        <DropdownItemCheckbox id="copy">Part time (04)</DropdownItemCheckbox>
        <DropdownItemCheckbox id="work">Internship (04)</DropdownItemCheckbox>
        <DropdownItemCheckbox id="move">Contract (04)</DropdownItemCheckbox>
      </DropdownItemGroupCheckbox>
    </DropdownMenu>
  );
};

export default DropdownItemCheckboxDefaultSelectedExample;
