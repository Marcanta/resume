type TimelinePosition = 'right' | 'left' | 'alternate';

type ParentPosition = 'right' | 'left';

type TimelineConfig = {
	rootPosition: TimelinePosition;
};

export type { TimelinePosition, ParentPosition, TimelineConfig };
