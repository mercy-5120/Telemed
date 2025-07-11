
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function JitsiMeeting() {
  const jitsiContainerRef = useRef(null);
  const { roomName } = useParams();

  useEffect(() => {
    const domain = "meet.jit.si";
    const options = {
      roomName: roomName || "DefaultRoom",
      parentNode: jitsiContainerRef.current,
      width: "100%",
      height: 600,
      configOverwrite: { startWithAudioMuted: true },
      interfaceConfigOverwrite: {
        DEFAULT_REMOTE_DISPLAY_NAME: "Guest",
        SHOW_JITSI_WATERMARK: false,
      },
    };
    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => api.dispose();
  }, [roomName]);

  return (
    <div className="jitsi-wrapper">
      <h2 style={{ textAlign: "center" }}>Appointment Video Call</h2>
      <div ref={jitsiContainerRef} />
    </div>
  );
}
