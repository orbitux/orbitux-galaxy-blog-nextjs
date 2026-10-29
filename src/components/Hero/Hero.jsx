import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

const Hero = () => {
    return (
        <section className="relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden">

            {/* Background glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />
                <div className="absolute right-10 top-20 h-50 w-50 rounded-full bg-cyan-500/5 blur-3xl" />
                <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-purple-500/5 blur-3xl" />
            </div>

            {/* Subtle grid */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.08]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                    maskImage:
                        "radial-gradient(circle at center, black, transparent 75%)",
                }}
            />

            <div className="container mx-auto px-5 py-24">
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Content */}
                    <div className="text-right">

                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm text-purple-300 backdrop-blur-sm">
                            <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                            Linux • Code • Technology
                        </div>

                        {/* Title */}
                        <h1 className="text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl">
                            <span className="text-white">Orbit</span>
                            <span className="text-purple-500">ux</span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-lg leading-9 text-zinc-400 sm:text-xl">
                            یادداشت‌هایی از مسیر لینوکس، برنامه‌نویسی،
                            وب و ساختن چیزهای جدید.
                        </p>

                        {/* Actions */}
                        <div className="mt-9 flex flex-wrap justify-start gap-4">

                            <Link
                                href="/blog"
                                className="group flex items-center rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500 hover:shadow-purple-500/20"
                            >
                                مشاهده مقالات
                                <FaArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-xl border border-zinc-700 bg-zinc-900/30 px-6 py-3 font-semibold text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-purple-500/5 hover:text-white"
                            >
                                درباره Orbitux
                            </Link>

                        </div>
                    </div>

                    {/* Terminal */}
                    <div
                        dir="ltr"
                        className="relative mx-auto w-full max-w-xl text-left"
                    >

                        {/* Terminal glow */}
                        <div className="absolute -inset-6 -z-10 rounded-3xl bg-purple-600/10 blur-3xl" />

                        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-2xl shadow-black/40 backdrop-blur-sm">

                            {/* Terminal header */}
                            <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/50 px-5 py-4">

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
                                    <span className="text-purple-400">$</span>{" "}
                                    <span className="text-zinc-300">
                                        whoami
                                    </span>
                                </p>

                                <p className="pl-4 text-zinc-500">
                                    orbitux
                                </p>

                                <p>
                                    <span className="text-purple-400">$</span>{" "}
                                    <span className="text-zinc-300">
                                        uname -o
                                    </span>
                                </p>

                                <p className="pl-4 text-zinc-500">
                                    GNU/Linux
                                </p>

                                <p>
                                    <span className="text-purple-400">$</span>{" "}
                                    <span className="text-zinc-300">
                                        ls ~/interests
                                    </span>
                                </p>

                                <div className="pl-4 text-zinc-500">
                                    <p>Linux</p>
                                    <p>Next.js</p>
                                    <p>React</p>
                                    <p>Open Source</p>
                                </div>

                                <p>
                                    <span className="text-purple-400">$</span>{" "}
                                    <span className="text-zinc-300">
                                        echo "keep building"
                                    </span>
                                </p>

                                <p className="text-purple-400">
                                    keep building
                                    <span className="ml-1 animate-pulse">
                                        _
                                    </span>
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