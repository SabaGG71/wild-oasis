import Spinner from "@/app/_components/Spinner";

export default function loading() {
  return (
    <div className="flex flex-col gap-4 items-center text-center justify-center">
      <Spinner />
      <p className="text-2xl text-primary-200">Loading Cabin Data...</p>
    </div>
  );
}
