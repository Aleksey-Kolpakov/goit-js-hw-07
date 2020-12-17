import users from './users.js';

const getUserNames = users => {

    return users.map(user => user.name);
};
console.log(getUserNames(users));

const getUsersWithEyeColor = (users, color) => {
    const UsersWithEyeColor = users.filter(user => user.eyeColor === color)
    return users.filter(user => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, 'blue'));

const getUsersWithGender = (users, gender) => {
    const usersWithGender = users.filter(user => user.gender === gender)
    return getUserNames(usersWithGender);
};
console.log(getUsersWithGender(users, 'male'));
const getInactiveUsers = users => {

    return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users));

const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
const getUsersWithAge = (users, min, max) => {
    return users.filter(user => user.age >= min && user.age <= max)
};
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const calculateTotalBalance = users => {
    return users.reduce((totalBalance, user) => totalBalance += user.balance, 0)
};
console.log(calculateTotalBalance(users));

const getUsersWithFriend = (users, friendName) => {
    const UsersWithFriend = users.filter(user => user.friends.includes(friendName));
    return getUserNames(UsersWithFriend);
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = users => {
    const sortedUsers = [...users].sort((a, b) => a.friends.length - b.friends.length);
    return getUserNames(sortedUsers);
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
console.log(users);

const getSortedUniqueSkills = users => {
    const usersSkills = users.reduce((usersSkills, user) => {
        return usersSkills = [...usersSkills, ...user.skills];
    }, []);


    const uniqueSkills = usersSkills.reduce((uniqueSkills, userSkill) => {
        //console.log(uniqueSkills);

        // uniqueSkills = uniqueSkills.includes(userSkill) ? uniqueSkills : uniqueSkills.push(userSkill);
        if (uniqueSkills.includes(userSkill)) {
            return uniqueSkills;
        } else {
            uniqueSkills.push(userSkill);
            return uniqueSkills;
        }
        return uniqueSkills;
    }, []);



    return uniqueSkills.sort();

};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
