export default async function DetailsLayout({
  children,
}: {
  params: Promise<{ ticker: string }>;
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
