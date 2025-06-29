function Header() {
	return (
		<header className="flex sm:justify-center md:justify-between p-4 max-w-screen-2xl mx-auto w-full">
			<div>
				<h2 className="text-xl font-medium">Nowfeel.dev</h2>
			</div>
			<div className="hidden md:flex gap-10">
				<a href="#Work" className="text-xl font-medium" >Work</a>
				<a href="#Writing" className="text-xl font-medium">Writing</a>
				<a href="#About" className="text-xl font-medium">About</a>
				<a href="#Contact" className="text-xl font-medium">Contact</a>
			</div>
		</header>
	)

}

export default Header;
