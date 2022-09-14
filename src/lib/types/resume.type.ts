export type Experience = {
	name: string;
	place: {
		name: string;
		link?: string;
	};
	date: string;
	description: string;
	job: boolean;
};

export type Skill = {
	name: string;
	iconUrl: string;
	color: string;
	progress: number;
};

export type Languages = {
	name: string;
	iconUrl: string;
	mark: number;
	remark: string;
};

export type Interest = {
	name: string;
	imageUrl: string;
};
