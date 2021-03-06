/*
 * Bedrock Credentials REST Module Configuration
 *
 * Copyright (c) 2015-2016 Digital Bazaar, Inc. All rights reserved.
 */
var config = require('bedrock').config;
var path = require('path');

// load modules
require('bedrock-validation');

config['credentials-rest'] = {};
// root of credential endpoints
config['credentials-rest'].basePath = '/credentials';

// configure event logging module
config['event-log'].eventTypes.CredentialClaim = {
  index: 'issuer',
  ensureWriteSuccess: true
};
config['event-log'].eventTypes.CredentialReveal = {
  index: 'issuer',
  ensureWriteSuccess: true
};
config['event-log'].eventTypes.CredentialConceal = {
  index: 'issuer',
  ensureWriteSuccess: true
};
config['event-log'].eventTypes.CredentialReject = {
  index: 'issuer',
  ensureWriteSuccess: true
};
config['event-log'].eventTypes.CredentialRevoke = {
  index: 'issuer',
  ensureWriteSuccess: true
};

// validation
config.validation.schema.paths.push(path.join(__dirname, '..', 'schemas'));
