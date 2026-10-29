import Link from "next/link"

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden min-h-[calc(100vh-80px)] flex items-center">

            {/* Background glow */}
            <div className="absolute indent-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />
                <div className="absolute right-10 top-20 h-50 w-50 rounded-full bg-cyan-500/5 blur-3xl" />
            </div>

            {/* Subtle grid */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.08]"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                    maskImage: "radial-gradient(circle at center, black, transparent 75%)",
                }}
            />

            <div className="container mx-auto px-5 py-24">
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Content */}
                    <div className="text-right">

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm text-purple-300">
                            <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                            Linux • Code • Technology
                        </div>

                        <h1 className="text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl">
                            <span className="text-white">Orbit</span>
                            <span className="text-purple-500">ux</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-9 text-zinc-400 sm:text-xl">
                            یادداشت‌هایی از مسیر لینوکس، برنامه‌نویسی،
                            وب و ساختن چیزهای جدید.
                        </p>

                        <div className="mt-9 flex flex-wrap justify-start gap-4">
                            <Link
                                href="/blog"
                                className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500"
                            >
                                مشاهده مقالات
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 transition hover:border-purple-500/50 hover:text-white"
                            >
                                درباره Orbitux
                            </Link>
                        </div>
                    </div>

                    {/* Terminal */}
                    <div dir="ltr" className="relative text-left mx-auto w-full max-w-xl">
                        <div />

                        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/90  shadow-2xl">

                            {/* Terminal header */}
                            <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
                                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                                <span className="h-3 w-3 rounded-full bg-green-400/80" />

                                <span className="ml-auto font-mono text-xs text-zinc-500">
                                    orbitux@linux:~
                                </span>
                            </div>

                            {/* Terminal content */}
                            <div className="space-y-4 p-6 font-mono text-sm leading-7 sm:text-base">
                                <p>
                                    <span className="text-purple-400"> $</span>{" "}
                                    <span className="text-zinc-300">whoami</span>
                                </p>

                                <p className="text-zinc-500">
                                    orbitux
                                </p>

                                <p>
                                    <span className="text-purple-400">$</span>{" "}
                                    <span className="text-zinc-300">cat interests.txt</span>
                                </p>

                                <p className="text-zinc-500">
                                    Linux
                                    <br />
                                    Programming
                                    <br />
                                    Web Development
                                    <br />
                                    Open Source
                                </p>

                                <p>
                                    <span className="text-purple-400">$</span>{" "}
                                    <span className="text-zinc-300">
                                        echo "keep building"
                                    </span>
                                </p>

                                <p className="text-purple-400">
                                    keep building
                                    <span className="ml-1 animate-pulse">_</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero