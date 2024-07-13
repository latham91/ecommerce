interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="mb-10 border-b-2 border-primary/30 border-dashed pb-5">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
}
