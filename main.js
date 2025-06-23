import user from './api/methods/user.js';

const _user = new user("39402230bdc49eefff8fac7ea6335c87", "julesparty");
const res = await _user.get_friends();
console.log(res);
