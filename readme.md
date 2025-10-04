The following has been added to assist anyone looking to assist in the development of this application. Please scroll down for additional information and screenshots on the application.
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

## Running Postgres Locally (MacOS)
1) Once installed, you can use **brew services start postgresql** to start postgres.

## Features
Currently, Aira includes the following features
- Economy System, fully seperate by guilds, and manageable by server administration
- Daily Income System: Earn daily income simply by running a command once a day
- Daily Income Challenges: Earn additional daily income by completing tasks every day, and build a streak!
- Cloud Database: All your data is stored in our cloud, meaning you don't have to set your own database up! _(Data usage in line with our privacy policy)_
- Fishing System _(Coming Soon!)_: Fish within your guild and compete to complete your collection! Users can level up their fishing rods and skills in over 100 different ways!
- Profile System: Allows players to view their profile, including all their statistics (as configured by guild owners)

## Demos & Screenshots
Please note that some screenshots may not be indicitive of all features pushed to this repository as some features are still Work In Progress.
![img1](https://media.discordapp.net/attachments/1245540035911221249/1419801638972948642/image.png?ex=68e2e6d1&is=68e19551&hm=673c732632b0023b8a0ec23f0cf5127bc8e7e84979c9012e9710b57ac46cae71&=&format=webp&quality=lossless&width=1373&height=542)
![img2](https://media.discordapp.net/attachments/1245540035911221249/1419801639635910808/image.png?ex=68e2e6d1&is=68e19551&hm=7cf39295c389a08c5601aa3d14b6a61a33bdabf7e7a5cb8ab91faed76d3ae004&=&format=webp&quality=lossless&width=1373&height=873)
![img3](https://media.discordapp.net/attachments/1245540035911221249/1417211529543155742/image.png?ex=68e2b517&is=68e16397&hm=91b565eba84a596317962b5851816ffa2eee414e77439a37a7487b9f05763efa&=&format=webp&quality=lossless&width=434&height=525)
![img4](https://cdn.discordapp.com/attachments/1245540035911221249/1389157917151989841/iNDInZD454.png?ex=68e2d260&is=68e180e0&hm=656cc328505b29430971c0dc13847ff30164c69e91cb843af1a293c70ff8cba9&)
![img5](https://media.discordapp.net/attachments/1245540035911221249/1424175443451318273/image.png?ex=68e2fe3d&is=68e1acbd&hm=b458cf62b0e67aea15d910e2245b54af502d899b0694ba4b19b38668cfac2e45&=&format=webp&quality=lossless&width=1529&height=852)
