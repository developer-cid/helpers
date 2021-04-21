// Break camelCase
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

function solution(string) {
  return string.replace(/[A-Z]/g, (v, i) => ` ${v}`);
}
