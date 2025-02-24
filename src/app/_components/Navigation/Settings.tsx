import { SettingsIcon } from "lucide-react";

export const Settings = () => {
  return (
    <div className="w-[165px] flex px-6 py-2 gap-[10px] items-center">
      <SettingsIcon />
      <div>
        <p className="text-[14px] font-medium leading-5 text-[#09090B]">
          Settings
        </p>
      </div>
    </div>
  );
};
