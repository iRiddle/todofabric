import React from "react";
import ImageUploader from "react-images-upload";
import { Dialog, DialogFooter } from "office-ui-fabric-react/lib/Dialog";
import { Stack, PrimaryButton, DefaultButton } from "office-ui-fabric-react";
import {
  TextField,
  MaskedTextField
} from "office-ui-fabric-react/lib/TextField";

const Modal = ({
  hideDialog,
  closeDialog,
  handleData,
  onSave,
  onDropImg,
  name,
  office,
  email,
  phone,
  job
}) => {
  return (
    <Dialog
      hidden={hideDialog}
      onDismiss={closeDialog}
      dialogContentProps={{
        title: "Add employee"
      }}
      modalProps={{
        titleAriaId: "test1",
        subtitleAriaId: "test2",
        isBlocking: false,
        dragOptions: true
      }}
    >
      <Stack>
        <Stack horizontal horizontalAlign="space-between" gap={15}>
          <TextField
            label="Full name"
            placeholder="Enter full name"
            value={name}
            onChange={e => handleData(e, "name")}
          />
          <TextField
            label="Position"
            placeholder="Enter position"
            value={job}
            onChange={e => handleData(e, "job")}
          />
        </Stack>
        <Stack horizontal horizontalAlign="space-between" gap={15}>
          <MaskedTextField
            label="Phone"
            mask="+ 9 (999) 999-99-99"
            value={phone}
            onChange={e => handleData(e, "phone")}
          />
          <TextField
            label="E-mail"
            placeholder="Enter email"
            value={email}
            onChange={e => handleData(e, "email")}
          />
        </Stack>
        <Stack>
          <TextField
            label="Office"
            placeholder="Enter office"
            value={office}
            onChange={e => handleData(e, "office")}
          />
          <ImageUploader
            withIcon={true}
            withPreview={true}
            buttonText="Choose image"
            onChange={onDropImg}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
        </Stack>
      </Stack>

      <DialogFooter>
        <PrimaryButton onClick={onSave} text="Save" />
        <DefaultButton onClick={closeDialog} text="Cancel" />
      </DialogFooter>
    </Dialog>
  );
};

export default Modal;
