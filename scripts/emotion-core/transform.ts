module.exports = function (file, api, options) {
  const j = api.jscodeshift;
  const statement = "/** @jsxImportSource @emotion/core */";
  const root = j(file.source);
  const found = root.find(j.JSXIdentifier, {
    name: "css",
  });
  const n = found.length;

  if (n) {
    if (file.source.indexOf(statement) === -1) {
      root.get().node.program.body.unshift(statement); // begining of file
    }
  }

  return root.toSource();
};
