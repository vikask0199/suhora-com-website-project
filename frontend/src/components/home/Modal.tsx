// import React, { CSSProperties, ReactNode } from "react";

// interface ModalProps {
//   onOpen: () => void;
//   children: ReactNode;
// }

// interface ModalContentProps {
//   onClose: () => void;
//   children: ReactNode;
// }

// const modal: CSSProperties = {
//   position: "fixed",
//   zIndex: 1,
//   left: 0,
//   top: 0,
//   width: "100vw",
//   height: "100vh",
//   overflow: "auto",
//   backgroundColor: "rgba(0, 0, 0, 0.8)"
// };

// const close: CSSProperties = {
//   position: "absolute",
//   top: 15,
//   right: 35,
//   color: "#f1f1f1",
//   fontSize: 40,
//   fontWeight: "bold",
//   cursor: "pointer"
// };

// const modalContent: CSSProperties = {
//   display: "flex",
//   alignItems: "center",
//   width: "85%",
//   height: "100%",
//   margin: "auto"
// };

// export const Modal: React.FC<ModalProps> = ({ onOpen, children }) => {
//   return <div onClick={onOpen}>{children}</div>;
// };

// export const ModalContent: React.FC<ModalContentProps> = ({ onClose, children }) => {
//   return (
//     <div style={modal}>
//       <span style={close} onClick={onClose}>
//         &times;
//       </span>
//       <div style={modalContent}>{children}</div>
//     </div>
//   );
// };
