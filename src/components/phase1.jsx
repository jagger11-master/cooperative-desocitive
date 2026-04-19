import logo from "../assets/charwe.png";



function Phase1() {
    return (

        <section className="h-screen flex flex-col items-center justify-center bg-[#0a0a0b] px-6 text-center">
            <img src={logo} alt="Charwe Logo" className="h-48 w-auto relative -top-12 mb-6 rounded-3xl" />


            <h3 className="text-4xl md:text-6xl font-black text-slate-200 mb-10">
               Welcome to Charwe Media
                
            </h3>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
                Charwe-media is an online platform designed to enable Tanzanians to dedicated storrytellings,
                branding solutions and media production.
            </p>

            <button className="bg-orange-950 text-white px-8 py-3 rounded-full font-bold">
                Browse Vacancies
            </button>
        </section>

    );
}
export default Phase1;

