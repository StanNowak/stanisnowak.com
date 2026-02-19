<script>
	const publications = [
		{
			id: 13,
			title: 'The AvID Project: Collaborative Solutions to Avalanche Forecasting Challenges',
			authors: ['Grant Helgeson', 'Stan Nowak', 'Mike Cooperstein', 'Simon Horton', 'Jacob Barney', 'Brian Lazar', 'Ethan Greene', 'Karl Klassen'],
			venue: 'International Snow Science Workshop Proceedings',
			date: '2023',
			type: 'Conference',
			link: 'https://arc.lib.montana.edu/snow-science/objects/ISSW2023_O1.02.pdf',
			thumbnail: '/Thumbnails/ISSW23avid.png',
			video: null
		},
		{
			id: 12,
			title: 'Is it a problem? Takeaways from research into the use and effectiveness of avalanche problems',
			authors: ['Simon Horton', 'Pascal Haegeli', 'Grant Statham', 'Bret Shandro', 'Taylor Clark', 'Stan Nowak', 'Moses Towell', 'Heather Hordowick', 'Florian Herla'],
			venue: 'International Snow Science Workshop Proceedings',
			date: '2023',
			type: 'Conference',
			link: 'https://avalancheresearch.ca/wp-content/uploads/2023/09/2023_HortonOthers_AvalancheProblems.pdf',
			thumbnail: '/Thumbnails/ISSW23problem.png',
			video: null
		},
		{
			id: 11,
			title: 'Designing digital tools to support handoff at shift changes in avalanche forecasting',
			authors: ['Stan Nowak', 'Pascal Haegeli', 'Lyn Bartram'],
			venue: 'International Snow Science Workshop Proceedings',
			date: '2023',
			type: 'Conference',
			link: 'https://avalancheresearch.ca/wp-content/uploads/2023/09/2023_NowakOthers_HandOff.pdf',
			thumbnail: '/Thumbnails/ISSW23handoff.png',
			video: null
		},
		{
			id: 10,
			title: 'Designing for ambiguity in sensemaking: Visual analytics in risk analysis and prediction',
			authors: ['Stan Nowak'],
			venue: 'Ph.D. thesis, Simon Fraser University',
			date: '2023',
			type: 'Thesis',
			link: 'https://summit.sfu.ca/_flysystem/fedora/2023-11/etd22736.pdf',
			thumbnail: '/Thumbnails/Thesis23.png',
			video: null
		},
		{
			id: 9,
			title: 'Identifying Visualization Opportunities to Help Architects Manage the Complexity of Building Codes',
			authors: ['Stan Nowak', 'Bon Adriel Aseniero', 'Lyn Bartram', 'Tovi Grossman', 'George Fitzmaurice', 'Justin Matejka'],
			venue: 'IEEE Computer Graphics & Applications',
			date: '2023',
			type: 'Journal',
			link: 'https://www.research.autodesk.com/app/uploads/2023/10/Identifying_Visualization_Opportunities_to_Help_Architects_Manage_the_Complexity_of_Building_Codes.pdf',
			thumbnail: '/Thumbnails/CGA23.png',
			video: 'https://www.youtube.com/watch?v=c8Oi5j19Xok'
		},
		{
			id: 8,
			title: 'Designing for Ambiguity in Visual Analytics: Lessons from Risk Assessment and Prediction',
			authors: ['Stan Nowak', 'Lyn Bartram'],
			venue: 'IEEE Transactions on Visualization and Computer Graphics',
			date: '2023',
			type: 'Journal',
			link: 'https://osf.io/y35u4/',
			thumbnail: '/Thumbnails/Viz23.png',
			video: 'https://www.youtube.com/watch?v=SBB4WR305xk&ab_channel=IEEEVisualizationConference'
		},
		{
			id: 1,
			title: "I'm Not Sure: Designing for Ambiguity in Visual Analytics",
			authors: ['Stan Nowak', 'Lyn Bartram'],
			venue: 'Graphics Interface',
			date: '2022',
			type: 'Conference',
			link: 'https://openreview.net/pdf?id=SHQU_yejZFv',
			thumbnail: '/Thumbnails/GI22.png',
			video: null
		},
		{
			id: 7,
			title: 'Give Me the Data: Visual Analytics Needs to Go Beyond Visualization',
			authors: ['Stan Nowak', 'Lyn Bartram'],
			venue: 'ASCR Workshop on Visualization for Scientific Discovery, Decision-Making, & Communication',
			date: '2022',
			type: 'Conference',
			link: 'https://custom.cvent.com/DCBD4ADAAD004096B1E4AD96F3C8049E/files/event/fc8f3c090e35418982b417f2d3e4e73e/5e4a011ffb0044bd8afb37ff00124c74.pdf',
			thumbnail: '/Thumbnails/ASCR.png',
			video: null
		},
		{
			id: 6,
			title: 'Visual Analytics: A Method to Explore Natural Histories of Oral Epithelial Dysplasia',
			authors: ['Stan Nowak', 'Miriam Rosing', 'Wolfgang Stuerzlinger', 'Lyn Bartram'],
			venue: 'Frontiers in Oral Health',
			date: '2021',
			type: 'Journal',
			link: 'https://www.frontiersin.org/articles/10.3389/froh.2021.703874/full',
			thumbnail: '/Thumbnails/Frontier21.jpeg',
			video: null
		},
		{
			id: 5,
			title: 'Designing for Ambiguity: Visual Analytics in Avalanche Forecasting',
			authors: ['Stan Nowak', 'Lyn Bartram', 'Pascal Haegeli'],
			venue: 'IEEE Visualization Conference',
			date: '2020',
			type: 'Conference',
			link: 'https://arxiv.org/abs/2009.02800',
			thumbnail: '/Thumbnails/VizShort20.png',
			video: null
		},
		{
			id: 4,
			title: 'Enhancing the operational value of snowpack models with visualization design principles',
			authors: ['Simon Horton', 'Stan Nowak', 'Pascal Haegeli'],
			venue: 'Natural Hazards and Earth System Sciences',
			date: '2019',
			type: 'Journal',
			link: 'https://nhess.copernicus.org/articles/20/1557/2020/',
			thumbnail: '/Thumbnails/NHESS20.png',
			video: null
		},
		{
			id: 3,
			title: 'A Micro-Phenomenological Lens for Evaluating Narrative Visualization',
			authors: ['Stan Nowak', 'Lyn Bartram', 'Thecla Schiphorst'],
			venue: 'IEEE Evaluation and Beyond — Methodological Approaches for Visualization',
			date: '2018',
			type: 'Conference',
			link: 'https://osf.io/ws7j9/',
			thumbnail: '/Thumbnails/BELIV18.png',
			video: null
		},
		{
			id: 2,
			title: 'Exploring regional snowpack patterns with gridded models',
			authors: ['Simon Horton', 'Stan Nowak', 'Pascal Haegeli'],
			venue: 'International Snow Science Workshop Proceedings',
			date: '2018',
			type: 'Conference',
			link: 'http://www.avalancheresearch.ca/wp-content/uploads/2018/08/2018_ISSW_Horton_SnowpackPatterns.pdf',
			thumbnail: '/Thumbnails/ISSW18.png',
			video: null
		}
	];

	function highlightName(authors) {
		return authors.map(a =>
			a === 'Stan Nowak' ? `<strong>${a}</strong>` : a
		).join(', ');
	}
</script>

<svelte:head>
	<title>Publications — Stan Nowak</title>
</svelte:head>

<header class="page-header">
	<h1>Publications</h1>
	<p class="pub-count">{publications.length} entries &middot; 2018–2023</p>
</header>

{#each publications as pub}
	<article class="pub">
		{#if pub.thumbnail}
			<a href={pub.link} target="_blank" rel="noopener" class="thumb-link">
				<img src={pub.thumbnail} alt={pub.title} class="thumb" />
			</a>
		{/if}
		<div class="pub-body">
			<a href={pub.link} target="_blank" rel="noopener" class="pub-title">{pub.title}</a>
			<p class="authors">{@html highlightName(pub.authors)}</p>
			<p class="venue">{pub.venue}</p>
			<p class="pub-meta">
				<span class="mono">{pub.date}</span>
				<span class="sep">&middot;</span>
				<span class="type-badge">{pub.type}</span>
			</p>
			{#if pub.video}
				<a href={pub.video} target="_blank" rel="noopener" class="video-link">Watch video &rarr;</a>
			{/if}
		</div>
	</article>
{/each}

<style>
	.page-header {
		margin-bottom: 2.5rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--line);
	}

	.page-header h1 {
		margin-bottom: 0.3rem;
	}

	.pub-count {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--muted-ink);
		opacity: 0.7;
	}

	.pub {
		display: flex;
		gap: 1.25rem;
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--line);
	}

	.pub:last-child {
		border-bottom: none;
	}

	.thumb-link {
		flex-shrink: 0;
		display: block;
		line-height: 0;
		align-self: flex-start;
	}

	.thumb {
		width: 100px;
		height: 100px;
		object-fit: cover;
		border: 1px solid var(--line);
		border-radius: 2px;
		transition: border-color 0.2s ease;
	}

	.thumb-link:hover .thumb {
		border-color: var(--accent);
	}

	.pub-body {
		min-width: 0;
		flex: 1;
	}

	.pub-title {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: 1.05rem;
		letter-spacing: var(--tracking-tight);
		color: var(--ink);
		text-decoration: none;
		line-height: 1.35;
		display: block;
		margin-bottom: 0.3rem;
	}

	.pub-title:hover {
		color: var(--accent);
	}

	.authors {
		font-size: 0.85rem;
		line-height: 1.5;
		margin-bottom: 0.15rem;
	}

	.authors :global(strong) {
		font-weight: 500;
		color: var(--ink);
	}

	.venue {
		font-size: 0.8rem;
		font-style: italic;
		color: var(--muted-ink);
		margin-bottom: 0.3rem;
	}

	.pub-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.sep {
		color: var(--muted-ink);
		opacity: 0.3;
	}

	.mono {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--muted-ink);
	}

	.type-badge {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 0.6rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--accent);
	}

	.video-link {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--accent);
		text-decoration: none;
		margin-top: 0.35rem;
		display: inline-block;
	}

	.video-link:hover {
		text-decoration: underline;
	}

	@media (max-width: 520px) {
		.pub {
			gap: 1rem;
		}

		.thumb {
			width: 64px;
			height: 64px;
		}

		.pub-title {
			font-size: 0.95rem;
		}
	}
</style>
