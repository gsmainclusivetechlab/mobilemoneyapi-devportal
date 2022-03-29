import { PLAN_STATE, USER_STATUS } from '../api/constants';

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
};

export const sortByProp = (array, prop) => {
  return [...array].sort(function (a, b) {
    return a[prop].localeCompare(b[prop], [], {
      numeric: true,
      caseFirst: 'upper'
    });
  });
};

export const sortByStatus = (array, status) => {
  const orderValues = [2, 3];
  const order = {};

  USER_STATUS.forEach(el => {
    if (el === status) {
      order[el] = 1;
    } else {
      order[el] = orderValues.shift();
    }
  });

  return [...array]
    .sort(function (a, b) {
      return a.firstName.localeCompare(b.firstName, [], {
        numeric: true,
        caseFirst: 'upper'
      });
    })
    .sort((a, b) => {
      return order[a.status] - order[b.status];
    });
};

// TODO need to use general sort function
// export const sortByPropAndName = (array, state) => {
//   const orderValues = [2];
//   const order = {};
//
//   PLAN_STATE.forEach(el => {
//     if (el === state) {
//       order[el] = 1;
//     } else {
//       order[el] = orderValues.shift();
//     }
//   });
//
//   return [...array]
//     .sort(function (a, b) {
//       return a.name.localeCompare(b.name, [], {
//         numeric: true,
//         caseFirst: 'upper'
//       });
//     })
//     .sort((a, b) => {
//       return order[a.state] - order[b.state];
//     });
// };

export const sortByState = (array, state) => {
  const orderValues = [2];
  const order = {};

  PLAN_STATE.forEach(el => {
    if (el === state) {
      order[el] = 1;
    } else {
      order[el] = orderValues.shift();
    }
  });

  return [...array]
    .sort(function (a, b) {
      return a.name.localeCompare(b.name, [], {
        numeric: true,
        caseFirst: 'upper'
      });
    })
    .sort((a, b) => {
      return order[a.state] - order[b.state];
    });
};
