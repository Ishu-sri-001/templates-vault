import "./elenavoss-tailwind.css";
import "./elenavoss/elenavoss.css";

// Root layout for the Elenavoss template only. Each template lives in its own
// route group with its own root layout, so nothing here reaches the other
// templates - no shared fonts, no shared globals, no shared body classes.
export default function ElenavossRootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
