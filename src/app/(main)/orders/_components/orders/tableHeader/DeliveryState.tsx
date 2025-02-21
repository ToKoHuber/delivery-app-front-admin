import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function DeliveryState() {
  return (
    <Button className="rounded-full">
      Change delivery state{" "}
      <Badge variant="outline" className="bg-white">
        1
      </Badge>
    </Button>
  );
}
