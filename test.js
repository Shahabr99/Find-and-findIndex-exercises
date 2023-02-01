//find a username by username
function findUserByUsername(array, string) {
  return array.find((obj) => obj.username === string);
}

console.log(
  findUserByUsername(
    [{ username: "mlewis" }, { username: "akagen" }, { username: "msmith" }],
    "mlewis"
  )
);

//remove a user
function removeUser(array, username) {
  const index = array.findIndex((obj) => obj.username === username);
  if (index === -1) return;
  return array.splice(index, 1)[0];
}

console.log(
  removeUser(
    [{ username: "mlewis" }, { username: "akagen" }, { username: "msmith" }],
    "akagen"
  )
);
