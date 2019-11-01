import React from "react";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle
} from "office-ui-fabric-react/lib/DocumentCard";
import { Stack } from "office-ui-fabric-react";

import { Icon } from "office-ui-fabric-react/lib/Icon";

const verticalGapStackTokens = {
  childrenGap: 10,
  padding: 10
};

const EmployeeCard = ({ id, name, created, img, onDelete }) => {
  return (
    <DocumentCard aria-label="Default Document Card with large file name. Created by Annie Lindqvist a few minutes ago.">
      <Stack
        horizontal
        disableShrink
        horizontalAlign="end"
        tokens={verticalGapStackTokens}
      >
        <Icon iconName="Delete" onClick={() => onDelete(id)} />
      </Stack>
      <DocumentCardActivity
        activity={created}
        people={[{ name, profileImageSrc: img }]}
      />
    </DocumentCard>
  );
};

export default EmployeeCard;
