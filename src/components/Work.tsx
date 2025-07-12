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
            title: "New Project Development",
            description: "Currently developing a new project from scratch. The project utilizes technologies including gRPC services, GORM (SQL ORM), caching with Redis.",
            year: "2025",
            company: "Bliink",
            technologies: ["Golang", "gRPC", "SQL", "Redis", "Graphql"],
            link: "#",
            featured: false
        },

        {
            title: "Advertising Campaign Forecasting Dashboard",
            description: "Enhanced the advertising campaign dashboard by implementing a predictive forecasting tool using linear regression with the gonum library and React Charts for data visualization. This improvement enables the AdOps team to conduct more effective campaign monitoring and management through data-driven predictive analysis.",
            year: "2024",
            company: "Bliink",
            technologies: ["Golang", "React", "MongoDB", "Kubernetes CronJob"],
            link: "#",
            featured: true
        },
        {
            title: "KPI Discrepancy Monitoring Tool",
            description: "Built an automated ETL pipeline that extracts and processes CSV/Excel files from emails using Golang, stores KPIs in MongoDB, and runs with Slack alerts for threshold breaches. This system significantly improves the team's ability to track key performance indicators and quickly identify and address discrepancies with partners.",
            year: "2023",
            company: "Bliink",
            technologies: ["Golang", "MongoDB"],
            link: "#"
        },
        {
            title: "Partners Inventory Synchronization system",
            description: "Developed a scalable inventory synchronization system that integrates with partner APIs through standardized interface contracts and asynchronous pub/sub architecture. The system optimizes inventory management across multiple partners, directly enhancing advertising placement attractiveness and revenue.",
            year: "2023",
            company: "Bliink",
            technologies: ["Golang", "Google Cloud Pub/Sub"],
            link: "#"
        },
    ];

    return (
        <>
            <section id="Work">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-normal mb-12">Work</h2>
                    <div className="space-y-16">
                        {workItems.map((item, index) => (
                            <article key={index}>
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
        </>
    );
}

export default Work;
