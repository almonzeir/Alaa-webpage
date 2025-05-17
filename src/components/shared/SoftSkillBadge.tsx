import type { SoftSkill } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CalendarDays } from "lucide-react";

interface SoftSkillBadgeProps {
  skill: SoftSkill;
}

export function SoftSkillBadge({ skill }: SoftSkillBadgeProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="secondary" className="flex items-center gap-2 py-1.5 px-3 shadow-sm">
            <skill.IconComponent className="h-4 w-4 text-primary" />
            <span className="font-medium">{skill.name}</span>
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center">
            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              Recorded: {new Date(skill.dateRecorded).toLocaleDateString()}
            </span>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
