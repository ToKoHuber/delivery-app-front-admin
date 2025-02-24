import DeliveryPhoto from "./_components/DeliveryPhoto";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-[#D9D9D9]">
      {/* <DeliveryPhoto /> */}
      <div className="flex flex-col items-center w-full max-w-[calc(100vw-205px)] border border-red-500">
        {children}
      </div>
    </div>
  );
}
