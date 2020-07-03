new Vue({
    el: '#desafio',
    data: {
        nome: 'Rafael Abud Ferreira',
        idade: 26,
        link: 'https://i0.wp.com/www.blogdoastro.com.br/wp-content/uploads/2016/11/cropped-galaxia.png'
        },
    methods: {
        idadeMult() {
            return this.idade*3
        }, numeroRando() {
            numeroAleat = Math.random()
            console.log(numeroAleat)
            return Math.round (numeroAleat)
        }
    }
})