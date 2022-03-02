import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="bottom" ref={ref} {...props} />;
});

const Modal = ({ open, close, children, isFullWidth, maxWidth, title }) => {
  const handleClose = () => {
    close();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={isFullWidth}
        TransitionComponent={Transition}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div>
            <h3 className="font-semibold">{title}</h3>
          </div>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;