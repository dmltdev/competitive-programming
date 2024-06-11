/* 
Write a function named getMissingContacts that receives one parameter:

a Map of contacts, where the key is a string representing a userId and the value is an array of user ids - contactsMap
The function should return a new Map, where the values are the contacts missing from each user.

Example 1
Input
contactsMap

=
Map(3)
<entries>: (3) [ {…}, {…}, {…} ]
size: 3
<prototype>: Object
Output
Map(3)
<entries>: (3) [ {…}, {…}, {…} ]
size: 3
<prototype>: Object
*/

function getMissingContacts(contactsMap) {
  const result = new Map();
  const contactIds = Array.from(contactsMap.keys());

  for (const [userId, contacts] of contactsMap) {
    const missingContacts = [];

    for (const contact of contactIds) {
      if (contact === userId) continue;

      if (!contacts.includes(contact)) {
        missingContacts.push(contact);
      }
    }

    result.set(userId, missingContacts);
  }

  return result;
}

const map = new Map();
map.set('user1', ['user2', 'user3']);
map.set('user2', []);
map.set('user3', []);
console.log(getMissingContacts(map));
