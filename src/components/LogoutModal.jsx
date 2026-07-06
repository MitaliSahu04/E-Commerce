import React from "react";

const LogoutModal = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.heading}>Logout</h2>

        <p style={styles.text}>
          Are you sure you want to logout?
        </p>

        <div style={styles.buttonContainer}>
          <button
            style={styles.cancelButton}
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            style={styles.logoutButton}
            onClick={onConfirm}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  modal: {
    width: "400px",
    maxWidth: "90%",
    background: "#fff",
    borderRadius: "10px",
    padding: "25px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },

  heading: {
    margin: 0,
    marginBottom: "15px",
    fontSize: "22px",
  },

  text: {
    marginBottom: "25px",
    fontSize: "16px",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },

  cancelButton: {
    padding: "10px 18px",
    border: "1px solid #ccc",
    background: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },

  logoutButton: {
    padding: "10px 18px",
    border: "none",
    background: "#dc3545",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },
};