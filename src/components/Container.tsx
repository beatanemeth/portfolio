import { cn } from '@/utils/cn';

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  // Define 'as' as an optional, valid HTML element
  as?: 'div';
} & React.HTMLAttributes<HTMLDivElement>; // This allows all standard div props

export default function Container({
  children,
  className = '',
  id,
  as: Component = 'div', // Defaults to 'div' if not provided
  ...props
}: ContainerProps) {
  return (
    <Component
      {...props}
      id={id}
      /* We keep container logic first, then inject custom classes */
      className={cn('container mx-auto px-8', className)}
    >
      {children}
    </Component>
  );
}
