import React from "react";
export default async function TImeframeLayout({
  children,
}: {
  children: React.ReactNode;
  
}) {

  return (
    <div className="grid">
      {children}
    </div>
  );
}
