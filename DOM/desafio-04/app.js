new Vue({
	el: '#desafio',
	data: {
		estado: 'destaque',
		corCSS: true,
		vModel: '',
		classe4: ''
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				return this.estado = this.estado == 'destaque'
				? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {

		},
		setPerigo(event){
			if(event.target.value == "true"){
				this.corCSS = true
			} else if (event.target.value == "false"){
				this.corCSS = false
			}
		}
	}
})
