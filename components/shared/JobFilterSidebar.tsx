import { Input } from "../ui/input";
import { Label } from "../ui/label";

const JobFilterSidebar = () => {
  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background p-4 md:w-[260px]">
      <form action="">
        <div>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="q">Search</Label>
              <Input id="q" name="q" placeholder="Title, company, etc." />
            </div>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default JobFilterSidebar;
