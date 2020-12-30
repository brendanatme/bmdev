/**
 * rather unfortunate prod fix
 * while react-spring 9 is in RC
 * 
 * see
 * https://github.com/pmndrs/react-spring/issues/1078
 */
const replace = require('replace-in-file');

const removeAllSideEffectsFalseFromReactSpringPackages = async () => {
  try {
    const results = await replace({
      files: "node_modules/@react-spring/*/package.json",
      from: `"sideEffects": false`,
      to: `"sideEffects": true`
    });

    console.log(results);
  } catch (e) {
    console.log('error while trying to remove string "sideEffects:false" from react-spring packages', e);
  }
}

removeAllSideEffectsFalseFromReactSpringPackages();
