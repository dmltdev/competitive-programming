function getBusinessAddress(business) {
  const { address } = business;
  return `${address.street}, number ${address.number}, ${address.zipCode}`;
}
