import { derived, writable } from 'svelte/store';
import translations from './data/common.json';
import * as en from './data/en';
import * as fr from './data/fr';
import type { Data } from './types/translation.type';

export const getLocaleFromNavigator = () => {
	// istanbul ignore next
	if (typeof window === 'undefined') return null;

	const language = window.navigator.language || window.navigator.languages[0];
	return language.includes('en') ? 'en' : 'fr';
};

export const locale = writable(getLocaleFromNavigator() || 'en');

export const locales = Object.keys(translations);

function translate(locale: string, key: string, vars: any) {
	// Let's throw some errors if we're trying to use keys/locales that don't exist.
	// We could improve this by using Typescript and/or fallback values.
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${key}"`);

	// Grab the translation from the translations object.
	let text = (translations as any)[locale][key];

	if (!text) throw new Error(`no translation found for ${locale}.${key}`);

	// Replace any passed in variables in the translation string.
	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

const data: Data = {
	en,
	fr
};

export function getData(name: string, lang?: string) {
	let locale = getLocaleFromNavigator() || 'en';
	if (lang) locale = lang;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return data[locale][name];
}
export const t = derived(
	locale,
	($locale) =>
		(key: string, vars = {}) =>
			translate($locale, key, vars)
);
