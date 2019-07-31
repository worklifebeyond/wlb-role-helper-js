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
        }else if (i === 3) {
            switch (roles[3]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_HR_ADMIN);
                    break
            }
        }else if (i === 4) {
            switch (roles[4]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_HR_ASSISTANT);
                    break
            }
        }else if (i === 5) {
            switch (roles[5]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_PAYROLL_MASTER);
                    break
            }
        }else if (i === 6) {
            switch (roles[6]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_STAFF);
                    break
            }
        }else if (i === 7) {
            switch (roles[7]) {
                case "0":
                    break;
                case "1":
                    definedRoles.push(Roles.ORGANIZATION_SUPERVISOR);
                    break
            }
        }
    }
    return definedRoles;
}

module.exports = {
    getGlobalRoles,
    getOrgRoles
}