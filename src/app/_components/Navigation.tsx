import Link from "next/link";
import { LogoHorizon } from "./logos/LogoHorizon";
import { FoodMenu } from "./navigation/FoodMenu";
import { Orders } from "./navigation/Orders";
import { Settings } from "./navigation/Settings";

export const Navigation = () => {
  return (
    <div className="flex flex-col gap-10 max-w-[205px] h-[100vh] py-9 px-5 bg-[#FFFFFF] sticky top-0">
      <Link href="/foodMenu">
        <LogoHorizon />
      </Link>
      <div className="flex flex-col gap-6">
        <Link href="/foodMenu">
          <FoodMenu />
        </Link>
        <Link href="/orders">
          <Orders />
        </Link>

        <Settings />
      </div>
    </div>
  );
};
