import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import execa from 'execa';
import ora from 'ora';
import Output from './output';

export const copyToProject = async (projectName: string, dockerConfig = 'mariadb') => {
  try {
    Output.info(`Copying files to ${chalk.magentaBright(projectName)} directory...`);

    const projectDir = path.join(process.cwd(), projectName);
    const templateDir = path.join(__dirname, '../', 'templates', 'default');
    const dockerDir = path.join(__dirname, '../', 'docker-configs', dockerConfig);

    const requirementsExist = await Promise.all([
      fs.pathExists(templateDir),
      fs.pathExists(dockerDir)
    ]);

    if (!requirementsExist.every((requirement) => requirement === true)) {
      Output.error('One of the dependency folders was not found (template or docker configs). Exiting.');
      process.exit(1);
    }

    const folderAlreadyExists = await fs.pathExists(projectDir);

    if (folderAlreadyExists) {
      Output.error(`Project ${chalk.magentaBright(projectName)} already exists. Exiting.`);
      process.exit(1);
    }

    await fs.ensureDir(projectDir);

    await Promise.all([
      fs.copy(templateDir, projectDir),
      fs.copy(dockerDir, projectDir)
    ]);

    await fs.move(
      path.join(projectDir, 'gitignore'),
      path.join(projectDir, '.gitignore')
    );

    Output.success('Successfully copied files!');
  } catch (e) {
    console.log(e);
    Output.error(e.message);
    process.exit(1);
  }
};

export const installProject = async (projectName: string) => {
  try {
    const projectDir = path.join(process.cwd(), projectName);
    Output.info(chalk.blue('Installing dependencies...'))
    await execa('npm', ['install'], {cwd: projectDir, stdio: 'inherit'});
    Output.success(`Successfully installed dependencies for ${chalk.magentaBright(projectName)}`);
  } catch (e) {
    console.log(e);
    Output.error(e.message);
    process.exit(1);
  }
};

export const initDatabase = async (projectName: string) => {
  try {
    const projectDir = path.join(process.cwd(), projectName);
    const spinner = ora(chalk.blue('Creating database...'));
    spinner.start();
    await execa('npm', ['run', 'db:init'], {cwd: projectDir});
    spinner.stop();
    Output.success('Successfully created database');
  } catch (e) {
    console.log(e);
    Output.error(e.message);
    process.exit(1);
  }
};
