const aName = "Peter Heronimous Lind";

const firstName = aName.substring(0, aName.indexOf(" "));

const middleName = aName.substring(aName.indexOf(" ") + 1, aName.lastIndexOf(" "));

const lastName = aName.substring(aName.lastIndexOf(" "));
console.log(lastName);
