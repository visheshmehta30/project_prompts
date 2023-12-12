import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

interface layoutProps {
  children: any;
}

const RootLayout = ({ children }: layoutProps) => {
  return (
    <html lang="en" className="h-full overflow-auto">
      <body className="h-full">
        <Provider session={null}>
          <>
            <div className="main">
              <div className="gradient" />
            </div>

            <main className="app h-full w-full overflow-auto">
              <Nav />
              {children}
            </main>
          </>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
