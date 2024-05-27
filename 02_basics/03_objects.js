const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sahil",
            lastName: "Patole"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    }
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));


// Destructuring Objects

const course = {
    courseName: "Javascript",
    price: "999",
    courseInstructor: "Sahil"
}

// Object Destructuring
const {courseInstructor: instructor} = course;
console.log(instructor);

// {
//     "name": "Sahil",
//     "courseName": "Java",
//     "price": "free"
// }