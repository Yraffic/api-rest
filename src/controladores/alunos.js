let { alunos, identificadoAluno } = require('../bancodedados')

const listaDeAlunos = (req, res) => {
    return res.status(200).json(alunos)
}

const obterAluno = (req, res) => {
    const { id } = req.params

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    })
    if (!aluno) {
        return res.status(404).json({ mensagem: 'aluno não encontrado' })
    }
    return res.status(200).json(aluno)
}

const cadastrarUmAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body

    if (!nome && !sobrenome && !idade && !curso) {
        return res.status(404).json({ mensagem: 'todos os dados devem ser preenchidos' })
    }

    const aluno = {
        id: identificadoAluno++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(aluno)

    return res.status(201).send()
}
const excluirAluno = (req, res) => {
    const { id } = req.params

    const indice = alunos.findIndex((aluno) => {
        return aluno.id === Number(id)
    })

    if (indice === -1) {
        return res.status(404).json({ mensagem: 'não existe' })
    }

    alunos.splice(indice, 1)

    return res.status(204).send()
}

module.exports = {
    listaDeAlunos,
    obterAluno,
    cadastrarUmAluno,
    excluirAluno
}