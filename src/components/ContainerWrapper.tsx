import { cn } from '@/utils/cn';

type Props = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  // Define 'as' as an optional, valid HTML element tag and restrict it to ONLY these three strings
  as?: 'section' | 'header' | 'footer';
} & React.HTMLAttributes<HTMLDivElement>; // This allows all standard div props

export default function ContainerWrapper({
  children,
  className = '',
  id,
  as: Component = 'section', // Defaults to 'section' if not provided
  ...props
}: Props) {
  return (
    <Component
      {...props}
      id={id}
      /* We keep container logic first, then inject custom classes */
      className={cn('bg-strong-blue/90 w-full', className)}
    >
      {children}
    </Component>
  );
}
