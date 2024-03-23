import Link from "next/link";
import React from "react";
function Navbar() {
	return (
		<>
			{/* <div className="justify-between items-center flex top-0 fixed h-10 bg-slate-400 w-full text-white p-6 "> */}
			<div className="w-full sticky top-0  flex justify-between lg:flex lg:items-center lg:w-auto mr-0 p-6">
				<div className="text-sm lg:flex-grow">
					<span className="font-semibold text-xl tracking-tight mr-4">Assessment</span>
					<Link href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
						Home
					</Link>
					<Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
						About
					</Link>
				</div>
			</div>
			{/* </div> */}
		</>
	);
}
export default Navbar;
