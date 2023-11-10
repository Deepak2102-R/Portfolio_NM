export default{
    name: 'workexperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'jobtitle',
            title: 'Jobtitle',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        // {
        //     name: 'imageurl',
        //     title: 'ImageURL',
        //     type: 'image',
        //     options: {
        //         hotspot: true,
        //     }
        // },
        {
            name: 'years',
            title: 'Years',
            type: 'numbers'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },

    ],
}