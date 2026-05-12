import SectionAbout from '@/components/SectionAbout';
import SectionContact from '@/components/SectionContact';
import SectionEvolution from '@/components/SectionEvolution';
import SectionHero from '@/components/SectionHero';
import SectionPerson from '@/components/SectionPerson';
import SectionTechnical from '@/components/SectionTechnical';

export default function Home() {
  return (
    <main className="grow">
      <SectionHero />
      <SectionAbout />
      <SectionTechnical />
      <SectionEvolution />
      <SectionContact />
      <SectionPerson />
    </main>
  );
}
