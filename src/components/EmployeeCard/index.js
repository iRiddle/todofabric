import React from "react";
import {
  DocumentCard,
  DocumentCardActivity
} from "office-ui-fabric-react/lib/DocumentCard";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Stack } from "office-ui-fabric-react";

import { Icon } from "office-ui-fabric-react/lib/Icon";

const verticalGapStackTokens = {
  childrenGap: 10,
  padding: 10
};

const iconName = {
  cursor: "pointer"
};

const EmployeeCard = ({
  id,
  name,
  created,
  img,
  email,
  job,
  phone,
  office,
  onDelete,
  onUpdate
}) => {
  return (
    <DocumentCard aria-label="Document Employee's Card">
      <Stack tokens={verticalGapStackTokens}>
        <Stack horizontal horizontalAlign="space-between">
          <Stack horizontal>
            <Text variant="smallPlus">{email}</Text>
          </Stack>
          <Stack horizontal gap={15}>
            <Icon
              iconName="Edit"
              onClick={() => onUpdate(id)}
              style={iconName}
            />
            <Icon
              iconName="Delete"
              onClick={() => onDelete(id)}
              style={iconName}
            />
          </Stack>
        </Stack>
        <Stack horizontal horizontalAlign="space-between">
          <Text variant="smallPlus">{job}</Text>
          <Text variant="smallPlus">{phone}</Text>
        </Stack>
        <Stack horizontal horizontalAlign="space-between">
          <Text variant="xSmall">{`Office: ${office}`}</Text>
        </Stack>
      </Stack>
      <DocumentCardActivity
        activity={created}
        people={[{ name, profileImageSrc: img }]}
      />
    </DocumentCard>
  );
};

export default EmployeeCard;
