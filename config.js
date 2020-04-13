
/**
 * User Profile
 */
var profile = {
  userName: 'saml.jackson@example.com',
  nameIdFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
  firstName: 'Saml',
  lastName: 'Jackson',
  displayName: 'saml jackson',
  email: 'saml.jackson@example.com',
  server: 'greg.xferdev.com',
  facility: '569621f8-52ef-478a-a24d-58547cd983ee'
}

/**
 * SAML Attribute Metadata
 */
var metadata = [{
  id: "firstName",
  optional: false,
  displayName: 'First Name',
  description: 'The given name of the user',
  multiValue: false
}, {
  id: "lastName",
  optional: false,
  displayName: 'Last Name',
  description: 'The surname of the user',
  multiValue: false
}, {
  id: "displayName",
  optional: true,
  displayName: 'Display Name',
  description: 'The display name of the user',
  multiValue: false
}, {
  id: "email",
  optional: false,
  displayName: 'E-Mail Address',
  description: 'The e-mail address of the user',
  multiValue: false
},{
  id: "server",
  optional: false,
  displayName: 'Server',
  description: 'server',
  multiValue: false
},{
  id: "facility",
  optional: false,
  displayName: 'Facility',
  description: 'facility',
  multiValue: false
}];

module.exports = {
  user: profile,
  metadata: metadata
}
