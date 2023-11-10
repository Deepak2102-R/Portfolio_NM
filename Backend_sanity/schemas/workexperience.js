export default{
    name: 'workexperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'jobtitle',
            title: 'Job Title',
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
            type: 'number'
        },
        {
            name: 'description',
            title: 'Job Description',
            type: 'string'
        },
        {
            name: 'dateofjoining',
            title:  'Date of Joining',
            type: 'date'
        },

    ],
}