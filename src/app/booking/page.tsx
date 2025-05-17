"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import { SectionTitle } from "@/components/shared/SectionTitle";
import { BookingCard } from "@/components/booking/BookingCard";
import { BookingFormModal } from "@/components/booking/BookingFormModal";
import { FilterControls, type FilterState } from "@/components/booking/FilterControls";
import { professors } from "@/data/professors";
import { teamMembers } from "@/data/teamMembers";
import type { Professor, TeamMember } from "@/lib/types";

const initialFilters: FilterState = {
  searchTerm: "",
  personType: "all",
  softSkills: [],
  sortBy: "name_asc",
};

function BookingContent() {
  const searchParams = useSearchParams();
  const preselectedContactId = searchParams.get('contact');

  const allPeople: (Professor | TeamMember)[] = [...professors, ...teamMembers];
  
  const [filters, setFilters] = useState<FilterState>(() => {
    if (preselectedContactId) {
      const person = allPeople.find(p => p.id === preselectedContactId);
      if (person) {
        const personType = 'researchInterests' in person ? 'faculty' : 'team';
        return { ...initialFilters, personType, searchTerm: person.name };
      }
    }
    return initialFilters;
  });
  
  const [selectedPerson, setSelectedPerson] = useState<Professor | TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allSoftSkills = useMemo(() => {
    const skills = new Set<string>();
    teamMembers.forEach(member => member.softSkills.forEach(skill => skills.add(skill.name)));
    return Array.from(skills).sort();
  }, []);

  const filteredAndSortedPeople = useMemo(() => {
    let result = allPeople;

    // Filter by person type
    if (filters.personType === "faculty") {
      result = result.filter(p => 'researchInterests' in p);
    } else if (filters.personType === "team") {
      result = result.filter(p => !('researchInterests' in p));
    }

    // Filter by search term
    if (filters.searchTerm) {
      result = result.filter(p => p.name.toLowerCase().includes(filters.searchTerm.toLowerCase()));
    }

    // Filter by soft skills (only for team members or if 'all' types and person is team member)
    if (filters.softSkills.length > 0 && filters.personType !== 'faculty') {
      result = result.filter(p => {
        if ('softSkills' in p) { // TeamMember
          return (p as TeamMember).softSkills.some(skill => filters.softSkills.includes(skill.name));
        }
        return filters.personType === 'all'; // Keep faculty if 'all' types selected
      });
    }
    
    // Sort
    result.sort((a, b) => {
      if (filters.sortBy === "name_asc") {
        return a.name.localeCompare(b.name);
      }
      if (filters.sortBy === "name_desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    return result;
  }, [filters, allPeople]);

  const handleBookPerson = (person: Professor | TeamMember) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionTitle
        title="Connect With Us"
        subtitle="Find the right expert and reach out to start a conversation."
      />

      <FilterControls 
        allSoftSkills={allSoftSkills} 
        onFilterChange={setFilters}
        initialFilters={filters} // Pass potentially pre-filled filters
      />

      {filteredAndSortedPeople.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredAndSortedPeople.map((person) => (
            <BookingCard 
              key={person.id} 
              person={person} 
              onBook={() => handleBookPerson(person)} 
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-10">
          No individuals match your current filter criteria. Try adjusting your search.
        </p>
      )}

      {selectedPerson && (
        <BookingFormModal
          person={selectedPerson}
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      )}
    </div>
  );
}


export default function BookingPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12 md:py-16 text-center">Loading connect page...</div>}>
      <BookingContent />
    </Suspense>
  );
}

