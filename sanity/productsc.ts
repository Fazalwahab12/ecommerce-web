// export const product ={
//   name: "product",
//   title: "Product",
//   type: "document",
//   fields: [
//     {
//       name: "image",
//       title: "Image",
//       type: "image"
//     },
//     {
//       name: "title",
//       title: "Title",
//       type: "string"
//     },
//     {
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//   },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: { 
//           source: "name",
//           maxLength: 90,
//       }
//   },
  
//     {
//       name: "price",
//       title: "Price",
//       type: "number"
//     },
    
//     {
//       name: "productDetails",
//       title: "Product Details",
//       type: "text"
//     },
//     {
//       name: "productCare",
//       title: "Product Care",
//       type: "text"
//     }, {
//       name: 'category',
//       title: 'Category',
//       type: 'string',
//       options: {
//           list: [
//               {title: "Female", value: "Female"},
//               {title: "Male", value: "Male"},
//               {title: "Kids", value: "Kids"}
//           ],
//       },
//   },
//   ]

// }

export const product ={
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
      {
          name: 'image',
          title: 'Image',
          type: 'array',
          of: [{ type: 'image' }],
          options: { 
              hotspot: true,
          }
      },
      {
          name: 'name',
          title: 'Name',
          type: 'string',
      },
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
      {
          name: 'tags',
          title: 'Tags',
          type: 'string',
          options: {
              list: [
                  {title: "Sweater", value: "Sweater"},
                  {title: "Dress", value: "Dress"},
                  {title: "T Shirts", value: "T Shirts"},
                  {title: "Pants", value: "Pants"},
                  {title: "Jackets", value: "Jackets"}
              ],
          },
      },
      {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: { 
              source: "name",
              maxLength: 90,
          }
      },
      {
          name: 'price',
          title: 'Price',
          type: 'number',
      },
      {
        name: 'productDetails',
        title: 'Details',
        type: 'array', 
        of: [{type: 'block'}]
    },
            {
              name: "productCare",
              title: "Product Care",
              type: "text"
            },
        ]
    }