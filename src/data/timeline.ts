// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type:
		| "education"
		| "work"
		| "project"
		| "achievement"
		| "certificate"
		| "volunteer";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "current-education",
		title: "MSc in Business Information Systems",
		description:
			"Currently pursuing a Master of Science in Business Information Systems at City University of Hong Kong (Dongguan), with a focus on data analysis and management.",
		type: "education",
		startDate: "2024-09-01",
		location: "Dongguan, Guangdong, China",
		organization: "City University of Hong Kong (Dongguan)",
		skills: [
			"Python",
			"Data Analysis",
			"Machine Learning",
			"SQL",
			"Database",
			"Project Management",
		],
		// achievements: [
		// 	"Current GPA: 3.6/4.0",
		// 	"Completed data structures and algorithms course project",
		// 	"Participated in multiple course project developments",
		// ],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "education",
		title: "B.Eng in Computer Science and Technology",
		description:
			"Studied Computer Science and Technology at Nanjing University of Information Science and Technology. Graduated with a strong foundation in programming, data structures, algorithms, and database management.",
		type: "education",
		startDate: "2020-09-01",
		endDate: "2024-06-18",
		location: "Nanjing, Jiangsu, China",
		organization: "Nanjing University of Information Science and Technology",
		skills: [
			"Data Structures",
			"Algorithms",
			"Java EE",
			"Artificial Intelligence",
			"Machine Learning",
			"Computer Vision",
			"Object-Oriented Programming",
			"Android Development",
		],
		// achievements: [
		// 	"Current GPA: 3.6/4.0",
		// 	"Completed data structures and algorithms course project",
		// 	"Participated in multiple course project developments",
		// ],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},

	// {
	// 	id: "mizuki-blog-project",
	// 	title: "Mizuki Personal Blog Project",
	// 	description:
	// 		"A personal blog website developed using the Astro framework as a practical project for learning frontend technologies.",
	// 	type: "project",
	// 	startDate: "2024-06-01",
	// 	endDate: "2024-08-01",
	// 	skills: ["Astro", "TypeScript", "Tailwind CSS", "Git"],
	// 	achievements: [
	// 		"Mastered modern frontend development tech stack",
	// 		"Learned responsive design and user experience optimization",
	// 		"Completed the full process from design to deployment",
	// 	],
	// 	links: [
	// 		{
	// 			name: "GitHub Repository",
	// 			url: "https://github.com/example/mizuki-blog",
	// 			type: "project",
	// 		},
	// 		{
	// 			name: "Live Demo",
	// 			url: "https://mizuki-demo.example.com",
	// 			type: "website",
	// 		},
	// 	],
	// 	icon: "material-symbols:code",
	// 	color: "#7C3AED",
	// 	featured: true,
	// },
	{
		id: "current-internship",
		title: "Data Operations Intern",
		description:
			"Daily internship at Lilith Games, participating in game data operations and analysis.",
		type: "work",
		startDate: "2025-08-11",
		// endDate: "2026-02-10",
		location: "Shanghai, China",
		organization: "Lilith Games",
		position: "Data Operations Intern",
		skills: [
			"SQL",
			"Excel",
			"Data Analysis",
			"Data Visualisation",
			"Game Operations",
			"Game Development",
		],
		// achievements: [
		// 	"Completed user interface component development",
		// 	"Learned team collaboration and code standards",
		// 	"Received outstanding internship performance certificate",
		// ],
		icon: "material-symbols:work",
		color: "#DC2626",
		featured: true,
	},
	// {
	// 	id: "web-development-course",
	// 	title: "Completed Web Development Online Course",
	// 	description:
	// 		"Completed a full-stack web development online course, systematically learning frontend and backend development technologies.",
	// 	type: "achievement",
	// 	startDate: "2024-01-15",
	// 	endDate: "2024-05-30",
	// 	organization: "Mooc Website",
	// 	skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
	// 	achievements: [
	// 		"Received course completion certificate",
	// 		"Completed 5 practical projects",
	// 		"Mastered full-stack development fundamentals",
	// 	],
	// 	links: [
	// 		{
	// 			name: "Course Certificate",
	// 			url: "https://certificates.example.com/web-dev",
	// 			type: "certificate",
	// 		},
	// 	],
	// 	icon: "material-symbols:verified",
	// 	color: "#059669",
	// },
	// {
	// 	id: "student-management-system",
	// 	title: "Student Management System Course Project",
	// 	description:
	// 		"Final project for the database course, developed a complete student information management system.",
	// 	type: "project",
	// 	startDate: "2023-11-01",
	// 	endDate: "2023-12-15",
	// 	skills: ["Java", "MySQL", "Swing", "JDBC"],
	// 	achievements: [
	// 		"Received excellent course project grade",
	// 		"Implemented complete CRUD functionality",
	// 		"Learned database design and optimization",
	// 	],
	// 	icon: "material-symbols:database",
	// 	color: "#EA580C",
	// },
	{
		id: "programming-contest",
		title: "Programming Contest of the 13th Blue Bridge Cup",
		description:
			"Participated in the contest organized by the Ministry of Industry and Information Technology, winning third prize.",
		type: "achievement",
		startDate: "2022-05-27",
		endDate: "2022-05-28",
		location: "Nanjing, Jiangsu, China",
		organization:
			"Ministry of Industry and Information Technology of the People's Republic of China",
		skills: ["C++", "Algorithms", "Data Structures"],
		achievements: [
			"Won third prize in the contest",
			"Improved algorithmic thinking ability",
			"Strengthened programming fundamentals",
		],
		icon: "material-symbols:emoji-events",
		color: "#7C3AED",
	},
	// {
	// 	id: "part-time-tutor",
	// 	title: "Part-time Programming Tutor",
	// 	description:
	// 		"Provided programming tutoring for high school students, helping them learn Python basics.",
	// 	type: "work",
	// 	startDate: "2023-09-01",
	// 	endDate: "2024-01-31",
	// 	position: "Programming Tutor",
	// 	skills: ["Python", "Teaching", "Communication"],
	// 	achievements: [
	// 		"Helped 3 students master Python basics",
	// 		"Improved expression and communication skills",
	// 		"Gained teaching experience",
	// 	],
	// 	icon: "material-symbols:school",
	// 	color: "#059669",
	// },
	{
		id: "high-school-graduation",
		title: "High School Graduation",
		description:
			"Graduated from high school with excellent grades and was admitted to the Computer Science and Technology programme at Nanjing University of Information Science and Technology.",
		type: "education",
		startDate: "2017-09-01",
		endDate: "2020-06-30",
		location: "Yancheng, Jiangsu, China",
		organization: "Jiangsu Yancheng Middle School",
		achievements: [
			"College entrance exam score: 375",
			"Received municipal model student award",
		],
		icon: "material-symbols:school",
		color: "#2563EB",
	},
	{
		id: "alibaba-cloud-certified-associate",
		title: "Alibaba Cloud Certified Associate (ACA) - LLM",
		description:
			"Earned the ACA - LLM certification from Alibaba Cloud, demonstrating foundational knowledge in Large Language Models and AI technologies.",
		type: "certificate",
		startDate: "2025-10-11",
		endDate: "2027-10-11",
		organization: "Alibaba Cloud",
		skills: ["Large Language Models", "AI Fundamentals"],
		achievements: [
			"Completed Alibaba Cloud training courses on Large Language Models",
			"Passed the ACA - LLM certification exam",
			"Gained foundational knowledge in AI and LLM technologies",
		],
		icon: "material-symbols:verified",
		color: "#7C3AED",
	},
	{
		id: "hdc-2025-volunteer",
		title: "Huawei Developer Conference 2025 Volunteer",
		description:
			"Volunteered at the Huawei Developer Conference 2025 event, assisting with various tasks and gaining valuable experience.",
		type: "volunteer",
		startDate: "2025-06-15",
		endDate: "2025-06-22",
		location: "Dongguan, Guangdong, China",
		organization: "Huawei Technologies Co., Ltd.",
		skills: ["Event Management", "Communication", "Teamwork"],
		achievements: [
			"Assisted with event setup and logistics",
			"Coordinated with team members to ensure smooth operations",
			"Received positive feedback from event organizers",
		],
		icon: "material-symbols:volunteer-activism",
		color: "#7C3AED",
	},
];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
		certificate: timelineData.filter((item) => item.type === "certificate")
			.length,
		volunteer: timelineData.filter((item) => item.type === "volunteer").length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
