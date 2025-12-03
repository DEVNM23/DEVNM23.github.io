import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import githubIcon from "public/icons/github.svg";
import coffeeIcon from "public/icons/bmc-logo.svg";

import Footer from "@/components/Footer";

type Props = {
	children: ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<>
			<nav className="sticky top-0 left-0 z-20 w-full bg-zinc-900/40 backdrop-blur-md border-b border-zinc-800">
				<div className="mx-auto site-container flex h-14 items-center justify-between gap-4 px-4">
					<div className="flex items-center gap-4">
						<Link href="/" className="transition duration-150 active:scale-95 flex items-center gap-3">
							<span className="inline-block rounded-md bg-gradient-to-br from-sky-400 to-blue-600 p-1 text-sm font-bold">F1</span>
							<span className="text-lg font-semibold">DEVNM23</span>
						</Link>

						<div className="hidden sm:flex items-center gap-3 text-sm">
							<Link className="transition duration-100 active:scale-95 muted" href="/dashboard">
								Dashboard
							</Link>
							<Link className="transition duration-100 active:scale-95 muted" href="/schedule">
								Schedule
							</Link>
							<Link className="transition duration-100 active:scale-95 muted" href="/help">
								Help
							</Link>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<Link
							className="btn-ghost hidden sm:inline-flex"
							href="https://www.buymeacoffee.com/slowlydev"
							target="_blank"
						>
							<Image src={coffeeIcon} alt="Buy Me A Coffee" width={18} height={18} />
							<span className="text-xs">Coffee</span>
						</Link>

						<Link className="btn hidden sm:inline-flex" href="https://github.com/slowlydev/f1-dash" target="_blank">
							<Image src={githubIcon} alt="GitHub" width={18} height={18} />
							<span className="text-xs">GitHub</span>
						</Link>
					</div>
				</div>
			</nav>

			<main className="mx-auto site-container px-4">
				{children}

				<Footer />
			</main>
		</>
	);
}
