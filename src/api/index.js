const express = require('express');
const router = express.Router();

const Tour = require('../models/Tour');

router.get('/', (req, res) => {
	res.send('This is the api');
});

router.post('/tour-select', async (req, res) => {
	const tour = new Tour({
		device_id: 'sha12u3812',
		startTime: Date.now(),
		tour: exampleTourComplete,
	});

	await tour.save(tour);

	res.json(tour);
});

router.post('/get-position/:painting-id', (req, res) => {
	res.json({ path: 'position' });
});

const exampleTourComplete = [
	{
		id: 217382,
		type_tour: 'main tour',
		painting: 'The potato eaters',
		painting_no: '50',
		floor: 1,
		origins: 'Vincent van Gogh (1853 - 1890), Nuenen, april-mei 1885',
		description:
			'Van Gogh zag De aardappeleters als een meesterproef. Hij koos een moeilijke compositie om te bewijzen dat hij op weg was een goede figuurschilder te worden. Het schilderij moest de realiteit van het harde boerenleven verbeelden.',
		visited: true,
		theme: 'changing techniques',
	},
	{
		id: 9238901,
		type_tour: 'related',
		painting: 'Head of a skeleton with a burning cigarette',
		painting_no: '41',
		floor: 1,
		origins: 'Vincent van Gogh (1853 - 1890), Antwerpen, januari-"februari" 1886',
		description:
			'Dit skelet met een brandende sigaret is een studentikoze grap. Van Gogh schilderde het in de tijd dat hij lessen volgde aan de Antwerpse kunstacademie, begin 1886. Het schilderij laat zien dat hij de anatomie goed beheerste.',
		visited: false,
		theme: 'a different mind',
	},
	{
		id: 9238901,
		type_tour: 'related',
		painting: 'Self-portrait with grey felt hat',
		painting_no: '14',
		floor: 1,
		origins: 'Vincent van Gogh (1853 - 1890), Parijs, september-oktober 1887',
		description:
			'Van Gogh schilderde dit zelfportret in de winter van 1887-1888, toen hij al bijna twee jaar in Parijs woonde. Het werk laat zien dat hij de stippeltechniek van de pointillisten had bestudeerd en op zijn eigen, originsele manier toepaste. De streepjes verf zijn in verschillende richtingen geplaatst. Ze volgen de omtrek van zijn hoofd en vormen zo een soort aureool.',
		visited: false,
		theme: 'the modern portrait',
	},
	{
		id: 9238901,
		type_tour: 'related',
		painting: 'Garden with courting couples: square saint-pierre',
		painting_no: '18',
		floor: 1,
		origins: 'Square Saint Pierre 1887',
		description: 'A painting about the square in Saint pierre',
		visited: false,
		theme: 'color effects',
	},
	{
		id: 9238901,
		type_tour: 'related',
		painting: 'The pink orchard',
		painting_no: '2',
		floor: 1,
		origins: 'De roze boomgaard 1888',
		description: 'A Painting about the tree garden',
		visited: false,
		theme: 'the wealth of nature',
	},
	{
		id: 9238901,
		type_tour: 'main tour',
		painting: 'Sunflowers',
		painting_no: '76',
		floor: 1,
		origins: 'sunflowers 1889',
		description: 'The famous sunflower painting of van Gogh ',
		visited: true,
		theme: 'in search of perfect light',
	},
	{
		id: 9238901,
		type_tour: 'main tour',
		painting: 'The yellow house',
		painting_no: '4',
		floor: 1,
		origins: 'The street 1888',
		description: 'The yellow house where van Gogh lived for a while',
		visited: true,
		theme: 'color effects',
	},
	{
		id: 9238901,
		type_tour: 'related',
		painting: 'The chair of Gaugain',
		painting_no: '53',
		floor: 1,
		origins: '1888',
		description: 'The chair Gaugain always sat on.',
		visited: true,
		theme: 'painter friend',
	},
];

module.exports = router;