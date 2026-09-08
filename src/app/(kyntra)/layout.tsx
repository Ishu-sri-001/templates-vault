import "./kyntra-tailwind.css";
import "./kyntra/kyntra-styles.css";

// Root layout for the Kyntra template only. Each template lives in its own
// route group with its own root layout, so nothing here reaches the other
// templates - no shared fonts, no shared globals, no shared body classes.
export default function KyntraRootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
