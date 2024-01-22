<script>
	// Sample JSON data
	const publications = [
    {
        id: 10,
        title: 'Designing for ambiguity in sensemaking: Visual analytics in risk analysis and prediction',
        authors: ['Stan Nowak'],
        venue: 'Ph.D. thesis, Simon Fraser University 2023',
        date: '2023',
        type: 'Thesis',
        link: 'https://summit.sfu.ca/_flysystem/fedora/2023-11/etd22736.pdf',
        thumbnail: '',
        video: null
    },
    {
        id: 9,
        title: 'Identifying Visualization Opportunities to Help Architects Manage the Complexity of Building Codes',
        authors: ['Stan Nowak', 'Bon Adriel Aseniero', 'Lyn Bartram', 'Tovi Grossman', 'George Fitzmaurice', 'Justin Matejka'],
        venue: 'IEEE Computer Graphics & Applications 2023',
        date: '2023',
        type: 'Journal',
        link: 'https://www.research.autodesk.com/app/uploads/2023/10/Identifying_Visualization_Opportunities_to_Help_Architects_Manage_the_Complexity_of_Building_Codes.pdf',
        thumbnail: '',
        video: null
    },
    {
        id: 8,
        title: 'Designing for Ambiguity in Visual Analytics: Lessons from Risk Assessment and Prediction',
        authors: ['Stan Nowak', 'Lyn Bartram'],
        venue: 'IEEE Transactions on Visualization and Computer Graphics 2023',
        date: '2023',
        type: 'Journal',
        link: 'https://osf.io/y35u4/',
        thumbnail: '',
        video: null
    },
	    {
        id: 1,
        title: 'I’m Not Sure: Designing for Ambiguity in Visual Analytics',
        authors: ['Stan Nowak', 'Lyn Bartram'],
        venue: 'Graphics Interface 2022',
        date: '2022',
        type: 'Archival Conference Proceedings (refereed)',
        link: 'https://openreview.net/pdf?id=SHQU_yejZFv',
        thumbnail: '/Thumbnails/GI22.png',
        video: null
    },
    {
        id: 7,
        title: 'Give Me the Data: Visual Analytics Needs to Go Beyond Visualization',
        authors: ['Stan Nowak', 'Lyn Bartram'],
        venue: 'ASCR Workshop on Visualization for Scientific Discovery, Decision-Making, & Communication 2022',
        date: '2022',
        type: 'Archival Conference Proceedings (refereed)',
        link: 'https://custom.cvent.com/DCBD4ADAAD004096B1E4AD96F3C8049E/files/event/fc8f3c090e35418982b417f2d3e4e73e/5e4a011ffb0044bd8afb37ff00124c74.pdf',
        thumbnail: '/Thumbnails/ASCR.png',
        video: null
    },
    {
        id: 6,
        title: 'Visual Analytics: A Method to Explore Natural Histories of Oral Epithelial Dysplasia',
        authors: ['Stan Nowak', 'Miriam Rosing', 'Wolfgang Stuerzlinger', 'Lyn Bartram'],
        venue: 'Frontiers in Oral Health 2021',
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
        venue: 'IEEE Visualization Conference 2020',
        date: '2020',
        type: 'Archival Conference Proceedings (refereed)',
        link: 'https://arxiv.org/abs/2009.02800',
        thumbnail: '/Thumbnails/VizShort20.png',
        video: null
    },
    {
        id: 4,
        title: 'Enhancing the operational value of snowpack models with visualization design principles',
        authors: ['Simon Horton', 'Stan Nowak', 'Pascal Haegeli'],
        venue: 'Natural Hazards and Earth System Sciences 2019',
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
        venue: 'IEEE Evaluation and Beyond-Methodological Approaches for Visualization 2018',
        date: '2018',
        type: 'Archival Conference Proceedings (refereed)',
        link: 'https://osf.io/ws7j9/',
        thumbnail: '/Thumbnails/BELIV18.png',
        video: null
    },
    {
        id: 2,
        title: 'Exploring regional snowpack patterns with gridded models',
        authors: ['Simon Horton', 'Stan Nowak', 'Pascal Haegeli'],
        venue: 'International Snow Science Workshop Proceedings 2018',
        date: '2018',
        type: 'Archival Conference Proceedings (refereed)',
        link: 'http://www.avalancheresearch.ca/wp-content/uploads/2018/08/2018_ISSW_Horton_SnowpackPatterns.pdf',
        thumbnail: '/Thumbnails/ISSW18.png',
        video: null
    }
];
</script>
<div class="page-container">
<h1>Publications</h1>

{#each publications as publication}
	<div class="publication-card">
		<img class="publication-thumbnail" src={publication.thumbnail} alt={publication.title} />
		<div class="publication-details">
			<a class="publication-title" href={publication.link} target="_blank">{publication.title}</a>
			<div class="publication-authors">{publication.authors.join(', ')}</div>
			<div class="publication-venue">{publication.venue}</div>
			{#if publication.video}
				<div class="publication-video">
					Video: <a href={publication.video} target="_blank">{publication.video}</a>
				</div>
			{/if}
		</div>
	</div>
{/each}
</div>

<style>
	/* Publication card styling */
    .page-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 30px;
    }
	.publication-card {
		display: flex;
		align-items: center;
		margin: 10px;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
		background-color: rgba(255, 255, 255, 0.1);
		text-align: left;
	}

	.publication-card:hover {
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
	}

	.publication-thumbnail {
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 5px;
		margin-right: 10px;
	}

	.publication-details {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.publication-title {
		font-size: 1.2rem;
		font-weight: bold;
		margin: 0;
		margin-bottom: 5px;
		color: var(--text-color);
		text-decoration: none;
	}

	.publication-title:hover {
		color: var(--link-hover-color);
		text-decoration: underline;
	}

	.publication-authors {
		font-size: 0.8rem;
		font-style: italic;
		margin: 0;
		margin-bottom: 5px;
		color: var(--text-color);
	}

	.publication-venue {
		font-size: 0.8rem;
		margin: 0;
		margin-bottom: 10px;
		color: var(--text-color);
	}

	.publication-video {
		font-size: 0.8rem;
		margin: 0;
		margin-bottom: 10px;
	}

	.publication-video a {
		color: var(--link-hover-color);
		text-decoration: none;
	}

	.publication-video a:hover {
		text-decoration: underline;
	}
</style>
