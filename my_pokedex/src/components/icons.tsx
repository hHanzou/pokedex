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

// const IconType: React.FC<IconProps> = ({ type, onClick }) => {
//   switch (type) {
//     case "bug":
//       const [bugBool, setBug] = useState(false);
//       const switchBug = () => {
//         setBug(!bugBool);
//       };
//       return (
//         <svg
//           className={`icon ${bugBool ? "bug" : ""}`}
//           onClick={switchBug}
//           width="800px"
//           height="800px"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M17.416 2.62412C17.7607 2.39435 17.8538 1.9287 17.624 1.58405C17.3943 1.23941 16.9286 1.14628 16.584 1.37604L13.6687 3.31955C13.1527 3.11343 12.5897 3.00006 12.0001 3.00006C11.4105 3.00006 10.8474 3.11345 10.3314 3.31962L7.41603 1.37604C7.07138 1.14628 6.60573 1.23941 6.37596 1.58405C6.1462 1.9287 6.23933 2.39435 6.58397 2.62412L8.9437 4.19727C8.24831 4.84109 7.75664 5.70181 7.57617 6.6719C8.01128 6.55973 8.46749 6.50006 8.93763 6.50006H15.0626C15.5328 6.50006 15.989 6.55973 16.4241 6.6719C16.2436 5.70176 15.7519 4.841 15.0564 4.19717L17.416 2.62412Z"
//             // fill="#1C274C"
//           />
//           <path
//             d="M1.25 14.0001C1.25 13.5859 1.58579 13.2501 2 13.2501H5V11.9376C5 11.1019 5.26034 10.327 5.70435 9.68959L3.22141 8.69624C2.83684 8.54238 2.6498 8.10589 2.80366 7.72131C2.95752 7.33673 3.39401 7.1497 3.77859 7.30356L6.91514 8.55841C7.50624 8.20388 8.19807 8.00006 8.9375 8.00006H15.0625C15.8019 8.00006 16.4938 8.20388 17.0849 8.55841L20.2214 7.30356C20.606 7.1497 21.0425 7.33673 21.1963 7.72131C21.3502 8.10589 21.1632 8.54238 20.7786 8.69624L18.2957 9.68959C18.7397 10.327 19 11.1019 19 11.9376V13.2501H22C22.4142 13.2501 22.75 13.5859 22.75 14.0001C22.75 14.4143 22.4142 14.7501 22 14.7501H19V15.0001C19 16.1808 18.7077 17.2932 18.1915 18.2689L20.7786 19.3039C21.1632 19.4578 21.3502 19.8943 21.1963 20.2789C21.0425 20.6634 20.606 20.8505 20.2214 20.6966L17.3288 19.5394C16.1974 20.8664 14.5789 21.7655 12.75 21.9604V15.0001C12.75 14.5858 12.4142 14.2501 12 14.2501C11.5858 14.2501 11.25 14.5858 11.25 15.0001V21.9604C9.42109 21.7655 7.80265 20.8664 6.67115 19.5394L3.77859 20.6966C3.39401 20.8505 2.95752 20.6634 2.80366 20.2789C2.6498 19.8943 2.83684 19.4578 3.22141 19.3039L5.80852 18.2689C5.29231 17.2932 5 16.1808 5 15.0001V14.7501H2C1.58579 14.7501 1.25 14.4143 1.25 14.0001Z"
//             // fill="#1C274C"
//           />
//         </svg>
//       );
//     case "dragon":
//       const [dragonBool, setDragon] = useState(false);
//       const switchDragon = () => {
//         setDragon(!dragonBool);
//       };
//       return (
//         <svg
//           className={`icon ${dragonBool ? "dragon" : ""}`}
//           onClick={switchDragon}
//           fill="#000000"
//           width="800px"
//           height="800px"
//           viewBox="0 -64 640 640"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c-9.44-26.4-14.73-54.47-14.73-83.38v-42.27l-119.73-87.6c-23.82-15.88-55.29-14.01-77.06 4.59L5.81 227.64c-12.38 10.33-3.45 30.42 12.51 28.14zm556.87 34.1l-100.66-50.31A47.992 47.992 0 0 1 448 196.65v-36.69h64l28.09 22.63c6 6 14.14 9.37 22.63 9.37h30.97a32 32 0 0 0 28.62-17.69l14.31-28.62a32.005 32.005 0 0 0-3.02-33.51l-74.53-99.38C553.02 4.7 543.54 0 533.47 0H296.02c-7.13 0-10.7 8.57-5.66 13.61L352 63.96 292.42 88.8c-5.9 2.95-5.9 11.36 0 14.31L352 127.96v108.62c0 72.08 36.03 139.39 96 179.38-195.59 6.81-344.56 41.01-434.1 60.91C5.78 478.67 0 485.88 0 494.2 0 504 7.95 512 17.76 512h499.08c63.29.01 119.61-47.56 122.99-110.76 2.52-47.28-22.73-90.4-64.64-111.36zM489.18 66.25l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26-12.96-.71-25.85-12.53-21.52-29.67z" />
//         </svg>
//       );
//     case "fighter":
//       const [fighterBool, setFighter] = useState(false);
//       const switchFighter = () => {
//         setFighter(!fighterBool);
//       };
//       return (
//         <svg
//           className={`icon ${fighterBool ? "fighter" : ""}`}
//           onClick={switchFighter}
//           fill="#000000"
//           height="200px"
//           width="200px"
//           version="1.1"
//           id="_x31_"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 256 190"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></g>
//           <g id="SVGRepo_iconCarrier">
//             {" "}
//             <path d="M128.1,96.7H94.7c-5.4,0-9.7,4.3-9.7,9.7c0,5.4,4.3,9.7,9.7,9.7h33.2c5.4,0,9.7-4.3,9.7-9.7 C137.8,101,133.5,96.7,128.1,96.7z M94.7,61.5h23.5V41.9H94.7c-5.4,0-9.7,4.3-9.7,9.7S89.3,61.5,94.7,61.5z M128.1,124h-23.5 c-5.4,0-9.7,4.3-9.7,9.7s4.3,9.7,9.7,9.7h23.5c5.4,0,9.7-4.3,9.7-9.7S133.5,124,128.1,124z M200.3,65.5l-30.2-30.4l0,0 c-1.8-1.8-4.3-2.9-6.8-2.9h-27.5c-5.4,0-9.7,4.3-9.7,9.7v37.2c0,5.4,4.3,9.7,9.7,9.7c5.4,0,9.7-4.3,9.7-9.7V57.6l0,0 c0-2.2,1.8-4,4-4s4,1.8,4,4l0,0l0,0c0,23.7,19.4,42.9,42.9,42.9c2.2,0,4,1.8,4,4c0,2.2-1.8,4-4,4c-18.5,0-34.7-9.9-43.5-24.8 c-1.3,4.1-3.8,7.5-7.2,10.1c0,0,0,34.7,0,40.1c0,3.6-1.3,7-2.9,9.7h28.4c12,0,22.8-6.3,29.3-15.6h54.6V65.5H200.3z M94.7,88.8h26.4 c-2-2.7-2.9-6.3-2.9-9.7v-9.7H94.7c-5.4,0-9.7,4.3-9.7,9.7C84.9,84.5,89.3,88.8,94.7,88.8z M17.9,134.9c-1-1.9-0.2-4.3,1.7-5.3 l40.9-21c1.9-1,4.3-0.2,5.3,1.7c1,1.9,0.2,4.3-1.7,5.3l-40.9,21C21.3,137.6,18.9,136.8,17.9,134.9z M2.7,37.3 c-0.6-1.1-0.7-2.5,0-3.9c1-1.9,3.5-2.6,5.2-1.7l49.4,27.4c1.9,1,2.6,3.5,1.7,5.2c-1,1.9-3.5,2.6-5.2,1.7L4.4,38.9 C3.6,38.6,3.1,37.9,2.7,37.3z M60,185c-0.4-0.8-0.6-1.9-0.1-3l13.9-43.7c0.7-2.2,2.8-3.2,4.8-2.5c2.2,0.7,3.2,2.8,2.5,4.8L67,184.5 c-0.7,2.2-2.8,3.2-4.8,2.5C61.2,186.6,60.5,186,60,185z M18.2,83.9c-0.3-0.6-0.6-1.5-0.4-2.4c0.5-2.3,2.4-3.6,4.5-3.1L51,83 c2.3,0.5,3.6,2.4,3.1,4.5s-2.4,3.6-4.5,3.1L20.9,86C19.7,85.7,18.7,84.9,18.2,83.9z M66,48.8L44.9,7.7c-1-1.9-0.2-4.3,1.7-5.3 S51,2.2,52,4.1l21.1,41.1c1,1.9,0.2,4.3-1.7,5.3C69.4,51.4,67,50.7,66,48.8z"></path>{" "}
//           </g>
//         </svg>
//       );
//     case "fire":
//       const [fireBool, setFire] = useState(false);
//       const switchFire = () => {
//         setFire(!fireBool);
//       };
//       return (
//         <svg
//           className={`icon ${fireBool ? "fire" : ""}`}
//           onClick={switchFire}
//           fill="#000000"
//           stroke="currentColor"
//           height="50px"
//           width="50px"
//           version="1.1"
//           id="Capa_1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 611.999 611.999"
//         >
//           <g>
//             <path
//               d="M216.02,611.195c5.978,3.178,12.284-3.704,8.624-9.4c-19.866-30.919-38.678-82.947-8.706-149.952
// 		c49.982-111.737,80.396-169.609,80.396-169.609s16.177,67.536,60.029,127.585c42.205,57.793,65.306,130.478,28.064,191.029
// 		c-3.495,5.683,2.668,12.388,8.607,9.349c46.1-23.582,97.806-70.885,103.64-165.017c2.151-28.764-1.075-69.034-17.206-119.851
// 		c-20.741-64.406-46.239-94.459-60.992-107.365c-4.413-3.861-11.276-0.439-10.914,5.413c4.299,69.494-21.845,87.129-36.726,47.386
// 		c-5.943-15.874-9.409-43.33-9.409-76.766c0-55.665-16.15-112.967-51.755-159.531c-9.259-12.109-20.093-23.424-32.523-33.073
// 		c-4.5-3.494-11.023,0.018-10.611,5.7c2.734,37.736,0.257,145.885-94.624,275.089c-86.029,119.851-52.693,211.896-40.864,236.826
// 		C153.666,566.767,185.212,594.814,216.02,611.195z"
//             />
//           </g>
//         </svg>
//       );
//     case "flying":
//       const [flyingBool, setFlying] = useState(false);
//       const switchFlying = () => {
//         setFlying(!flyingBool);
//       };
//       return (
//         <svg
//           className={`icon ${flyingBool ? "flying" : ""}`}
//           onClick={switchFlying}
//           fill="#000000"
//           width="800px"
//           height="800px"
//           viewBox="0 0 32 32"
//           version="1.1"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <title>feather-wing</title>
//           <path d="M28.665 25.537c-1.966-1.094-3.116-2.962-3.232-4.673-0.619-9.164-15.889-10.357-23.662-19.509l-0 0c0.403 11.661 13.204 11.604 20.744 17.449-4.879-2.113-12.876-1.649-18.664-5.404 2.7 8.775 12.332 5.886 19.406 8.271-4.212-0.411-9.768 1.968-15.020 0.086 4.638 7.31 10.654 2.427 16.483 2.47-2.94 0.749-5.977 4.025-10.036 3.718 4.946 4.76 7.536 0.139 11.079-1.633-0.357 0.425-0.583 0.967-0.61 1.565-0.064 1.443 1.054 2.665 2.497 2.73s2.665-1.054 2.73-2.497c0.052-1.169-0.672-2.193-1.716-2.574z"></path>
//         </svg>
//       );
//     case "ghost":
//       const [ghostBool, setGhost] = useState(false);
//       const switchGhost = () => {
//         setGhost(!ghostBool);
//       };
//       return (
//         <svg
//           fill="#000000"
//           className={`icon ${ghostBool ? "ghost" : ""}`}
//           onClick={switchGhost}
//           viewBox="0 0 32 32"
//           version="1.1"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></g>
//           <g id="SVGRepo_iconCarrier">
//             {" "}
//             <path d="M15.999-0.004c-7.163 0-12.99 6.247-12.99 13.925v17.084c0 0.413 0.255 0.784 0.64 0.933 0.116 0.046 0.239 0.067 0.36 0.067 0.277 0 0.548-0.115 0.741-0.329l3.768-4.16 2.951 4.076c0.187 0.258 0.485 0.411 0.803 0.413h0.007c0.316 0 0.614-0.149 0.802-0.404l2.963-3.98 2.912 3.974c0.189 0.257 0.488 0.409 0.807 0.409s0.618-0.151 0.807-0.408l2.986-4.072 3.688 4.145c0.276 0.309 0.717 0.418 1.102 0.27 0.387-0.148 0.645-0.52 0.645-0.934v-17.084c0-7.678-5.828-13.925-12.991-13.925zM26.99 28.376l-2.763-3.105c-0.201-0.226-0.494-0.354-0.794-0.334-0.302 0.015-0.581 0.164-0.76 0.407l-2.91 3.969-2.907-3.966c-0.188-0.256-0.485-0.408-0.802-0.409h-0.004c-0.316 0-0.614 0.149-0.802 0.404l-2.959 3.974-2.875-3.971c-0.177-0.244-0.454-0.395-0.755-0.411-0.018-0.001-0.036-0.002-0.054-0.002-0.281 0-0.551 0.119-0.741 0.329l-2.856 3.151v-14.49c0-6.575 4.93-11.925 10.99-11.925s10.991 5.349 10.991 11.925v14.456h0zM21 11.005c-1.102 0-1.995 0.893-1.995 1.994s0.892 1.995 1.995 1.995 1.995-0.893 1.995-1.995c0-1.101-0.892-1.994-1.995-1.994zM11 11.005c-1.103 0-1.995 0.893-1.995 1.994s0.893 1.995 1.995 1.995 1.995-0.893 1.995-1.995c0-1.101-0.893-1.994-1.995-1.994z"></path>{" "}
//           </g>
//         </svg>
//       );
//     case "grass":
//       const [grassBool, setGrass] = useState(false);
//       const switchGrass = () => {
//         setGrass(!grassBool);
//       };
//       return (
//         <svg
//           className={`icon-no-stroke ${grassBool ? "grass" : ""}`}
//           onClick={switchGrass}
//           width="800px"
//           height="800px"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//           stroke="none"
//         >
//           <title>grass</title>
//           <path d="M5,2c.82.82,5.61,2.88,6,18,0,.65,0,1.31,0,2h3C14,2.12,7,2,5,2ZM19,5a7,7,0,0,0-5.56,3,16.3,16.3,0,0,1,1.12,4C15.74,6.79,18.39,5.61,19,5ZM2,9c.77.77,4.72,3.09,5,12,0,.32,0,.66,0,1h3C10,13.52,7.5,9.22,2,9ZM22,9c-2,0-7,2.25-7,13h3C18,13,21.12,9.88,22,9Z" />
//           <rect width="24" height="24" fill="none" stroke="none" />
//         </svg>
//       );
//     case "ground":
//       const [groundBool, setGround] = useState(false);
//       const switchGround = () => {
//         setGround(!groundBool);
//       };
//       return (
//         <svg
//           className={`icon ${groundBool ? "ground" : ""}`}
//           onClick={switchGround}
//           viewBox="0 0 24 24"
//           id="Line"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="#000000"
//         >
//           <g id="SVGRepo_bgCarrier" stroke="0"></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></g>
//           <g id="SVGRepo_iconCarrier">
//             <path
//               id="primary"
//               d="M15.24,6.63a1.09,1.09,0,0,0-2,0l-2.8,5.53v0L9,8.9a1,1,0,0,0-1.8,0L3,18H21Z"
//             ></path>
//           </g>
//         </svg>
//       );
//     case "ice":
//       const [iceBool, setIce] = useState(false);
//       const switchIce = () => {
//         setIce(!iceBool);
//       };
//       return (
//         <svg
//           className={`icon ${iceBool ? "ice" : ""}`}
//           onClick={switchIce}
//           fill="#000000"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></g>
//           <g id="SVGRepo_iconCarrier">
//             <path d="M23,12a1,1,0,0,1-1,1H18.414l2.293,2.293a1,1,0,0,1-1.414,1.414L15.586,13H13v2.586l3.707,3.707a1,1,0,0,1-1.414,1.414L13,18.414V22a1,1,0,0,1-2,0V18.414L8.707,20.707a1,1,0,1,1-1.414-1.414L11,15.586V13H8.414L4.707,16.707a1,1,0,0,1-1.414-1.414L5.586,13H2a1,1,0,0,1,0-2H5.586L3.293,8.707A1,1,0,1,1,4.707,7.293L8.414,11H11V8.414L7.293,4.707A1,1,0,1,1,8.707,3.293L11,5.586V2a1,1,0,0,1,2,0V5.586l2.293-2.293a1,1,0,1,1,1.414,1.414L13,8.414V11h2.586l3.707-3.707a1,1,0,1,1,1.414,1.414L18.414,11H22A1,1,0,0,1,23,12Z"></path>
//           </g>
//         </svg>
//       );
//     case "normal":
//       const [normalBool, setNormal] = useState(false);
//       const switchNormal = () => {
//         setNormal(!normalBool);
//       };
//       return (
//         <svg
//           className={`icon ${normalBool ? "normal" : ""}`}
//           onClick={switchNormal}
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></g>
//           <g id="SVGRepo_iconCarrier">
//             {" "}
//             <path
//               d="M12 3L14.0357 8.16153C14.2236 8.63799 14.3175 8.87622 14.4614 9.0771C14.5889 9.25516 14.7448 9.41106 14.9229 9.53859C15.1238 9.68245 15.362 9.77641 15.8385 9.96432L21 12L15.8385 14.0357C15.362 14.2236 15.1238 14.3175 14.9229 14.4614C14.7448 14.5889 14.5889 14.7448 14.4614 14.9229C14.3175 15.1238 14.2236 15.362 14.0357 15.8385L12 21L9.96432 15.8385C9.77641 15.362 9.68245 15.1238 9.53859 14.9229C9.41106 14.7448 9.25516 14.5889 9.0771 14.4614C8.87622 14.3175 8.63799 14.2236 8.16153 14.0357L3 12L8.16153 9.96432C8.63799 9.77641 8.87622 9.68245 9.0771 9.53859C9.25516 9.41106 9.41106 9.25516 9.53859 9.0771C9.68245 8.87622 9.77641 8.63799 9.96432 8.16153L12 3Z"
//               stroke="none"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             ></path>{" "}
//           </g>
//         </svg>
//       );
//     case "poison":
//       const [poisonBool, setPoison] = useState(false);
//       const switchPoison = () => {
//         setPoison(!poisonBool);
//       };
//       return (
//         <svg
//           className={`icon ${poisonBool ? "poison" : ""}`}
//           onClick={switchPoison}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//           fill="#000000"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></g>
//           <g id="SVGRepo_iconCarrier">
//             {" "}
//             <style type="text/css"> </style>{" "}
//             <g>
//               {" "}
//               <path d="M186.521,265.189v27.578c0,4.969,4.219,9.016,9.438,9.016h23.016c5.203,0,9.422-4.047,9.422-9.016v-23.094 h7.859v23.094c0,4.969,4.219,9.016,9.422,9.016h23.031c5.203,0,9.438-4.047,9.438-9.016v-23.094h7.844v23.094 c0,4.969,4.219,9.016,9.438,9.016h23.016c5.203,0,9.422-4.047,9.422-9.016v-27.578c23.984-6.969,64.031-23.141,77.656-55.828 c9.891-23.766,6.016-55.047-8.797-115.344C381.88,33.689,338.755,0.001,257.177,0.001S132.489,33.689,117.661,94.017 c-14.828,60.297-18.719,91.578-8.797,115.344C122.474,242.048,162.521,258.205,186.521,265.189z M314.114,108.83 c21.688-3.547,42.844,13.547,47.25,38.156c4.391,24.625-9.625,47.453-31.297,51.016c-21.719,3.531-42.891-13.531-47.281-38.172 C278.396,135.22,292.427,112.392,314.114,108.83z M287.724,221.314h-30.547h-30.516l30.516-36.5L287.724,221.314z M153.005,146.986 c4.438-24.609,25.563-41.703,47.25-38.156c21.703,3.563,35.75,26.391,31.328,51c-4.391,24.641-25.531,41.703-47.234,38.172 C162.63,194.439,148.614,171.611,153.005,146.986z"></path>{" "}
//               <path d="M450.208,397.83c-16.391-7.25-35.656-1.156-44.484,13.516c-6.484,8.063-16.563,4.906-21.188,2.875 c-3.438-1.516-39.281-17.36-81.844-36.157c36.578-16.75,66.781-30.578,72.828-33.344c16.703-7.641,28.703-11.813,39.719-2.781 c9.609,12.813,27.703,17.609,43.078,10.578c17.266-7.891,24.563-27.688,16.297-44.203c-4.984-10-14.547-16.469-25.125-18.297 c5.156-9.031,5.891-20.188,0.875-30.203c-8.25-16.516-28.938-23.484-46.203-15.594c-14.953,6.844-22.406,22.594-18.781,37.422 c0.859,11.156-15.75,20.094-26.766,25.141c-7.688,3.516-55.188,25.672-105.969,49.172c-47.75-21.094-91.875-40.578-99.359-43.875 c-16.828-7.438-27.844-13.609-27.609-27.469c4.188-15.25-3.484-31.641-18.969-38.5c-17.359-7.656-37.953-0.406-45.984,16.219 c-4.859,10.063-3.969,21.219,1.328,30.203c-10.563,1.953-20.031,8.531-24.875,18.594c-8.016,16.641-0.438,36.328,16.938,44 c15.047,6.641,32.484,2.078,42.094-10.047c8.453-7.766,26.234-1.234,37.297,3.688c5.781,2.547,34.063,14.813,69.359,30.172 c-42.5,19.531-78.5,35.86-84.156,37.657c-3.359,1.078-6.375,1.203-9.031,0.813c-0.203-0.453-0.375-0.938-0.609-1.375 c-8.234-16.516-28.938-23.5-46.203-15.594c-17.266,7.891-24.563,27.704-16.297,44.219c5,9.969,14.547,16.453,25.125,18.281 c-5.141,9.031-5.875,20.203-0.891,30.203c8.281,16.516,28.953,23.5,46.219,15.609c16.313-7.484,23.703-25.531,17.531-41.406 c-2.344-9.906,6.609-15.344,11.203-17.453c4.109-1.859,54.563-24.969,107.266-49.094c57.578,25.172,115.453,50.719,121.984,54.61 c3,1.781,5.031,3.922,6.406,6.125c-0.25,0.438-0.5,0.859-0.719,1.313c-8.016,16.625-0.453,36.297,16.938,44 c17.375,7.656,37.953,0.406,45.984-16.219c4.844-10.047,3.953-21.219-1.328-30.188c10.563-1.969,20.016-8.563,24.875-18.594 C475.177,425.205,467.599,405.501,450.208,397.83z"></path>{" "}
//             </g>{" "}
//           </g>
//         </svg>
//       );
//     case "psycho":
//       const [psychoBool, setPsycho] = useState(false);
//       const switchPsycho = () => {
//         setPsycho(!psychoBool);
//       };
//       return (
//         <svg
//           className={`icon ${psychoBool ? "psycho" : ""}`}
//           onClick={switchPsycho}
//           fill="#000000"
//           viewBox="0 -32 576 576"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></g>
//           <g id="SVGRepo_iconCarrier">
//             <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"></path>
//           </g>
//         </svg>
//       );
//     case "rock":
//       const [rockBool, setRock] = useState(false);
//       const switchRock = () => {
//         setRock(!rockBool);
//       };
//       return (
//         <svg
//           className={`icon-no-stroke ${rockBool ? "rock" : ""}`}
//           onClick={switchRock}
//           viewBox="0 0 16 16"
//           version="1.1"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="#000000"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></g>
//           <g id="SVGRepo_iconCarrier">
//             {" "}
//             <rect
//               width="16"
//               height="16"
//               id="icon-bound"
//               fill="none"
//             ></rect>{" "}
//             <path d="M6.516,2.612L9.325,3.55l0.734,2.934l0.188,0.75l0.644,0.428l2.238,1.494L13.734,14H2.441l0.331-1.65l1.125-0.562 l0.875-0.438l0.191-0.959L6.516,2.612 M5,0L3,10l-2,1l-1,5h16l-1-8l-3-2l-1-4L5,0L5,0z"></path>{" "}
//           </g>
//         </svg>
//       );
//     case "electric":
//       const [electricBool, setElectric] = useState(false);
//       const switchElectric = () => {
//         setElectric(!electricBool);
//       };
//       return (
//         <svg
//           className={`icon ${electricBool ? "electric" : ""}`}
//           onClick={switchElectric}
//           fill="#000000"
//           viewBox="-7.5 -3.5 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="xMinYMin"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></g>
//           <g id="SVGRepo_iconCarrier">
//             <path d="M5.708 4.968h1.789a1.5 1.5 0 0 1 1.378 2.09l-3.96 9.243a1.049 1.049 0 0 1-2.012-.413v-6.92L1.45 8.923A1.5 1.5 0 0 1 0 7.423V1.5A1.5 1.5 0 0 1 1.5 0h2.708a1.5 1.5 0 0 1 1.5 1.5v3.468z"></path>
//           </g>
//         </svg>
//       );
//     case "water":
//       const [waterBool, setWater] = useState(false);
//       const switchWater = () => {
//         setWater(!waterBool);
//       };
//       return (
//         <svg
//           className={`icon ${waterBool ? "water" : ""}`}
//           onClick={switchWater}
//           fill="#000000"
//           width="800px"
//           height="800px"
//           viewBox="0 0 32 32"
//           version="1.1"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <title>water-drop</title>
//           <path d="M25.378 19.75c1.507 6.027-3.162 11.25-9.375 11.25s-10.9-5.149-9.375-11.25c0.937-3.75 5.625-9.375 9.375-18.75 3.75 9.374 8.438 15 9.375 18.75z"></path>
//         </svg>
//       );
//     default:
//       return null;
//   }
// };

export default IconType;
