import "./alert.css";
import { IconClipboardList, IconAlertTriangle } from "@tabler/icons";
import { useState } from "react";

interface AlertProps {
  text: string
  children: React.ReactNode
}

export const Alert = ({ text, children }: AlertProps) => {
  const [show, setShow] = useState(false);

  const [showTextCopied, setShowTextCopied] = useState(false)

  const closeAlert = () => {
      setShow(false)
  }

  const openAlert = () => {
      setShow(true)
  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(text).then(() => {
        setShowTextCopied(true)
    })
  };

  return (
    <>
    <div onClick={openAlert}>{children}</div>
    <div>
      {show ? (
        <div className="alert">
          <div className="alert-header"><IconAlertTriangle /></div>
          <div className="alert-content">
            <div>{text}</div>
            <button onClick={handleCopyText}>
              <IconClipboardList />
            </button>
            {showTextCopied ? (<div style={{color: '#0b3f76'}}>:-)</div>) : <></>}
          </div>
          <div className="alert-footer">
            <button onClick={closeAlert}>Close</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
    </>
  );
};
