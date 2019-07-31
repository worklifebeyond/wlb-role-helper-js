const assert = require('assert');
const { getGlobalRoles, getOrgRoles, Roles } = require('./src/index');

describe('Array', function () {
    describe('#indexOf()', function () {
        const globalRoles = "111";
        it('should return role student', function () {
            assert.equal(Roles.STUDENT, getGlobalRoles(globalRoles)[0]);
        });
        it('should return role instructor', function () {
            assert.equal(Roles.INSTRUCTOR, getGlobalRoles(globalRoles)[1]);
        });
        it('should return role org', function () {
            assert.equal(Roles.ORGANIZATION, getGlobalRoles(globalRoles)[2]);
        });
        let orgRoles = "00010000"
        it('should return role org hr admin', function () {
            assert.equal(Roles.ORGANIZATION_HR_ADMIN, getOrgRoles(orgRoles)[0]);
        });
        orgRoles = "00010001"
        it('should return role organization-supervisor', function () {
            assert.equal(Roles.ORGANIZATION_SUPERVISOR, getOrgRoles(orgRoles)[1]);
        });
    });
});