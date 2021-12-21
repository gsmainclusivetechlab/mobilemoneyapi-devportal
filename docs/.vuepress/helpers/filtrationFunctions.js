export const sortByDate = (array, type) => {
    const firstCondition = type === 'Newest' ? 1 : -1;
    const secondCondition = type === 'Newest' ? -1 : 1;
    return [...array].sort(function (a, b) {
        if (new Date(a.registerDate) < new Date(b.registerDate)) {
            return firstCondition;
        }
        if (new Date(a.registerDate) > new Date(b.registerDate)) {
            return secondCondition;
        }
        return 0;
    });
}

export const sortByProp = (array, prop) => {
    return [...array].sort(function (a, b) {
        return a[prop].localeCompare(b[prop], [], {
            numeric: true,
            caseFirst: 'upper'
        })
    });
}

export const sortByKeyIssueDate = (array) => {
    return [...array].sort(function (a, b) {
        if (new Date(a.keyIssuedDate) < new Date(b.keyIssuedDate)) {
            return -1;
        }
        if (new Date(a.keyIssuedDate) > new Date(b.keyIssuedDate)) {
            return 1;
        }
        return 0;
    });
}

export const sortByStatus = (array, status) => {
    const statusValue = status === 'Inactive' ? 0 : status === 'Active' ? 1 : 2;
    return [...array].sort(a => a.status === statusValue ? -1 : 1)
}

export const sortByState = (array, state) => {
    const stateValue = state === 'Unpublish' ? 0 : 1;
    return [...array].sort(a => a.state === stateValue ? -1 : 1)
}
