export default interface ICircle {
  gradientBackground: string;
  diameter: string;

  top: string;
  right: string;
  bottom: string;
  left: string;

  position?: "relative" | "absolute" | "static";
}
