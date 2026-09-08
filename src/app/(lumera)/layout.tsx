import "./lumera-tailwind.css";
import "./lumera/lumera-styles.css";

// Root layout for the Lumera template only. Each template lives in its own
// route group with its own root layout, so nothing here reaches the other
// templates - no shared fonts, no shared globals, no shared body classes.
export default function LumeraRootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
