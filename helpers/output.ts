import chalk from 'chalk';

const Output = {
  success: (...output: any[]) => console.log(chalk.green('[Success]'), ...output),
  error: (...output: any[]) => console.log(chalk.red('[Error]'), ...output),
  info: (...output: any[]) => console.log(chalk.blue('[Info]'), ...output),
  nextSteps: (projectName: string) => {
    console.log(`
${chalk.green('Awesome!')} You're now ready to start coding.

We already ran ${chalk.magentaBright('npm install')} for you, so your next steps are:

$ ${chalk.magentaBright(`cd ${projectName}`)}

$ ${chalk.magentaBright('npm run dev')} - To start a local server for development.
$ ${chalk.magentaBright('npm run build')} - To build a version for production.
$ ${chalk.magentaBright('npm run start')} -To run the server in production.

For more details please visit ${chalk.magentaBright('https://burdy.io/docs/')}
`);
  }
};

export default Output;
