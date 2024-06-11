import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetupConfigured,
}: {
  setIsSetupConfigured: (val: boolean) => void;
}) => {
  const [isMicCamOn, setIsMicCamOn] = useState(false);
  const call = useCall();

  if (!call) throw new Error("useCall must be used within StreamCall component");

  useEffect(() => {
    if (isMicCamOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamOn, call?.camera, call?.microphone]);

  return (
    <div className="flex w-full h-screen flex-col items-center justify-center gap-3 text-white text-center">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview className="w-1/2"/>
      <div className="flex items-center justify-center gap-3 h-16">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamOn}
            onChange={(e) => setIsMicCamOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call.join();
          setIsSetupConfigured(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
