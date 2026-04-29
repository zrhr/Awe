export type AwePath = "people" | "nature" | "everyday";

export type Hitbox = {
  path: AwePath;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Scene = {
  id: number;
  title: string;
  desktopImage: string;
  mobileImage: string;
  focus: string;
  prompt: string;
  hitboxes: Hitbox[];
};

const baseHitboxes: Hitbox[] = [
  {
    path: "people",
    label: "People",
    x: 5,
    y: 18,
    width: 29,
    height: 58
  },
  {
    path: "nature",
    label: "Nature",
    x: 35.5,
    y: 15,
    width: 29,
    height: 62
  },
  {
    path: "everyday",
    label: "Everyday",
    x: 66,
    y: 18,
    width: 29,
    height: 58
  }
];

export const scenes: Scene[] = [
  {
    id: 1,
    title: "Choose Your Awe",
    desktopImage: "/generated/level-1-desktop.png",
    mobileImage: "/generated/level-1-mobile.png",
    focus: "Pick a doorway into wonder.",
    prompt:
      "A premium interactive awe map with three clear visual zones: human accomplishment, nature, and everyday wonder.",
    hitboxes: baseHitboxes
  },
  {
    id: 2,
    title: "Look Closer",
    desktopImage: "/generated/level-2-desktop.png",
    mobileImage: "/generated/level-2-mobile.png",
    focus: "Slow down enough to see what is already remarkable.",
    prompt:
      "A focused scene where human achievement, wild nature, and ordinary details become more vivid.",
    hitboxes: baseHitboxes
  },
  {
    id: 3,
    title: "Trace The Scale",
    desktopImage: "/generated/level-3-desktop.png",
    mobileImage: "/generated/level-3-mobile.png",
    focus: "Follow the story behind the moment until its scale becomes visible.",
    prompt:
      "A layered awe scene showing the scale behind accomplishments, ecosystems, and small daily miracles.",
    hitboxes: baseHitboxes
  },
  {
    id: 4,
    title: "Let It Change You",
    desktopImage: "/generated/level-4-desktop.png",
    mobileImage: "/generated/level-4-mobile.png",
    focus: "Let wonder widen your attention and soften the rush.",
    prompt:
      "An elevated awe scene showing reverence for people, nature, and meaningful ordinary things.",
    hitboxes: baseHitboxes
  },
  {
    id: 5,
    title: "Carry Wonder Forward",
    desktopImage: "/generated/level-5-desktop.png",
    mobileImage: "/generated/level-5-mobile.png",
    focus: "Bring awe back into how you move through life.",
    prompt:
      "A polished culmination scene where human accomplishment, nature, and everyday wonder connect into a more attentive life.",
    hitboxes: baseHitboxes
  }
];
