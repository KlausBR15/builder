/*function Pessoa(nome, peso, altura, sexo) {
    this.nome = nome
    this.peso = peso
    this.altura = altura
    this.sexo = sexo
}

function novaPessoa(nome, sexo) {
    this.nome = nome
    this.sexo = sexo

    this.setAltura = function (altura) {
        this.altura = altura
        return this
    }
    this.setPeso = function (peso) {
        this.peso = peso
        return this
    }

    this.build = function() {
        return new Pessoa(this.nome, this.peso, this.altura, this.sexo)

    }

}

//const gustavo = new Pessoa('Gustavo', '76.7', '171', 'masculino')


const gustavo = new novaPessoa('Gustavo', 'masculino').setAltura(170).setPeso(70).build()

console.log(gustavo) */

let select = document.getElementsByClassName("select") 
let inputs = document.getElementsByClassName("inputs")
const submitsem = document.getElementById("enviar1")
const submitcom = document.getElementById("enviar2") 
let result = document.getElementsByClassName("result")




document.body.addEventListener("click", function(event) {
    

    if (event.target == submitsem) {


        function Pessoa(nome, peso, altura, sexo) {
            this.nome = nome
            this.peso = peso
            this.altura = altura
            this.sexo = sexo
        }
        let tudosem = new Pessoa(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value)

        result[0].innerHTML = `Nome: ${tudosem.nome}, Peso: ${tudosem.peso}kg, Altura: ${tudosem.altura}cm, Sexo: ${tudosem.sexo},`

        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''
        inputs[3].value = ''
        
    }
    if (event.target == submitcom) {
        let nome, altura, sexo, peso

        
        let primeiro = select[0]

        if (primeiro.value == 'nome') {
             nome = inputs[4].value
        }
        else if (primeiro.value == 'peso') {
             peso = inputs[4].value
        }
        else if (primeiro.value == 'altura') {
             altura = inputs[4].value
        }
        else {
             sexo = inputs[4].value
        }
        

        let segundo = select[1]

        if (segundo.value == 'nome') {
             nome = inputs[5].value
        }
        else if (segundo.value == 'peso') {
             peso = inputs[5].value
        }
        else if (segundo.value == 'altura') {
             altura = inputs[5].value
        }
        else {
             sexo = inputs[5].value
        }

        let terceiro = select[2]
        if (terceiro.value == 'nome') {
             nome = inputs[6].value
        }
        else if (terceiro.value == 'peso') {
             peso = inputs[6].value
        }
        else if (terceiro.value == 'altura') {
             altura = inputs[6].value
        }
        else {
             sexo = inputs[6].value
        }

        let quarto = select[3]

        if (quarto.value == 'nome') {
             nome = inputs[7].value
        }
        else if (quarto.value == 'peso') {
             peso = inputs[7].value
        }
        else if (quarto.value == 'altura') {
             altura = inputs[7].value
        }
        else {
             sexo = inputs[7].value
        }



        function comPessoa() {
            this.setNome = function (nome) {
                this.nome = nome
                return this
            }
            
            this.setSexo = function (sexo) {
                this.sexo = sexo
                return this
            }
        
            this.setAltura = function (altura) {
                this.altura = altura
                return this
            }
            this.setPeso = function (peso) {
                this.peso = peso
                return this
            }
        
            this.build = function() {
                return new comPessoa(this.nome, this.peso, this.altura, this.sexo)
        
            }
        }

        let tudocom = new comPessoa().setAltura(altura).setNome(nome).setPeso(peso).setSexo(sexo)


        result[1].innerHTML = `Nome: ${tudocom.nome}, Peso: ${tudocom.peso}kg, Altura: ${tudocom.altura}cm, Sexo: ${tudocom.sexo},`

        inputs[4].value = ''
        inputs[5].value = ''
        inputs[6].value = ''
        inputs[7].value = ''

        


    }

})