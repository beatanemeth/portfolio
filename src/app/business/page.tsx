import { getMarkdownContent } from '@/utils/mdContent';
import BusinessImpactContent from './BusinessImpactContent';

export interface BusinessData {
  hero: { title: string; paragraph1: string; paragraph2: string };
  values: {
    title: string;
    items: { title: string; icon: string; description: string }[];
  };
  placeholder: { title: string; subtitle: string };
  industries: {
    title: string;
    description: string;
    items: { id: string; label: string; problem: string; solution: string }[];
  };
  reads: {
    title: string;
    description: string;
    items: {
      id: string;
      title: string;
      subtitle: string;
      p1: string;
      p2: string;
      architecture_solution: string;
      impact_points: string[];
    }[];
  };
}

export default function BusinessPage() {
  const { data } = getMarkdownContent<BusinessData>('business.md');

  return <BusinessImpactContent data={data} />;
}
