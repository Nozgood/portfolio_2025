interface WorkItem {
	title: string;
	description: string;
	year: string;
	company: string;
	technologies: string[];
	link?: string;
	featured?: boolean;
}

function Work() {
	const workItems: WorkItem[] = [
		{
			title: "E-commerce Platform Redesign",
			description: "Led the complete redesign of the checkout flow, resulting in a 40% increase in conversion rates and improved user experience across mobile and desktop.",
			year: "2023",
			company: "Bliink",
			technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
			link: "#",
			featured: true
		},
		{
			title: "API Management Dashboard",
			description: "Developed a comprehensive dashboard for managing microservices, monitoring performance metrics, and handling real-time data visualization.",
			year: "2023",
			company: "Bliink",
			technologies: ["Vue.js", "Python", "FastAPI", "Docker"],
			link: "#"
		},
		{
			title: "Real-time Analytics System",
			description: "Built a scalable analytics platform processing millions of events daily, providing insights for digital advertising campaigns.",
			year: "2022",
			company: "Bliink",
			technologies: ["Node.js", "Kafka", "ClickHouse", "GraphQL"],
			link: "#"
		},
		{
			title: "Mobile App Backend",
			description: "Architected and implemented the backend infrastructure for a social media application with real-time messaging capabilities.",
			year: "2022",
			company: "Freelance",
			technologies: ["Express.js", "MongoDB", "WebSocket", "AWS"],
			link: "#"
		}
	];

	return (
		<>
			<section className="py-16">
				<div className="max-w-4xl mx-auto px-6">
					<h2 className="text-3xl font-normal mb-12">Work</h2>

					<div className="space-y-16">
						{workItems.map((item, index) => (
							<article key={index} className="group">
								<div className="space-y-4">
									{/* Header */}
									<div className="flex flex-col md:flex-row md:items-start md:justify-between">
										<div className="flex-1">
											<div className="flex items-center space-x-3 mb-2">
												<h3 className="text-xl font-medium group-hover:text-gray-600 transition-colors">
													{item.title}
												</h3>
												{item.featured && (
													<span className="bg-black text-white text-xs px-2 py-1 rounded">
														Featured
													</span>
												)}
											</div>
											<p className="text-gray-600 text-sm mb-1">{item.company}</p>
										</div>
										<div className="flex items-center space-x-4 mt-2 md:mt-0">
											<span className="text-gray-500 text-sm">{item.year}</span>
											{item.link && (
												<a
													href={item.link}
													className="text-gray-400 hover:text-black transition-colors"
													aria-label="View project"
												>
												</a>
											)}
										</div>
									</div>

									{/* Description */}
									<p className="text-gray-700 leading-relaxed text-lg">
										{item.description}
									</p>

									{/* Technologies */}
									<div className="flex flex-wrap gap-2 pt-2">
										{item.technologies.map((tech, techIndex) => (
											<span
												key={techIndex}
												className="text-gray-500 text-sm bg-gray-50 px-2 py-1 rounded"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Separator line between items */}
								{index < workItems.length - 1 && (
									<div className="border-t border-gray-100 mt-16"></div>
								)}
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Separator */}
			<div className="max-w-4xl mx-auto px-6">
				<div className="border-t border-gray-200"></div>
			</div>
		</>
	);
}

export default Work;
