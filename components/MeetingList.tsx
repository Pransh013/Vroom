"use client";

import HomeCard from "./HomeCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { MeetingStateType } from "@/types";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

const MeetingList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<MeetingStateType>();
  const [callValues, setCallValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const { user } = useUser();
  const client = useStreamVideoClient();

  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Cannot create a new meeting");

      const startsAt =
        callValues.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = callValues.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!callValues.description) {
        router.push(`/meeting/${call.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 grid-cols-1 custom-scrollbar">
      <HomeCard
        className="bg-orange-600/80"
        src="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        className="bg-teal-700"
        src="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        handleClick={() => {
          setMeetingState("isJoiningMeeting");
        }}
      />
      <HomeCard
        className="bg-blue-600/80"
        src="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your day"
        handleClick={() => setMeetingState("isSchedulingMeeting")}
      />
      <HomeCard
        className="bg-violet-600/80"
        src="/icons/recordings.svg"
        title="View recordings"
        description="Check your recordings"
        handleClick={() => router.push("/recordings")}
      />
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        setIsOpen={() => setMeetingState(undefined)}
        createMeeting={createMeeting}
      />
    </section>
  );
};

export default MeetingList;
