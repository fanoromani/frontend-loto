interface BallProps {
  number: string;
}

export function Ball({ number }: BallProps) {
  return (
    <div className="lg:p-6 xl:p-8 p-4 flex justify-center items-center text-2xl md:text-3xl text-font font-bold bg-white  rounded-full">
      {number}
    </div>
  );
}
