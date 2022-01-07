import Navbar from "../components/Navbar";

function Layout({children}) {
    return <div className="w-full max-w-3xl lg:max-w-4xl mx-auto">
        <header className="py-4 md:py-8 md:pl-4 md:pr-8 fixed w-20 md:w-64">
            <Navbar/>
        </header>
        <main className="flex-1 border-r border-l ml-20 md:ml-64 min-h-screen">
            <header className="flex space-x-6 items-center justify-between px-8 py-4 border-b">
                <div className="text-xl font-bold">Home</div>
            </header>
            {children}
        </main>
    </div>
}

export default Layout