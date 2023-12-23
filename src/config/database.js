module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'codeburger',
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
