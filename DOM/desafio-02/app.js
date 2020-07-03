new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert("O botao foi pressionado")
        },
        registrarValor(event){
            this.valor = event.target.value
        }
    }
})