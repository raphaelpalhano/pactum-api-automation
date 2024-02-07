import yargs from 'yargs';

let args: any = yargs(process.argv.slice(2)).argv;
console.log('Environment: ' + args.env);

export function getArgumentValue(parameter: string)  {
  return args[`${parameter}`];
}
