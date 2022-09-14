<script lang="ts">
	import { browser } from '$app/environment';
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
			name: 'Node JS',
			progress: 80,
			color: '#549e42',
			iconUrl: 'https://cdn-icons-png.flaticon.com/512/919/919825.png'
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
			imageUrl: "https://live.staticflickr.com/65535/51119373276_ad7ea6fd15_k.jpg"
        },
		{
			name: 'Reading',
			imageUrl: "https://media.istockphoto.com/photos/many-hardbound-books-background-selective-focus-picture-id1209683444?k=20&m=1209683444&s=612x612&w=0&h=apRHyEOnUCQ7gXkIChHTyixwezHZ4Bm6tDyr7zwu32Y="
		},
		{
			name: 'Board Games',
			imageUrl: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9hcmQlMjBnYW1lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
		}
    ];
</script>

<div class="bg-cyan-500 h-auto">
	<div class="hero min-h-min">
		<div class="flex flex-col sm:flex-row hero-content justify-center py-10 items-center">
			<div class="avatar mr-2">
				<div class="w-24 rounded-xl">
					<img src="https://placeimg.com/192/192/people" />
				</div>
			</div>
			<div class=" items-center">
				<div>
					<h1 class="text-5xl font-bold text-white">AIME MARCANT</h1>
					<h2 class="text-3xl text-white font-light">Web developer</h2>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-base-200 px-7 py-5 rounded-t-3xl drop-shadow-xl">
		<div>
			<h1 class="text-2xl sm:text-3xl font-extrabold">Experiences</h1>
			<div class="flex flex-col text-sm sm:text-base">
				{#each experiences as { date, description, name, place }}
					<div>
						<div class="flex flex-row flex-wrap">
							<h1 class="font-bold mr-1">{name}</h1>
							-
							<a
								class="{place.link && 'link link-secondary'} font-light mx-1"
								class:text-secondary={!place.link}
								href={place.link}>{place.name}</a
							>
							-
							<p class="mx-1">{date}</p>
						</div>
						<p class="text-gray-500 font-light text-xs sm:text-sm">
							{description}
						</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="divider" />
		<div>
			<h1 class="text-2xl sm:text-3xl font-extrabold mb-1">Skills</h1>
			<div class="flex flex-row flex-wrap justify-center">
				{#each skills as { color, iconUrl, name, progress }}
					<div class="flex flex-col m-2">
						<div class="radial-progress" style="--value:{progress}; color: {color}">
							<img class="rounded-full m-2 object-scale-down h-14 w-14" src={iconUrl} />
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
				{#each languages as { name, iconUrl, mark, remark }}
					<div class="flex flex-col items-center m-2">
						<img class="rounded-full object-scale-down h-16 w-16 mb-5 m-2" src={iconUrl} alt="flag image - {name}"/>
						<progress class="progress progress-secondary h-3 w-28" value={mark} max="5" />
						<p class="text-center text-xl font-bold">{remark}</p>
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
						<img class="mask mask-hexagon w-28 h-28 object-cover mb-5 m-2" src={imageUrl} alt="{name} stock"/>
						<p class="text-center text-xl font-bold">{name}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
