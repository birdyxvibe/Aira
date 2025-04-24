## When Pulling from Git
1) Ensure you run **npx prisma generate** to generate the database with the correct migration.
2) Ensure ENV variables are consistient (for local: BOT_TOKEN, DATABASE_URL, ClientID, GuildID; remove GuildID in production)
3) Run **npm i** to update dependencies

## When Pushing to Git
1) Run **npx prisma migrate dev** to migrate the current database.
2) Rebase your code onto main
3) Make a merge request. Do not push directly to main.

## Running your Applicaion (Local)
1) Once you have followed the **Pulling from Git** steps, you can spin up your local application.
2) Make sure that BOT_TOKEN is your application's token, and that ClientID matches. Make sure that GuildID is the ID of your test guild.
3) Run **npm run load** to update application commands.
4) Run **npm run start** or **node .** to activate your application.
