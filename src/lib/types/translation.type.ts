import type { Experience, Interest, Language } from './resume.type';

export type Data = {
	en: { experiences: Experience[]; interests: Interest[]; languages: Language[] };
	fr: { experiences: Experience[]; interests: Interest[]; languages: Language[] };
};
