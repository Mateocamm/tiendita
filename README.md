# Tiendita 🛒 
This is a Small Online Shop, using the following libraries

- Next Js
- Chakra UI
- Firebase
- Redux
- Midtrans
- Nodemailer

Link Demo: https://tiendita-rho.vercel.app/shop

## Next Js - Midtrans Simple Integration

For procecing the payment this shop is using Midtrans (Indonesian Gateway payment) (midtrans.com) with the Snap method fot simple integration

Create an account to get the private and public Key

## Environment variables

Create file "next.config.js" and add the following env:

```js
env:{
    //env for Firebase
    REACT_APP_API_KEY:"",
    REACT_APP_AUTH_DOMAIN:"",
    REACT_APP_PROJECT_ID:"",
    REACT_APP_STORAGE_BUCKET:"",
    REACT_APP_MESSAGING_SENDER_ID:"",
    REACT_APP_APP_ID:"",
    REACT_APP_MEASURMENT_ID:"",

    //env for Midtrans Payment
    MIDTRANS_SERVER_KEY:"",
    MIDTRANS_CLIENT_KEY:"",

    //env for Nodemailer
    SENDER_EMAIL_HOST:"",
    SENDER_EMAIL_PORT:"",
    SENDER_EMAIL_USER:"",
    SENDER_EMAIL_PASSWORD:"",
}
```

## Colaboration

Feel free to create a Pull Request, or just contact me for any Feature idea.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Next Futures
- Login Customer area
- Login Owner Shop
- Manage Orders
- Manage Products
- Landing page

## Thanks and happy coding!

Have any idea ? find me on: 
- [Linkedin](https://www.linkedin.com/in/mateocamm/)
- [Instagram](https://www.instagram.com/mateocamm/)
- [GitHub](https://github.com/mateocamm)