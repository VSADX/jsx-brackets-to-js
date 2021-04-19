export function jsx_to_js(string = "") {
  return string.replaceAll(/{[^}]*?(?:(?:({*)[^\1]*?\1)[^}]?)}/g, "$$$&")
}
