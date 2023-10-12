'use strict';
const bcrypt = require('bcrypt');
const { Player, Game, Favorite, Comment } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Player.bulkCreate(
      [
        {
          name: 'Василий Пупкин',
          avatar:
            'https://bipbap.ru/wp-content/uploads/2022/11/innocence-en-danger-emoticon-wink-8350944a80bcacb6b76082b877cca174-730x586-1.jpeg',
          age: 32,
          email: 'vasya.pupkin@example.com',
          password: await bcrypt.hash('mySecret123', 10),
          Games: [
            {
              title: 'Super Mario',
              img: 'https://mario.wiki.gallery/images/thumb/3/3e/MPSS_Mario.png/640px-MPSS_Mario.png',
              description: 'Классическая аркадная игра о приключениях итальянского водопроводчика.',
              adult: false,
            },
            {
              title: 'Zelda',
              img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/34/TLoZ_BotW_boxart.png/274px-TLoZ_BotW_boxart.png',
              description: 'Приключенческая игра, где вам предстоит спасти принцессу Зельду.',
              adult: false,
            },
          ],
          Favorites: [{ game_id: 1 }, { game_id: 2 }],
          Comments: [
            { text: 'Отличная игра!', game_id: 1 },
            { text: 'Зельда великолепна!', game_id: 2 },
          ],
        },
        {
          name: 'Анна Банана',
          avatar: 'https://w-hatsapp.ru/wp-content/uploads/2017/05/7-5.png',
          age: 28,
          email: 'anna.banana@example.com',
          password: await bcrypt.hash('mySecret123', 11),
          Games: [
            {
              title: 'The Sims',
              img: 'https://i.ytimg.com/vi/vV2UM-bvQ8M/sddefault.jpg',
              description:
                'Симулятор жизни, где вы можете создавать своих персонажей и управлять их жизнями.',
              adult: false,
            },
            {
              title: 'Animal Crossing',
              img: 'https://upload.wikimedia.org/wikipedia/ru/0/04/AnimalCrossingNewLeafNABoxart.jpg',
              description:
                'Приключенческая игра с открытым миром, полным забавных животных и неограниченными возможностями.',
              adult: false,
            },
          ],
          Favorites: [{ game_id: 3 }, { game_id: 4 }],
          Comments: [
            { text: 'The Sims - моя любимая игра!', game_id: 3 },
            { text: 'Animal Crossing такая забавная!', game_id: 4 },
          ],
        },
        {
          name: 'Борис Бульбаш',
          avatar:
            'https://sun9-33.userapi.com/impg/IOEtyyULqYTKFAtlKFr3BRhQwpG8nrpy-JYz8g/e1SGBhC8Qo4.jpg?size=776x807&quality=95&sign=305b33d004176f550b5f7d674ed8a4f0&c_uniq_tag=3zLBb5bA36wfUmjUv5CjS4IZN3sRtdV_PlotiwyRS14&type=album',
          age: 40,
          email: 'boris.bulbash@example.com',
          password: await bcrypt.hash('mySecret123', 10),
          Games: [
            {
              title: 'World of Warcraft',
              img: 'https://upload.wikimedia.org/wikipedia/ru/8/8e/World_of_Warcraft_Box_Cover_Art.jpg',
              description:
                'Многопользовательская ролевая онлайн-игра, полная фэнтезийных приключений.',
              adult: false,
            },
            {
              title: 'Doom',
              img: 'https://upload.wikimedia.org/wikipedia/ru/f/fc/Doom_new_cover_art.jpg',
              description:
                'Легендарный шутер от первого лица, где вам предстоит бороться с армиями ада.',
              adult: true,
            },
          ],
          Favorites: [{ game_id: 5 }, { game_id: 6 }],
          Comments: [
            { text: 'WoW навсегда!', game_id: 5 },
            { text: 'Doom - классика!', game_id: 6 },
          ],
        },
        {
          name: 'Катя Котикова',
          avatar: 'https://cojo.ru/wp-content/uploads/2022/12/kot-okhotnik-11.webp',
          age: 25,
          email: 'katya.kotikova@example.com',
          password: await bcrypt.hash('mySecret123', 10),
          Games: [
            {
              title: 'Neko Atsume',
              img: 'https://upload.wikimedia.org/wikipedia/en/8/83/Neko_atsume_logo.png',
              description: 'Милая мобильная игра, в которой вы собираете разных котиков.',
              adult: false,
            },
            {
              title: 'Cat Quest',
              img: 'https://gaming-cdn.com/images/products/3870/orig/cat-quest-pc-mac-game-steam-cover.jpg?v=1685003561',
              description: 'Приключенческая ролевая игра в мире, населенном котами.',
              adult: false,
            },
          ],
          Favorites: [{ game_id: 7 }, { game_id: 8 }],
          Comments: [
            { text: 'Люблю котиков!', game_id: 7 },
            { text: 'Cat Quest - великолепная игра!', game_id: 8 },
          ],
        },
        {
          name: 'Григорий Гринч',
          avatar:
            'https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-image-of-grinch-who-is-a-scary-film-image_2943781.jpg',
          age: 45,
          email: 'grigoriy.grinch@example.com',
          password: await bcrypt.hash('mySecret123', 10),
          Games: [
            {
              title: 'Dark Souls',
              img: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DarkSoulsRemastered.jpg',
              description:
                'Хардкорная ролевая игра с мрачным атмосферным миром и высоким уровнем сложности.',
              adult: true,
            },
            {
              title: 'Bloodborne',
              img: 'https://upload.wikimedia.org/wikipedia/ru/c/c7/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Bloodborne.jpg',
              description: 'Экшен-РПГ с готической атмосферой и жуткими врагами.',
              adult: true,
            },
          ],
          Favorites: [{ game_id: 9 }, { game_id: 10 }],
          Comments: [
            { text: 'Dark Souls - моя любовь.', game_id: 9 },
            { text: 'Bloodborne захватывающая игра!', game_id: 10 },
          ],
        },
      ],
      { include: [Game, Favorite, Comment] }
    );
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ truncate: { cascade: true } });
  },
};
