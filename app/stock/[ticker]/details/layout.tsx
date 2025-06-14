export default async function DetailsLayout({
  params,
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
