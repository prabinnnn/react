const userrole = ["admin", "user", "labour"];
const roles = ["user", "work"];
const checkrole = (userrole, roles) => {
  const check = roles.map((role) => userroles.includes(role));
  return check.include(true);
  return false;
};
const check = checkrole(userrole, role);
console.log({ check });
