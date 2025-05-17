"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Filter as FilterIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

export type FilterState = {
  searchTerm: string;
  personType: "all" | "faculty" | "team";
  softSkills: string[];
  sortBy: "name_asc" | "name_desc";
};

interface FilterControlsProps {
  allSoftSkills: string[];
  onFilterChange: (filters: FilterState) => void;
  initialFilters: FilterState;
}

export function FilterControls({ allSoftSkills, onFilterChange, initialFilters }: FilterControlsProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, searchTerm: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePersonTypeChange = (value: string) => {
    const newFilters = { ...filters, personType: value as FilterState["personType"] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSortChange = (value: string) => {
    const newFilters = { ...filters, sortBy: value as FilterState["sortBy"] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSoftSkillChange = (skill: string) => {
    const newSkills = filters.softSkills.includes(skill)
      ? filters.softSkills.filter(s => s !== skill)
      : [...filters.softSkills, skill];
    const newFilters = { ...filters, softSkills: newSkills };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const resetFilters = () => {
    setFilters(initialFilters);
    onFilterChange(initialFilters);
  };

  return (
    <div className="mb-8 p-6 bg-card rounded-lg shadow-md space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
        <div>
          <Label htmlFor="searchTerm" className="text-sm font-medium">Search by Name</Label>
          <Input
            id="searchTerm"
            placeholder="Enter name..."
            value={filters.searchTerm}
            onChange={handleInputChange}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label className="text-sm font-medium">Filter by Type</Label>
          <RadioGroup
            value={filters.personType}
            onValueChange={handlePersonTypeChange}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="type-all" />
              <Label htmlFor="type-all" className="font-normal">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="faculty" id="type-faculty" />
              <Label htmlFor="type-faculty" className="font-normal">Faculty</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="team" id="type-team" />
              <Label htmlFor="type-team" className="font-normal">Team</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="sortBy" className="text-sm font-medium">Sort By</Label>
          <Select value={filters.sortBy} onValueChange={handleSortChange}>
            <SelectTrigger id="sortBy" className="mt-1">
              <SelectValue placeholder="Select sort option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name_asc">Name (A-Z)</SelectItem>
              <SelectItem value="name_desc">Name (Z-A)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filters.personType !== 'faculty' && (
           <div>
            <Label className="text-sm font-medium">Filter by Soft Skills</Label>
             <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                  <FilterIcon className="mr-2 h-4 w-4" />
                  {filters.softSkills.length > 0 ? `${filters.softSkills.length} selected` : "Select skills"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[280px] p-0" align="start">
                <ScrollArea className="h-[200px]">
                  <div className="p-4 space-y-2">
                  {allSoftSkills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={`skill-${skill}`}
                        checked={filters.softSkills.includes(skill)}
                        onCheckedChange={() => handleSoftSkillChange(skill)}
                      />
                      <Label htmlFor={`skill-${skill}`} className="font-normal text-sm">{skill}</Label>
                    </div>
                  ))}
                  </div>
                </ScrollArea>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>
       <div className="flex justify-end mt-4">
          <Button variant="ghost" onClick={resetFilters} className="text-sm">
            <X className="mr-2 h-4 w-4" /> Reset Filters
          </Button>
        </div>
    </div>
  );
}
