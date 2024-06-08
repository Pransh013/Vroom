export const sidebarLinks = [
  {
    name: "Home",
    route: "/",
    imgUrl: "/icons/Home.svg",
  },
  {
    name: "Upcoming",
    route: "/upcoming",
    imgUrl: "/icons/upcoming.svg",
  },
  {
    name: "Previous",
    route: "/previous",
    imgUrl: "/icons/previous.svg",
  },
  {
    name: "Recordings",
    route: "/recordings",
    imgUrl: "/icons/recordings.svg",
  },
  {
    name: "Personal Room",
    route: "/personal-room",
    imgUrl: "/icons/personal-room.svg",
  },
];

const currDate = new Date();

export const time = currDate.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});

export const date = currDate.toLocaleDateString("en-IN", {
  dateStyle: "full",
});