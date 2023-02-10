import { publish } from 'gh-pages'

publish(
	'static', // path to static directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/SeanStansill/seanstansill.github.io.git',
		user: {
			name: 'Sean Stansill',
			email: 'll14s26s@leeds.ac.uk'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);

