const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: true,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	type: {
		type: 'string',
		default: 'chuck',
		alias: 't',
		desc: 'What kind of jokes do you want [chuck|nerdy] ?'
	},
	all: {
		type: 'boolean',
		default: false,
		alias: 'a',
		desc: 'Get all algorithms'
	}
};

class Command {
	constructor(desc, code) {
		this.desc = desc;
		this.code = code;
	}
}

class CommandsInformation {


	constructor() {
		this.commands = {
			help: new Command('Command hints', 'help'),
			charts: new Command('Charts Demo', 'charts'),
			chart: new Command('chart Demo', 'chart'),
			report: new Command('Report including weather', 'report'),
			talk: new Command('Says something random', 'talk'),
			coa: new Command('Commit and push to origin', 'coa'),
			services: new Command('secondary services: currency converstion, credential requests, etc', 'services'),
			ask: new Command('Ask her about static ifnormation', 'ask'),
			update: new Command('Auto update Maid API.', 'update'),
			math: new Command("Runs a math question", 'math'),
			term: new Command("Runs a term prompt", 'term'),
			quiz: new Command("quizzes either a term or math prommpt", 'quiz'),
			clean: new Command("Prompts if to clean the terminal", "clean"),
			code: new Command("Outputs the directory and copies it to clipboard of the maid cli root files", "code"),
			ses: new Command("Study session", 'ses'),
			dsa: new Command("Random Data structures and algorithms", 'dsa'),
			cloze: new Command("Cloze algorithm", 'cloze'),
			cses: new Command("Algo Cloze study session", 'cses'),

		};
	}


};

const cmInfo = new CommandsInformation()

const helpText = meowHelp({
	name: `maid`,
	flags,
	commands: cmInfo.commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags,

};

module.exports = [meow(helpText, options), cmInfo];
