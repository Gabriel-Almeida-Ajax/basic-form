import { Buttons } from "../buttons";
import { Title } from "../title";

export function Toolbar() {
  return (
    <div className="toolbar">
      <Buttons />
      <Title title="Login" />
      <div className="space" />
    </div>
  );
}
