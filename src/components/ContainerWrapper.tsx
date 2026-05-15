import { cn } from '@/utils/cn';

type ContainerWrapperProps = {
  children?: React.ReactNode;
  className?: string;
  variant: 'primary' | 'ghost';
  id?: string;
  // Define 'as' as an optional, valid HTML element tag and restrict it to ONLY these three strings
  as?: 'section' | 'header' | 'footer';
} & React.HTMLAttributes<HTMLDivElement>; // This allows all standard div props

const VARIANT_STYLE = {
  primary: 'bg-strong-blue',
  ghost: '',
};

export default function ContainerWrapper({
  children,
  className = '',
  variant = 'primary',
  id,
  as: Component = 'section', // Defaults to 'section' if not provided
  ...props
}: ContainerWrapperProps) {
  const sectionBg = VARIANT_STYLE[variant];

  return (
    <Component
      {...props}
      id={id}
      /* We keep container logic first, then inject custom classes */
      className={cn(sectionBg, 'w-full py-24', className)}
    >
      {children}
    </Component>
  );
}
