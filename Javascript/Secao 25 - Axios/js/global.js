// Global é uma forma de padronizar alguns dados, por exemplo abaixo , estamos colocando que o padrão de Authorization é MEUTOKENDOAPP , então toda requisição axios terá esse header
// Não devemos usar global e custom no mesmo projeto , precisamos escolher um deles

axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers.common["Authorization"] = "MEUTOKENDOAPP"