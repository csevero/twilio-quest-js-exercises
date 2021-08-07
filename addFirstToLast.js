function addFirstToLast(vars) {
  if (vars.length > 0) {
    const var1 = vars[0];
    const var2 = vars[vars.length - 1];

    return `${var1}${var2}`;
  }

  return '';
}
