import Image from "next/image";

export default function DeliveryPhoto() {
  return (
    <div className="w-[856px] h-[904px] rounded-[16px] overflow-hidden">
      <Image
        src="https://res.cloudinary.com/daevsbyyv/image/upload/v1740074076/l6yxwkuwye8r1kawmssh.jpg"
        width={856}
        height={904}
        alt="Picture of the delivery person"
        className="rounded-2xl object-cover"
      />
    </div>
  );
}
