const userrole = ["admin", "user", "labour"];
const roles = ["user", "work"];
const checkrole = (userrole, roles) => {
  const check = roles.map((role) => userroles.includes(role));
  if (check.include(true)) return true;
  return false;
};
const check = checkrole(userrole, role);
console.log({ check });
