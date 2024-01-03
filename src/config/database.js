module.exports = {
  dialect: 'postgres',
  url: 'postgresql://postgres:F1CEcfA4-41FdgeDf6e3B5faGbfg3d4e@roundhouse.proxy.rlwy.net:39421/railway',
  define: {
    timespamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
// timespamps ajuda mostrar quem foi o ultimo a
// acrescentar e editar o valor do atributo no BD
/*
  underscore e underscoredAll mudam por exemplo um atributo que seria
  userProducts por user_products
*/
