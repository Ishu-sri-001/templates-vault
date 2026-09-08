import "./oris-dental-tailwind.css";
import "./oris-dental/oris-dental.css";

// Root layout for the OrisDental template only. Each template lives in its own
// route group with its own root layout, so nothing here reaches the other
// templates - no shared fonts, no shared globals, no shared body classes.
export default function OrisDentalRootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
