const Roles = require('./roles');

getGlobalRoles = (roles) => {
    let definedRoles = [];
    for (let i = 0; i < roles.length; i++) {
        if (i === 0) {
            switch (roles[0]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.STUDENT);
                    break
            }
        } else if (i === 1) {
            switch (roles[1]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.INSTRUCTOR);
                    break
            }
        } else if (i === 2) {
            switch (roles[2]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION);
                    break
            }
        }
    }
    return definedRoles;
}



getOrgRoles = (roles) => {
    let definedRoles = [];
    for (let i = 0; i < roles.length; i++) {
        if (i === 0) {
            switch (roles[0]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_ADMINISTRATOR);
                    break
            }
        } else if (i === 1) {
            switch (roles[1]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_DEPARTMENT_HEAD);
                    break
            }
        } else if (i === 2) {
            switch (roles[2]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_FINANCE_ADMIN);
                    break
            }
        } else if (i === 3) {
            switch (roles[3]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_HR_ADMIN);
                    break
            }
        } else if (i === 4) {
            switch (roles[4]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_HR_ASSISTANT);
                    break
            }
        } else if (i === 5) {
            switch (roles[5]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_PAYROLL_MASTER);
                    break
            }
        } else if (i === 6) {
            switch (roles[6]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_STAFF);
                    break
            }
        } else if (i === 7) {
            switch (roles[7]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_SUPERVISOR);
                    break
            }
        } else if (i === 8) {
            switch (roles[8]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.HOLDING_ADMINISTRATOR);
                    break
            }
        } else if (i === 9) {
            switch (roles[9]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_BRANCH_ADMINISTRATOR);
                    break
            }
        } else if (i === 10) {
            switch (roles[10]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_WB_ADMINISTRATOR);
                    break
            }
        }
    }
    return definedRoles;
}

getRoleFromValueToNumber = (selectedRoles) => {
    const roles = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const accessRight = [
        {
            value: 0,
            label: Roles.ORGANIZATION_ADMINISTRATOR,
        },
        {
            value: 1,
            label: Roles.ORGANIZATION_DEPARTMENT_HEAD,
        },
        {
            value: 2,
            label: Roles.ORGANIZATION_FINANCE_ADMIN,
        },
        {
            value: 3,
            label: Roles.ORGANIZATION_HR_ADMIN,
        },
        {
            value: 4,
            label: Roles.ORGANIZATION_HR_ASSISTANT,
        },
        {
            value: 5,
            label: Roles.ORGANIZATION_PAYROLL_MASTER,
        },
        {
            value: 6,
            label: Roles.ORGANIZATION_STAFF,
        },
        {
            value: 7,
            label: Roles.ORGANIZATION_SUPERVISOR,
        }, {
            value: 8,
            label: Roles.HOLDING_ADMINISTRATOR,
        },{
            value: 9,
            label: Roles.ORGANIZATION_BRANCH_ADMINISTRATOR,
        },{
            value: 10,
            label: Roles.ORGANIZATION_WB_ADMINISTRATOR,
        },
    ]
    for (let j = 0; j < selectedRoles.length; j++) {
        const index = accessRight.findIndex((val) => val.value === selectedRoles[j])
        roles[index] = 1
    }

    return roles.join('')
}

module.exports = {
    getGlobalRoles,
    getOrgRoles,
    Roles,
    getRoleFromValueToNumber
}