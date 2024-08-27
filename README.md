## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


### Note on Authentication Environment Variables in Chapter 15
* The `AUTH_SECRET` environment variable should be `NEXTAUTH_SECRET`.  
  Generate it with `openssl rand -base64 32`, and add it on `vercel.com` in `Project Settings > Environment Variables`.
  Afterwards, redeploy the project to activate it.  
  For development, add it in the `.env` file:
  ```
  NEXTAUTH_SECRET=LFl+yQ7JSSwnr+CnKr13vVerDhuL5e/Nrr3hq8L4OUE=
  ```
  Make sure `.env` is in `.gitignore`, so it is not uploaded to Github!

* The `AUTH_URL` environment variable should be `NEXTAUTH_URL`.  
It is not required when `Automatically expose System Environment Variables` is checked on `vercel.com` in `Project Settings > Environment Variables`, which is the default! Neither is it required in development.

#### Test authentication credentials
* Email: user@nextmail.com
* Password: 123456
