import type { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
          maxWidth: "480px",
          width: "90%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          padding: "24px",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "16px",
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#888",
            lineHeight: 1,
          }}
          aria-label="Sulje"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}