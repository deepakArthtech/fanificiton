export const baseUrl = 'http://103.171.181.46:2081/api/';
// export const baseUrl = 'https://host.fanfiction.fun:2087/api/';

var select_value = 'romance';

export function getValue() {
  return select_value;
}

export function setValue(value) {
  select_value = value;
}
