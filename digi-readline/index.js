const readline = require('readline')

const interface = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
)

interface.question('Donnes moi des chiffres, je vais les additionner ! ', (reponse) => {
    const addition = reponse.split(' ').reduce((acc, val) => acc + +val, 0)
    console.log(`Bim ! ${addition}`)
    interface.close();
})