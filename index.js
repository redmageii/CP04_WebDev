import supervillains from 'supervillains';
import chalk from 'chalk'
export default function namegen(nome) {
    let name= supervillains[parseInt(Math.random()*supervillains.length)]
    return `Your supervillain name is: ${chalk.yellow(nome)} ${chalk.blue(name)}`
    }
    