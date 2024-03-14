import BugIcon from "../icons/bug";
import DragonIcon from "../icons/dragon";
import FightingIcon from "../icons/fighting";
import FireIcon from "../icons/fire";
import FlyingIcon from "../icons/flying";
import GhostIcon from "../icons/ghost";
import GrassIcon from "../icons/grass";
import GroundIcon from "../icons/ground";
import IceIcon from "../icons/ice";
import NormalIcon from "../icons/normal";
import PoisonIcon from "../icons/poison";
import PsychicIcon from "../icons/psychic";
import RockIcon from "../icons/rock";
import ElectricIcon from "../icons/electric";
import WaterIcon from "../icons/water";
import SteelIcon from "../icons/steel";
import "./Icons.css";

const icons = {
  bug: BugIcon,
  dragon: DragonIcon,
  fighting: FightingIcon,
  fire: FireIcon,
  flying: FlyingIcon,
  ghost: GhostIcon,
  grass: GrassIcon,
  ground: GroundIcon,
  ice: IceIcon,
  normal: NormalIcon,
  poison: PoisonIcon,
  psychic: PsychicIcon,
  rock: RockIcon,
  electric: ElectricIcon,
  water: WaterIcon,
  steel: SteelIcon,
};

type IconProps = {
  type: keyof typeof icons;
  activeIcons: string[];
  setActiveIcons: (icons: string[]) => void;
};

const IconType: React.FC<IconProps> = ({
  type,
  activeIcons,
  setActiveIcons,
}) => {
  const SelectedIcon = icons[type];

  const handleClick = () => {
    if (activeIcons.includes(type)) {
      const newArr: string[] = activeIcons.filter((item) => item !== type);
      setActiveIcons(newArr);
    } else {
      setActiveIcons([...activeIcons, type]);
    }
  };

  const active = activeIcons.includes(type);

  return <SelectedIcon onClick={handleClick} active={active} />;
};

export default IconType;
