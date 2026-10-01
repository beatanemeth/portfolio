import { EXTERNAL_LINKS } from '@/constants/links';
import { getMarkdownContent } from '@/utils/mdContent';
import ForEmployersContent from './ForEmployersContent';

export interface ForEmployersData {
  hero: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  values: {
    title: string;
    items: {
      title: string;
      icon: string;
      description: string;
      proof: string;
    }[];
  };
  industries: {
    title: string;
    description: string;
    items: { id: string; label: string; problem: string; solution: string }[];
    conclusion: string;
  };
  reads: {
    title: string;
    description: string;
    items: {
      id: string;
      title: string;
      subtitle: string;
      technologies: string;
      p1: string;
      linkKey: keyof typeof EXTERNAL_LINKS;
    }[];
    conclusion: string;
  };
}

export default function ForEmployersPage() {
  const { data } = getMarkdownContent<ForEmployersData>('for-employers.md');

  return <ForEmployersContent data={data} />;
}
