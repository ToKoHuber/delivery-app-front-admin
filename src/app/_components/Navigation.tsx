import { LogoHorizon } from "./logos/LogoHorizon";
import { FoodMenu } from "./Navigation/FoodMenu";
import { Orders } from "./Navigation/Orders";
import { Settings } from "./Navigation/Settings";

export const Navigation = () => {
  return (
    <div className="flex flex-col gap-10 w-[165px] h-[100vh] py-9 px-5">
      <LogoHorizon />
      <div className="flex flex-col gap-6">
        <FoodMenu />
        <Orders />
        <Settings />
      </div>
    </div>
  );
};
