const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "development", // 배포용: production
	devtool: "eval", // 배포용: hidden-source-map   *그냥 source-map을 쓰면 개발자 도구에 소스코드가 노출이 된다.
	resolve: {
		modules: [path.join(__dirname, "src"), "node_modules"],
		extensions: [".jsx", ".js", ".tsx", ".ts", ".css", ".scss", ".json"], // 웹팩에서 처리해주는 확장자들
	},
	entry: {
		app: "./src/index.tsx", // app.js를 만들어낼 파일
	},
	// modules, plugins에 적힌 처리과정을 index.tsx에 적용을 해서 최종적으로 app.js를 뽑아낸다(output).
	module: {
		rules: [
			// babel대신에 tsc 설정.
			{
				test: /\.tsx?$/, // tsx나 ts파일을 발견하면
				loader: "ts-loader", // 해당 loader를 통해서 버전을 변환하겠다 는 뜻.
				exclude: /node_modules/,
				options: {
					transpileOnly: true,
				},
			},
			{
				test: /\.(woff|woff2)$/,
				use: {
					loader: "url-loader",
				},
			},
		],
	},
	plugins: [new ForkTsCheckerWebpackPlugin()],
	output: {
		filename: "bundle.js",
		publicPath: "/",
		path: path.join(__dirname, "dist"), // npm webpack을 실행하면 index.tsx를 통해서 webpack처리 후 dist폴더가 생기고 그 안에 app.js가 들어있다.
	},
};
