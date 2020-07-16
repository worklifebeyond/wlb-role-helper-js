const assert = require('assert');
const { getGlobalRoles, getOrgRoles, Roles, getRoleFromValueToNumber } = require('./src/index');

describe('Test must be passed', function () {
    describe('Check roles', function () {
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
        const selectedRoles = [0,3]
        it('should return role 10010000', function () {
            assert.equal(100100000, getRoleFromValueToNumber(selectedRoles));
        });
        it('should return role holding admin', function () {
            assert.equal(Roles.HOLDING_ADMINISTRATOR, getOrgRoles("000000001")[0]);
        });
    });
});