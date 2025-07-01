export default [
	{
		'name': 'ping',
		'description': 'Check the application\'s latency.'
	},
	{
		'name': 'help',
		'description': 'View a list of all application commands.'
	},
	{
		'name': 'profile',
		'description': 'View your user profile.'
	},
	{
		'name': 'daily',
		'description': 'Claim daily income.'
	},
	{
		'name': 'fish',
		'description': 'Fishing Commands',
		'options': [
			{
				'type': 1,
				'name': 'buyrod',
				'description': 'Buy a Fishing Rod!',
				'options': [
					{
						'type': 3,
						'name': 'rod',
						'description': 'Which rod would you like to purchase?',
						'required': false,
						'choices': [
							{ 'name': 'Twig Rod', 'value': 'twig' },
							{ 'name': 'Reinforced Rod', 'value': 'reinforced' },
							{ 'name': 'Composite Rod', 'value': 'composite' },
							{ 'name': 'Titanium Rod', 'value': 'titanium' },
							{ 'name': 'Ethereal Rod', 'value': 'ethereal' },
							{ 'name': 'Phantom Rod', 'value': 'phantom' },
							{ 'name': 'Stellar Rod', 'value': 'stellar' }
						]
					}
				]
			}
		]
	}
];
