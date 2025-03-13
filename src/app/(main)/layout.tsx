import { Navigation } from "../_components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" bg-[#D9D9D9]">
      {/* <div className="flex justify-between w-full max-w-[calc(100vw-205px)] border border-red-500"> */}
      <div className="flex justify-between w-full border border-red-500">
        <Navigation />
        <div className="flex w-full justify-center">
          <div className="max-w-[calc(100vw-205px)]">{children}</div>
        </div>
      </div>
    </div>
  );
}
