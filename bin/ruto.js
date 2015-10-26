import {execSync} from 'child_process';
import {resolve} from 'path';

const {argv, env} = process;
const vectors = argv.slice(2);
const command = vectors[0] || '';
const parameter = vectors[1];

if (['-i', '--isomorphic'].find(isomorphic => parameter === isomorphic)) {
  env.RUTO_HANDLER = 'isomorphic';
}

execSync(`npm run ${command}`, {
  env,
  cwd: resolve(__dirname, '..'),
  stdio: 'inherit'
});
