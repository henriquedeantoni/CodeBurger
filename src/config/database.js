module.exports = {
  dialect: 'postgres',
  url: 'postgresql://postgres:2aEAD155B6bGAdC6*6a3c4Gc2-Be-BA5@roundhouse.proxy.rlwy.net:57517/railway',
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
