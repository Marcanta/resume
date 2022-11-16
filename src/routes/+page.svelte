<script lang="ts">
  import { t, locale, locales, getData } from "$lib/i18n";
	import Timeline from '$lib/timeline/Timeline.svelte';
	import TimelineConnector from '$lib/timeline/TimelineConnector.svelte';
	import TimelineContent from '$lib/timeline/TimelineContent.svelte';
	import TimelineDot from '$lib/timeline/TimelineDot.svelte';
	import TimelineItem from '$lib/timeline/TimelineItem.svelte';
	import TimelineOppositeContent from '$lib/timeline/TimelineOppositeContent.svelte';
	import TimelineSeparator from '$lib/timeline/TimelineSeparator.svelte';
	import type { Experience, Interest, Language, Skill } from '$lib/types/resume.type';

	let experiences: Experience[] = getData("experiences");
	let languages: Language[] = getData("languages");
	let interests: Interest[] = getData("interests");

	locale.subscribe(lang => {
		experiences = getData("experiences", lang);
		languages = getData("languages", lang);
		interests = getData("interests", lang);
	});
	
	const skills: Skill[] = [
		{
			name: 'React',
			progress: 85,
			color: '#61dbfb',
			iconUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
		},
		{
			name: 'Svelte',
			progress: 40,
			color: '#ff3b00',
			iconUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png'
		},
		{
			name: 'Tailwind',
			progress: 70,
			color: '#01b8d6',
			iconUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png'
		},
		{
			name: 'Node JS',
			progress: 80,
			color: '#549e42',
			iconUrl: 'https://miro.medium.com/max/1200/1*yYN3pRB9mGS-IG_-agqDvA.png'
		},
		{
			name: 'Go',
			progress: 30,
			color: '#0196b9',
			iconUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png'
		},
		{
			name: 'Swift',
			progress: 75,
			color: '#ff5134',
			iconUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968371.png'
		},
		{
			name: 'Android',
			progress: 90,
			color: '#3ddc84',
			iconUrl: 'https://developer.android.com/static/images/logos/android.svg'
		},
		{
			name: 'Java',
			progress: 65,
			color: '#db380f',
			iconUrl: 'https://cdn-icons-png.flaticon.com/512/226/226777.png'
		}
	];
</script>

<div class="bg-black h-auto">
	<div class="absolute z-10 right-0 m-2 mr-4 flex flex-row space-x-2">
		<div on:click={() => $locale = "fr"} class="w-6"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1200px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png"/></div>
		<div on:click={() => $locale = "en"} class="w-8"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png"/></div>
	</div>
	<div
		class="fixed sm:bg-gradient-to-r from-sky-500 to-indigo-500 bg-auto bg-top bg-[url('/images/profile_picture.jpg');] bg-no-repeat bg-origin-border w-screen h-screen"
	/>
	<div class="hero h-72 min-h-min">
		<div class="flex flex-col sm:flex-row hero-content justify-center py-10 items-center">
			<div class="hidden sm:flex avatar mr-2">
				<div class="w-24 lg:w-40 rounded-xl">
					<img
						src="/images/profile_picture.jpg"
						class="origin-top-right scale-[3] translate-x-14 -translate-y-9"
						alt="profile picture"
					/>
				</div>
			</div>
			<div class="items-center text-white">
				<div>
					<!-- style="color: black; -webkit-text-fill-color: white;-webkit-text-stroke-width: 0px; -webkit-text-stroke-color: #fafafa;" -->
					<h1 class="text-5xl lg:text-7xl font-bold">AIME MARCANT</h1>
					<h2 class="text-2xl lg:text-4xl font-extralight">{$t("homepage.title")}</h2>
				</div>
			</div>
		</div>
	</div>
	<div
		class="bg-base-200 px-7 py-5 rounded-t-3xl drop-shadow-xl lg:flex lg:flex-row lg:justify-between"
	>
		<div>
			<h1 class="text-2xl sm:text-3xl font-extrabold">{$t("homepage.experiences")}</h1>
			<div class="flex flex-col text-sm sm:text-base">
				<Timeline>
					{#each experiences as { date, description, name, place, job }}
						<TimelineItem position={job ? 'left' : 'right'}>
							<TimelineOppositeContent classes="hidden md:block" slot="opposite-content">
								<p>{date}</p>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot/>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent classes="flex flex-col">
								<h3 class="text-xl font-bold lg:pb-2">{name}</h3>
								<a class={`text-cyan-500 ${place.link && 'underline'}`} href={place.link}
									>{place.name}</a
								>
								<p class="text-gray-500">{description}</p>
								<p class="pt-1 md:hidden">{date}</p>
							</TimelineContent>
						</TimelineItem>
					{/each}
				</Timeline>
			</div>
		</div>
		<div class="divider" />
		<div class="lg:flex lg:flex-col">
			<div>
				<h1 class="text-2xl sm:text-3xl font-extrabold mb-1">{$t("homepage.skills")}</h1>
				<div class="flex flex-row flex-wrap justify-center">
					{#each skills as { color, iconUrl, name, progress }}
						<div class="flex flex-col m-3">
							<div class="radial-progress" style="--value:{progress}; --thickness: 5px; color: {color}">
								<img class="rounded-full m-2 object-scale-down h-12 w-12" src={iconUrl} />
							</div>
							<p class="text-center text-xl font-bold">{name}</p>
						</div>
					{/each}
				</div>
			</div>
			<div class="divider" />
			<div>
				<h1 class="text-2xl sm:text-3xl font-extrabold">{$t("homepage.languages")}</h1>
				<div class="flex flex-row flex-wrap justify-center">
					<svg width="0" height="0">
						<defs>
							<clipPath id="myClip">
								<circle cx="6" cy="6" r="5" />
								<circle cx="20" cy="6" r="5" />
								<circle cx="34" cy="6" r="5" />
								<circle cx="48" cy="6" r="5" />
								<circle cx="62" cy="6" r="5" />
								<circle cx="76" cy="6" r="5" />
								<circle cx="90" cy="6" r="5" />
								<circle cx="104" cy="6" r="5" />
							</clipPath>
						</defs>
					</svg>
					{#each languages as { name, iconUrl, mark, remark }}
						<div class="flex flex-col items-center m-2">
							<img
								class="rounded-full object-scale-down h-16 w-16 mb-5 m-2"
								src={iconUrl}
								alt="flag image - {name}"
							/>
							<progress
								class="progress progress-secondary h-3 w-28"
								value={mark}
								max="5"
								style="clip-path: url(#myClip);"
							/>
							<p class="text-center text-xl font-bold mt-1">{remark}</p>
						</div>
					{/each}
				</div>
			</div>
			<div class="divider" />
			<div class="mb-5">
				<h1 class="text-2xl sm:text-3xl font-extrabold">{$t("homepage.hobbies")}</h1>
				<div class="flex flex-row flex-wrap justify-center">
					{#each interests as { name, imageUrl }}
						<div class="flex flex-col items-center m-3 w-30">
							<img
								class="mask mask-hexagon w-28 h-28 object-cover mb-5 m-2"
								src={imageUrl}
								alt="{name} stock"
							/>
							<p class="text-center text-xl font-bold">{name}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
