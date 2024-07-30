const path = require('path'); // Importa o módulo 'path' para lidar com caminhos de arquivos e diretórios
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Importa o plugin 'html-webpack-plugin' para gerar o arquivo HTML

module.exports = {
  entry: './src/main.js', // Define o ponto de entrada da aplicação
  mode: 'development', // Define o modo de compilação como 'development'
  output: {
    path: path.resolve(__dirname, 'dist'), // Define o diretório de saída para os arquivos compilados
    filename: 'bundle.js', // Define o nome do arquivo de saída
  },
  target: 'web', // Define o alvo da compilação como 'web'
  devServer: {
    port: '5155', // Define a porta do servidor de desenvolvimento
    open: true, // Abre o navegador automaticamente ao iniciar o servidor
    hot: true, // Habilita a substituição de módulos em tempo real (hot module replacement)
    liveReload: true, // Habilita o recarregamento automático da página ao alterar arquivos
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Define as extensões de arquivo que serão resolvidas automaticamente
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Aplica esta regra a arquivos que terminam em .js ou .jsx
        exclude: /node_modules/, // Exclui a pasta 'node_modules' do processamento
        use: ['babel-loader'], // Utiliza o 'babel-loader' para transpilar o código JavaScript
      },
      {
        test: /\.css$/, // Aplica esta regra a arquivos que terminam em .css
        use: ['style-loader', 'css-loader'], // Utiliza 'style-loader' e 'css-loader' para processar arquivos CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Define o template HTML a ser utilizado
      filename: 'index.html', // Define o nome do arquivo HTML de saída
      inject: 'body' // Injeta as tags <script> no final do <body>
    })
  ],
};
