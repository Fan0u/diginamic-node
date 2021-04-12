import readline from 'readline'

const prompt = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
)

prompt.question('Donnes moi des chiffres, je vais les additionner ! ', (reponse) => {
    const addition = reponse.split(' ').reduce((acc, val) => acc + +val, 0)
    console.log(`Bim ! ${addition}`)
    prompt.close();
})