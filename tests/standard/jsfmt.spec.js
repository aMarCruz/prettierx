run_spec(__dirname, ["babel", "flow", "typescript"], {
  endOfLine: "lf",
  yieldStarSpacing: true,
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  alignTernaryLines: false
});
