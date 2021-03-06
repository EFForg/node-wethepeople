/**
 * The Petitions API facet.
 *
 * @constructor
 */

var path = require('path');
var util = require('util');

var APIFacet = require('./api_facet');
var apiSchema = require('./api_schema');


/**
 * @constructor
 * @extends {APIFacet}
 */
var Petitions = function(baseURI, requestProxy) {
  APIFacet.call(this, baseURI.segment('petitions'), requestProxy);
};

util.inherits(Petitions, APIFacet);


/**
 * Fetches petition JSON from a remote server.
 *
 * @param petitionId The ID of the petition to retrieve, e.g. 50a3fd762f2c88cd65000015.
 * @param success
 * @param failure
 */
Petitions.prototype.getPetition = function(petitionId, success, failure) {
  this.get(this.getURI().segment(petitionId + '.json'), success, failure);
};


/**
 * Retrieves all petitions matching the supplied search criteria.
 *
 * @param query
 * @param success
 * @param failure
 */
Petitions.prototype.searchPetitions = function(query, success, failure) {
  var uri = this.getURI().segment(1, 'petitions.json').query(query);
  this.get(uri, success, failure);
};


/**
 * Returns the (optionally) filtered signatures associated with a petition.
 *
 * @param petitionId The ID of the petition to retrieve, e.g. 50a3fd762f2c88cd65000015.
 * @param query
 * @param success
 * @param failure
 */
Petitions.prototype.getSignatures = function(petitionId, query, success, failure) {
  var uri = this.getURI().segment(petitionId).segment('signatures.json').query(query);
  this.get(uri, success, failure);
};


module.exports = Petitions;
