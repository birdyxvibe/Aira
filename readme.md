## When Pulling from Git
1) Ensure you run **npx prisma generate** to generate the database with the correct migration.
2) Ensure ENV variables are consistient (for local: BOT_TOKEN, DATABASE_URL, ClientID, GuildID; remove GuildID in production)
3) Run **npm i** to update dependencies

## When Pushing to Git
1) Run **npx prisma migrate dev** to migrate the current database.
2) Rebase your code onto main
3) Make a merge request. Do not push directly to main.