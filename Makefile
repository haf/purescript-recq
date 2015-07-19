build:
		rm -rf build
		# https://github.com/pburtchaell/react-karma-webpack-example
		./node_modules/.bin/webpack -p --config webpack.config.js