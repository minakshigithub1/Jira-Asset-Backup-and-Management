export const CustomerService = {
    getData() {
        return [
            {
                id: 1000,
                name: 'James Butt',
                country: 'Feltz Printing Service',
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                quantity: 1,
                representative: {
                    name: 'Ioni Bowcher',
                },
                balance: 1
            },
            {
                id: 1001,
                name: 'Josephine Darakjy',
                country: 'Feltz Printing Service',

                company: 'Chanay, Jeffrey A Esq',
                date: '2019-02-09',
                status: 'negotiation',
                verified: true,
                quantity: 2,
                representative: {
                    name: 'Amy Elsner',
                },
                balance: 2
            },
            {
                id: 1002,
                name: 'Art Venere',
                country: 'Feltz Printing Service',

                company: 'Chemel, James L Cpa',
                date: '2017-05-13',
                status: 'qualified',
                verified: false,
                quantity: 3,
                representative: {
                    name: 'Asiya Javayant',
                },
                balance: 3
            },
            {
                id: 1003,
                name: 'Lenna Paprocki',
                country: 'Feltz Printing Service',
                company: 'Feltz Printing Service',
                date: '2020-09-15',
                status: 'new',
                verified: false,
                quantity: 4,
                representative: {
                    name: 'Xuxue Feng',
                },
                balance: 4
            },
            
            {
                id: 1012,
                name: 'Kiley Caldarera',
                country: 'Feltz Printing Service',

                company: 'Feiner Bros',
                date: '2015-10-20',
                status: 'unqualified',
                verified: false,
                quantity: 5,
                representative: {
                    name: 'Onyama Limba',
                },
                balance: 5
            },
            {
                id: 1013,
                name: 'Graciela Ruta',
                country: 'Feltz Printing Service',

                company: 'Buckley Miller & Wright',
                date: '2016-07-25',
                status: 'negotiation',
                verified: false,
                quantity: 6,
                representative: {
                    name: 'Amy Elsner',
                },
                balance: 6
            },
            {
                id: 1014,
                name: 'Cammy Albares',
                country: 'Feltz Printing Service',

                company: 'Rousseaux, Michael Esq',
                date: '2019-06-25',
                status: 'new',
                verified: true,
                quantity: 7,
                representative: {
                    name: 'Asiya Javayant',
                },
                balance: 7
            },
            {
                id: 1015,
                name: 'Mattie Poquette',
                country: 'Feltz Printing Service',
                pany: 'Century Communications',
                date: '2017-12-12',
                status: 'negotiation',
                verified: false,
                quantity: 8,
                representative: {
                    name: 'Anna Fali',
                },
                balance: 8
            },
            {
                id: 1016,
                name: 'Meaghan Garufi',
                country: 'Feltz Printing Service',

                company: 'Bolton, Wilbur Esq',
                date: '2018-07-04',
                status: 'unqualified',
                verified: false,
                quantity: 9,
                representative: {
                    name: 'Ivan Magalhaes',
                },
                balance: 9
            },
        
           
            {
                id: 1499,
                name: 'Chauncey Motley',
                country: 'Feltz Printing Service',

                company: 'Affiliated With Travelodge',
                date: '2019-04-23',
                status: 'renewal',
                verified: true,
                quantity: 10,
                representative: {
                    name: 'Amy Elsner',
                },
                balance: 10
            },
            {
                id: 1499,
                name: 'Chauncey Motley',
                country: 'Feltz Printing Service',

                company: 'Affiliated With Travelodge',
                date: '2019-04-23',
                status: 'renewal',
                verified: true,
                quantity: 11,
                representative: {
                    name: 'Amy Elsner',
                },
                balance: 11
            },
            {
                id: 1499,
                name: 'Chauncey Motley',
                country: 'Feltz Printing Service',

                company: 'Affiliated With Travelodge',
                date: '2019-04-23',
                status: 'renewal',
                verified: true,
                quantity: 12,
                representative: {
                    name: 'Amy Elsner',
                },
                balance: 12
            },
            {
                id: 1499,
                name: 'Chauncey Motley',
                country: 'Feltz Printing Service',

                company: 'Affiliated With Travelodge',
                date: '2019-04-23',
                status: 'renewal',
                verified: true,
                quantity: 13,
                representative: {
                    name: 'Amy Elsner',
                },
                balance: 13
            },
            {
                id: 1499,
                name: 'Chauncey Motley',
                country: 'Feltz Printing Service',

                company: 'Affiliated With Travelodge',
                date: '2019-04-23',
                status: 'renewal',
                verified: true,
                quantity: 14,
                representative: {
                    name: 'Amy Elsner',
                },
                balance: 14
            },
            {
                id: 1499,
                name: 'Chauncey Motley',
                country: 'Feltz Printing Service',

                company: 'Affiliated With Travelodge',
                date: '2019-04-23',
                status: 'renewal',
                verified: true,
                quantity: 15,
                representative: {
                    name: 'Amy Elsner',
                },
                balance: 15
            },
            {
                id: 1499,
                name: 'Chauncey Motley',
                country: 'Feltz Printing Service',

                company: 'Affiliated With Travelodge',
                date: '2019-04-23',
                status: 'renewal',
                verified: true,
                quantity: 16,
                representative: {
                    name: 'Amy Elsner',
                },
                balance: 16
            }


        ];
    },

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    },

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    },

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    },

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    },

    getCustomers(params) {
        const queryParams = params
            ? Object.keys(params)
                  .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                  .join('&')
            : '';

        return fetch('/api/data/customers?' + queryParams).then((res) => res.json());
    }
};