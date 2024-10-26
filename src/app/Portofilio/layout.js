import Aside from "./Aside/Aside";

export default function NestedLayout({ children }) {
    return <>
     <div className="flex  items-start  gap-2">
<Aside />
                <section className="w-full  mt-[100px]  p-4">
                    {children}
                </section>
            </div>
    </>
           
     
}
