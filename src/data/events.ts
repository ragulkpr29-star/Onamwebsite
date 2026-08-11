export type OnamEvent = {
  id: string;
  name: string;
  minMembers: number;
  maxMembers: number;
  maxTeams: number;
  categories?: string[];
  solo?: boolean;
};

export const events: OnamEvent[] = [
  {
    id: "pookkolam",
    name: "Pookkolam",
    minMembers: 4,
    maxMembers: 4,
    maxTeams: 40,
  },
  {
    id: "fashionParade",
    name: "Fashion Parade",
    minMembers: 5,
    maxMembers: 5,
    maxTeams: 15,
  },
  {
    id: "tugOfWar",
    name: "Tug of War",
    minMembers: 7,
    maxMembers: 7,
    maxTeams: 30,
    categories: ["Boys", "Girls"],
  },
  {
    id: "editing",
    name: "Editing",
    minMembers: 1,
    maxMembers: 1,
    maxTeams: 15,
    solo: true,
  },
  {
    id: "dualDance",
    name: "Dual Dance",
    minMembers: 2,
    maxMembers: 2,
    maxTeams: 25,
  },
];

export const getEvent = (id: string): OnamEvent | undefined =>
  events.find((event) => event.id === id);

export const RULES: string[] = [
  "All students must strictly follow the dress code (Traditional attire is encouraged).",
  "Students must carry their College ID cards during the event.",
  "Misbehavior (inside or outside the venue) will cancel OD and attendance for that student.",
  "Follow the instructions given by event coordinators and faculty.",
];

export const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/InoOsDaLTThLm71VXgmB1E";
