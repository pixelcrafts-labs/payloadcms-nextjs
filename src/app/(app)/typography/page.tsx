import { Button } from "@/components/ui/button";

export default function Typography() {
  return (
    <main className="container">
      <h1 className="pt-10 mb-10 text-center">Typography</h1>

      {/* Typography */}
      <div className="flex items-start">
        <div className="flex flex-col gap-4 flex-[7]">
          <h1>H1: heading 1</h1>
          <h2>H2: heading 2</h2>
          <h3>H3: heading 3</h3>
          <h4>H4: heading 4</h4>
          <h5>H5: heading 5</h5>
          <h6>H6: heading 6</h6>
        </div>
        <div className="flex-[3] flex flex-col items-start gap-4">
          <Button variant={"default"}>Default</Button>
          <Button variant={"destructive"}>Destructive</Button>
          <Button variant={"ghost"}>Ghost</Button>
          <Button variant={"link"}>Link</Button>
          <Button variant={"outline"}>Outline</Button>
          <Button variant={"secondary"}>Secondary</Button>
        </div>
      </div>
    </main>
  );
}
