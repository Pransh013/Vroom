"use client";

import { MeetingStateType } from "@/constants";
import HomeCard from "./HomeCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<MeetingStateType>();
  
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
        src="/icons/add-meeting.svg"
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
      />
    </section>
  );
};

export default MeetingList;
