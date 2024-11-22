import SideNavigation from "@/app/_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className="grid max-lg:grid-cols-1 lg:grid-cols-[16rem_1fr] h-full gap-12">
      <div>
        <SideNavigation />
      </div>
      <div className="py-1">{children}</div>
    </div>
  );
}
