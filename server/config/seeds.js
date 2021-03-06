const db = require('./connection');
const { User, Drink, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Hot Drinks' },
        { name: 'Cold Drinks' },
        // { name: 'Tasty Treats' },
    ]);

    console.log('categories seeded');

    await Drink.deleteMany();

    const drinks = await Drink.insertMany([
        {
            name: 'Latte',
            description: 'A deliciously simple drink, the Latte is espresso with steamed milk and a small layer of foam on top.',
            image: './images/latte.jpeg',
            category: categories[0]._id,
            price: 4.75,
            quantity: 1
        },
        {
            name: 'Mocha',
            description: 'The Mocha is for those that need a little chocolate in their coffee.  It is espresso, chocolate syrup and steamed milk topped with whipped cream.',
            image: './images/mocha.jpeg',
            category: categories[0]._id,
            price: 4.75,
            quantity: 1
        },
        {
            name: 'Americano',
            description: 'The Americano is a no-frills coffee drink.  It is just espresso lightened with hot water.',
            image: './images/americano.jpeg',
            category: categories[0]._id,
            price: 2.75,
            quantity: 1
        },
        {
            name: 'House Coffee',
            description: 'The House Coffee is brewed from our own roasted “<br> for java” coffee beans and is our customer favorite!',
            image: './images/house-coffee.jpeg',
            category: categories[0]._id,
            price: 2.25,
            quantity: 1
        },
        {
            name: 'Cappuccino',
            description: 'A Cappuccino is double is espresso with equal parts steamed milk and foam.',
            image: './images/cappuccino.jpeg',
            category: categories[0]._id,
            price: 4.25,
            quantity: 1
        },
        {
            name: 'Hot Chocolate',
            description: 'Our Hot Chocolate is made with decadently rich chocolate and steamed milk with a small layer of foam on top.',
            image: './images/hot-chocolate.jpeg',
            category: categories[0]._id,
            price: 4.25,
            quantity: 1
        },
        {
            name: 'Iced Latte',
            description: 'The Iced Latte is fresh espresso poured over ice cubes and milk.',
            image: './images/iced-latte.jpeg',
            category: categories[1]._id,
            price: 4.75,
            quantity: 1
        },
        {
            name: 'Iced Mocha',
            description: 'Our Iced Mocha is a blend of espresso, rich chocolate syrup, milk, ice and vanilla ice-cream.',
            image: './images/iced-mocha.jpeg',
            category: categories[1]._id,
            price: 4.75,
            quantity: 1
        },
        {
            name: 'Cold-Brewed Coffee',
            description: 'Our Cold-Brewed Coffee is handcrafted in small batches daily, slow-steeped in cool water for 20 hours, without touching heat and finished with a splash of milk.',
            image: './images/cold-brewed.jpeg',
            category: categories[1]._id,
            price: 2.25,
            quantity: 1
        },
        {
            name: 'Cappuccino on Ice',
            description: 'A Cappuccino on Ice is fresh espresso poured over ice cubes and milk topped with cold foam.',
            image: './images/iced-cappuccino.jpeg',
            category: categories[1]._id,
            price: 4.25,
            quantity: 1
        },
    //     {
    //         name: 'Blue Berry Muffin',
    //         description: '',
    //         image: 'bb-muffin.jpeg',
    //         category: categories[2]._id,
    //         price: 2.00,
    //         quantity: 1
    //     },
    //     {
    //         name: 'Biscotti',
    //         description: '',
    //         image: 'biscotti.jpeg',
    //         category: categories[2]._id,
    //         price: 2.00,
    //         quantity: 1
    //     },
    //     {
    //         name: 'Croissant',
    //         description: '',
    //         image: 'croissants.jpeg',
    //         category: categories[2]._id,
    //         price: 2.00,
    //         quantity: 1
    //     },
    //     {
    //         name: 'Chocolate Chunk Cookie',
    //         description: '',
    //         image: 'choc-chunk.jpeg',
    //         category: categories[2]._id,
    //         price: 2.00,
    //         quantity: 1
    //     },
    //     {
    //         name: 'Chocolate Muffin',
    //         description: '',
    //         image: 'choc-muffin.jpeg',
    //         category: categories[2]._id,
    //         price: 2.00,
    //         quantity: 1
    //     },
    ]);

    console.log('drinks seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345',
        orders: [
            {
                drinks: [drinks[0]._id, drinks[0]._id, drinks[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();
});