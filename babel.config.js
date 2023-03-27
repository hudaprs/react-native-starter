module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					/**
					 * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `@folder/[..]` path
					 */
					'^@/(.+)': './src/\\1'
				},
				extensions: [
					'.ios.js',
					'.android.js',
					'.js',
					'.jsx',
					'.json',
					'.tsx',
					'.ts',
					'.native.js'
				]
			}
		],
		[
			'module:react-native-dotenv',
			{
				envName: 'APP_ENV',
				moduleName: '@env',
				path: '.env'
			}
		],
		'react-native-reanimated/plugin'
	]
}
