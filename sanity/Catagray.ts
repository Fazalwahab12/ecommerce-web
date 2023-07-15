export const Category ={
    name: "Category",
    title: "Category",
    type: "document",
    fields: [
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
            list: [
                {title: "Female", value: "Female"},
                {title: "Male", value: "Male"},
                {title: "Kids", value: "Kids"}
            ],
        },
    },
    ]
    }