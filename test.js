const assert = require('assert');
const { getGlobalRoles, getOrgRoles, Roles, getRoleFromValueToNumber } = require('./src/index');

describe('Test must be passed', function () {
    describe('Check roles', function () {
        const globalRoles = "111";
        it('should return role student', function () {
            assert.strictEqual(Roles.STUDENT, getGlobalRoles(globalRoles)[0]);
        });
        it('should return role instructor', function () {
            assert.strictEqual(Roles.INSTRUCTOR, getGlobalRoles(globalRoles)[1]);
        });
        it('should return role org', function () {
            assert.strictEqual(Roles.ORGANIZATION, getGlobalRoles(globalRoles)[2]);
        });
        let orgRoles = "000100000"
        it('should return role org hr admin', function () {
            assert.strictEqual(Roles.ORGANIZATION_HR_ADMIN, getOrgRoles(orgRoles)[0]);
        });
        orgRoles = "00010001100"
        it('should return role organization-supervisor', function () {
            assert.strictEqual(Roles.ORGANIZATION_SUPERVISOR, getOrgRoles(orgRoles)[1]);
        });
        const selectedRoles = [0,3]
        it('should return role 10010000000', function () {
            assert.strictEqual('10010000000', getRoleFromValueToNumber(selectedRoles));
        });
        it('should return role holding admin', function () {
            assert.strictEqual(Roles.HOLDING_ADMINISTRATOR, getOrgRoles("0000000010")[0]);
        });
        it('should return role branch admin', function () {
            assert.strictEqual(Roles.ORGANIZATION_BRANCH_ADMINISTRATOR, getOrgRoles("00000000010")[0]);
        });
        it('should return role wb admin', function () {
            assert.strictEqual(Roles.ORGANIZATION_WB_ADMINISTRATOR, getOrgRoles("00000000001")[0]);
        });
    });
});