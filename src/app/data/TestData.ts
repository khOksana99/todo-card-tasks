import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {

    static categories: Category[] = [
        {id: 1, title: 'Job'},
        {id: 2, title: 'Family'},
        {id: 3, title: 'Study'},
        {id: 4, title: 'Relax'},
        {id: 5, title: 'Sport'},
        {id: 6, title: 'Food'},
        {id: 7, title: 'Finance'},
        {id: 8, title: 'Gadgets'},
        {id: 9, title: 'Health'},
        {id: 10, title: 'Car'},
        {id: 11, title: 'Hobbies'},
    ];


    static priorities: Priority[] = [
        {id: 1, title: 'Low', color: '#e5e5e5'},
        {id: 2, title: 'Medium', color: '#85D1B2'},
        {id: 3, title: 'Hight', color: '#F1828D'},
        {id: 4, title: 'Urgent', color: '#F1128D'}
    ];

    static tasks: Task[] = [
        {
            id: 1,
            title: 'Refuel the car',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[9],
            date: new Date('2022-04-10')
        },

        {
            id: 2,
            title: 'Make test report',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2022-04-11')
        },

        {
            id: 3,
            title: 'Clean the flat',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[1]
        },

        {
            id: 4,
            title: 'Make a picnic',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[1],
            date: new Date('2022-08-17')
        },
        {
            id: 5,
            title: 'Upgrade Java level',
            completed: false,
            category: TestData.categories[2]
        },
        {
            id: 6,
            title: 'Resolve a task',
            priority: TestData.priorities[1],
            completed: true,
            category: TestData.categories[2],
            date: new Date('2022-06-11')
        },

        {
            id: 7,
            title: 'Find tickets o Italy',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[3]
        },
        {
            id: 8,
            title: 'Make dinner for all family members(pizza)',
            completed: false,
            category: TestData.categories[5]
        },
        {
            id: 9,
            title: 'Sit on the twin',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2022-03-12')
        },
        {
            id: 10,
            title: 'Go to swimming',
            priority: TestData.priorities[0],
            completed: true,
            category: TestData.categories[4]
        },

        {
            id: 11,
            title: 'Make some party',
            completed: false
        },

        {
            id: 12,
            title: 'Start to study German',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[2]
        },
        {
            id: 13,
            title: 'Buy some chocolate',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[5],
            date: new Date('2022-05-11')
        },

        {
            id: 14,
            title: 'Make meeting with stake holders',
            completed: true,
            category: TestData.categories[0]
        },

        {
            id: 15,
            title: 'Pass Java exam',
            priority: TestData.priorities[2],
            completed: true
        },


        {
            id: 16,
            title: 'Put money on deposit',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[6]
        },

        {
            id: 17,
            title: 'Ask for bigger salary',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[6]
        },

        {
            id: 18,
            title: 'Go to the doctor',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[8],
            date: new Date('2022-12-11')

        },

        {
            id: 19,
            title: 'Make more money',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[7],
            date: new Date('2022-10-11')

        },

        {
            id: 20,
            title: 'Play football with co-workers',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2022-03-17')

        }

    ];

}

