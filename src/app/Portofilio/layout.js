import Header from "@/Components/Header/Header";
import Aside from "./Aside/Aside";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <Header/>
            <div className="flex  items-start  gap-2">
                <Aside />
                <section className="w-full  mt-[100px]  p-4">
                    {children}
                </section>
            </div>
        </body>
      </html>
    );
}
