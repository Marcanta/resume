<script lang="ts">
	import { browser } from '$app/environment';
	import Timeline from '$lib/timeline/Timeline.svelte';
	import TimelineConnector from '$lib/timeline/TimelineConnector.svelte';
	import TimelineContent from '$lib/timeline/TimelineContent.svelte';
	import TimelineDot from '$lib/timeline/TimelineDot.svelte';
	import TimelineItem from '$lib/timeline/TimelineItem.svelte';
	import TimelineOppositeContent from '$lib/timeline/TimelineOppositeContent.svelte';
	import TimelineSeparator from '$lib/timeline/TimelineSeparator.svelte';
	import type { Experience, Interest, Languages, Skill } from '../lib/types/resume.type';

	const experiences: Experience[] = [
		{
			name: 'Baccalaureate',
			place: { name: 'Lycee des Flandres' },
			date: '07/2017',
			description: 'Scientific Baccalaureate, mathematics specialty.',
			job: false
		},
		{
			name: 'Carpenter',
			place: { name: 'Eskimoo', link: 'https://www.eskimoo.be/nl' },
			date: '06/2018 - 09/2019',
			description:
				'Job student, primary language was flemish, during holidays. The aim of my job was to insulate roof and some roof works, I did plumbing work a little bit too.',
			job: true
		},
		{
			name: 'Developer (Internship)',
			place: { name: 'Tabuleo', link: 'https://www.tabuleo.com/' },
			date: '05/2019 - 09/2019',
			description:
				'Internship to validate my first cycle degree, tasks that they have been assigned to me were to develop a mobile application and web applications maintenance.',
			job: true
		},
		{
			name: 'DUT in computer sciences',
			place: { name: 'IUT A - University of Lille - Technologies and Sciences' },
			date: '09/2020',
			description:
				'This first cycle degree is therefore classified at the level III in the French classification of education levels and at level 5 in the international standard one (ISCED 2011).',
			job: false
		},
		{
			name: 'App designer and developer degree (CDA)',
			place: { name: 'EPSI' },
			date: '09/2021',
			description: 'nothing to say now',
			job: false
		},
		{
			name: 'IT and information systems expert degree (EISI)',
			place: { name: 'EPSI' },
			date: 'still on',
			description: 'nothing to say now',
			job: false
		}
	];

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

	const languages: Languages[] = [
		{
			name: 'french',
			iconUrl: 'https://cdn.countryflags.com/thumbs/france/flag-round-250.png',
			mark: 5,
			remark: 'fluent'
		},
		{
			name: 'english',
			iconUrl: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png',
			mark: 4.4,
			remark: 'advance'
		},
		{
			name: 'flemish (dutch)',
			iconUrl: 'https://cdn.countryflags.com/thumbs/belgium/flag-round-250.png',
			mark: 3,
			remark: 'basic'
		},
		{
			name: 'german',
			iconUrl: 'https://cdn.countryflags.com/thumbs/germany/flag-round-250.png',
			mark: 2,
			remark: 'basic'
		}
	];

	const interests: Interest[] = [
		{
			name: 'Rock Climbing',
			imageUrl: 'https://live.staticflickr.com/65535/51119373276_ad7ea6fd15_k.jpg'
		},
		{
			name: 'Reading',
			imageUrl:
				'https://media.istockphoto.com/photos/many-hardbound-books-background-selective-focus-picture-id1209683444?k=20&m=1209683444&s=612x612&w=0&h=apRHyEOnUCQ7gXkIChHTyixwezHZ4Bm6tDyr7zwu32Y='
		},
		{
			name: 'Board Games',
			imageUrl:
				'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9hcmQlMjBnYW1lfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
		}
	];
</script>

<div class="bg-black h-auto">
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
					<h2 class="text-2xl lg:text-4xl font-extralight">Web developer</h2>
				</div>
			</div>
		</div>
	</div>
	<div
		class="bg-base-200 px-7 py-5 rounded-t-3xl drop-shadow-xl lg:flex lg:flex-row lg:justify-between"
	>
				<svg class="absolute -ml-44 blur-sm" width="500" height="500" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<linearGradient id="linearGradientId" gradientTransform="rotate(-45 0.5 0.5)">
							<stop offset="0%" stop-color="#21D4FD88" />
							<stop offset="100%" stop-color="#B721FF88" />
						</linearGradient>

						<clipPath id="shape">
							<path
								fill="currentColor"
								d="M802,675.5Q780,851,591,890.5Q402,930,293,791Q184,652,118.5,468.5Q53,285,235,211.5Q417,138,590.5,153Q764,168,794,334Q824,500,802,675.5Z"
							/>
						</clipPath>
					</defs>

					<g clip-path="url(#shape)">
						<path
							fill="url(#linearGradientId)"
							d="M802,675.5Q780,851,591,890.5Q402,930,293,791Q184,652,118.5,468.5Q53,285,235,211.5Q417,138,590.5,153Q764,168,794,334Q824,500,802,675.5Z"
						/>
					</g>
				</svg>
		<div>
			<h1 class="text-2xl sm:text-3xl font-extrabold">Experiences</h1>
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
				<h1 class="text-2xl sm:text-3xl font-extrabold mb-1">Skills</h1>
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
				<h1 class="text-2xl sm:text-3xl font-extrabold">Languages</h1>
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
				<h1 class="text-2xl sm:text-3xl font-extrabold">My Interest</h1>
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
