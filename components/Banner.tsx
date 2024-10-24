export default function Banner({children}:{children:React.ReactNode}){
    return(
        <section className="relative h-[25rem] py-[150px] bg-sky-600">
            <div className="container mx-auto px-6 md:px-9">
                {children}
            </div>
        </section>
    );
}