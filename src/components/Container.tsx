import clsx from 'clsx';

type Props = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  // Define 'as' as an optional, valid HTML element tag and restrict it to ONLY these three strings
  as?: 'div' | 'section' | 'main' | 'footer';
} & React.HTMLAttributes<HTMLDivElement>; // This allows all standard div props

export default function Container({
  children,
  className = '',
  id,
  as: Component = 'div', // Defaults to 'div' if not provided
  ...props
}: Props) {
  return (
    <Component
      {...props}
      id={id}
      /* We keep container logic first, then inject custom classes */
      className={clsx('container mx-auto px-12', className)}
    >
      {children}
    </Component>
  );
}
