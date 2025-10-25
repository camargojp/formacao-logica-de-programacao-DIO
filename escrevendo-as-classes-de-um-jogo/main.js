class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
  let ataque  

  switch(this.tipo) {
    case 'mago':
      ataque = 'magia'
      break
    case 'guerreiro':
      ataque = 'espada'
      break
    case 'monge':
      ataque = 'artes marciais'
      break
    case 'ninja':
      ataque = 'shuriken'
      break
  }

    console.log(`O ${this.tipo} atacou usando ${ataque}!`)
  } 
}

let heroi1 = new Heroi('Yuno Grinberryall', 18, 'mago')
let heroi2 = new Heroi('Artoria Pendragon', 25, 'guerreiro')
let heroi3 = new Heroi('Lee sin', 30, 'monge')
let heroi4 = new Heroi('Naruto Uzumaki', 16, 'ninja')

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
