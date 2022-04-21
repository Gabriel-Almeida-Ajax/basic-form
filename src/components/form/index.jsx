import { Toolbar } from "./toolbar";
import { Logo } from "./logo";
import { LoginInputs } from "./loginInputs";
import { LoginButtons } from "./loginButons";

export function Form() {
  return (
    <form>
      <Toolbar />
      <div className="form-control">
        <Logo />
        <LoginInputs />
        <LoginButtons />
      </div>
    </form>
  );
}