import Image from "next/image";

export default function DeliveryPhoto() {
  return (
    <div className="w-[856px] h-[904px] rounded-[16px] overflow-hidden border border-red-500">
      <Image
        src="https://res.cloudinary.com/daevsbyyv/image/upload/v1739765383/cld-sample-3.jpg"
        width={856}
        height={904}
        alt="Picture of the delivery person"
        className="rounded-2xl object-cover h-full"
      />
    </div>
  );
}
