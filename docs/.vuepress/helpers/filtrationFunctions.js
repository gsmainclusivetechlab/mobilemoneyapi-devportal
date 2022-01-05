export const sortByDate = (array, type) => {
    const firstCondition = type === 'Newest' ? 1 : -1;
    const secondCondition = type === 'Newest' ? -1 : 1;
    return [...array].sort(function (a, b) {
        if (new Date(a.createdDate) < new Date(b.createdDate)) {
            return firstCondition;
        }
        if (new Date(a.createdDate) > new Date(b.createdDate)) {
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
        if (new Date(a.keyIssued) < new Date(b.keyIssued)) {
            return -1;
        }
        if (new Date(a.keyIssued) > new Date(b.keyIssued)) {
            return 1;
        }
        return 0;
    });
}

export const sortByStatus = (array, status) => {
    return [...array].sort(a => a.status === status ? -1 : 1)
}

export const sortByState = (array, state) => {
    const stateValue = state !== 'unpublished';
    return [...array].sort(a => a.published === stateValue ? -1 : 1)
}
