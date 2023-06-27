//запуск для объединения конфигураций
const webpackClientConfig = require("./cfg/webpack.client.config");
const webpackServerConfig = require("./cfg/webpack.server.config");

//вместо того чтобы определить объект, мы определяем массив
//массив нужен для того чтобы wabpack по очереди исполняет каждую конфигурацию
// и генерит для нее соответствующий bandel
module.exports =[
    webpackClientConfig,
    webpackServerConfig
  ]