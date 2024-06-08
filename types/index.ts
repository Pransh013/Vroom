export type MeetingStateType =
  | "isSchedulingMeeting"
  | "isInstantMeeting"
  | "isJoiningMeeting"
  | undefined;

export type HomeCardProps = {
  className: string;
  src: string;
  title: string;
  description: string;
  handleClick: () => void;
};

export type ModelStateProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  createMeeting: () => void;
};
