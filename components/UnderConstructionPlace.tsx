import { Construction } from "lucide-react";

export default function UnderConstructionPlace() {
  return (
    <div className="container mx-auto py-10">
      <div className="h-[450px] flex items-center justify-center flex-col gap-5">
        <Construction size={128} />
        <h2 className="text-4xl">Under construction</h2>
      </div>
    </div>
  );
}
