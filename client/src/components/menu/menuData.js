const menu = {
    sections: {
      drinks: {
        jumpstart: [
          'JUMPSTART',
          {
            name: 'French Press',
            info: 'medium. dark. decafe.',
            price: '6'
          },
          {
            name: 'Hot Tea',
            info: '',
            price: '3'
          },
          {
            name: 'Campfire Hot Chocolate',
            info: 'fire-kissed marshmallow. chocolate chips. graham cracker. whipped cream.',
            price: '6'
          },
          {
            name: 'Crackalacka Cold Brew Coffee',
            info: '',
            price: '6'
          },
          {
            name: 'Banana Cold Brew Coffee',
            info: '',
            price: '6'
          },
          {
            name: 'Curious George Coffee',
            info: 'cold-pressed banana coffee. vanilla. almond milk. whipped cream.',
            price: '8'
          },
          {
            name: 'Fresh Juice',
            info: 'orange. grapefruit.',
            price: '5.50'
          },
          {
            name: 'Juice',
            info: 'apple. cranberry. pineapple. mango. peach. apricot. pear. V8.',
            price: '3.50'
          },
          {
            name: 'Faygo',
            info: 'rock and rye. orange. red. moon mist. lemon lime. grape. rootbeer. cream.',
            price: '3'
          },
          {
            name: 'Lemonade',
            info: '',
            price: '2.50'
          },
          {
            name: 'Iced Tea',
            info: '',
            price: '2.50'
          }
        ],
        toastTails: [
          'TOAST-TAILS',
          {
            name: 'Moonstruck Margarita',
            info: 'exotico reposado. amaretto. agave. lime. lemon. cherry.',
            price: '13'
          },
          {
            name: 'Cranberry Blush',
            info: 'vodka. cranberry lemon grass simple. rhubarb bitters. lemon. soda.',
            price: '12'
          },
          {
            name: 'Spanish Coffee',
            info: 'brandy. cointreau. tia maria. cinnamon sugar rim. house coffee. whipped cream.',
            price: '14'
          },
          {
            name: 'Fox Hound',
            info: 'gin. grapefruit. lime. salt sugar rim. vanilla simple. rosemary',
            price: '14'
          },
          {
            name: 'Stormy Morning',
            info: 'myers rum. ginger beer. lime. bitters.',
            price: '12'
          },
          {
            name: 'Twin Peaks',
            info: 'fig infused dickle rye. chai honey syrup. toasted almond bitters. orange. cherry.',
            price: '13'
          },
          {
            name: 'Rummy Run',
            info: "pusser's navy rum. campari. lime. pineapple juice. vanilla honey syrup.",
            price: '12'
          },
          {
            name: 'Super Mimosa',
            info: 'orange vodka. prosecco. orange juice.',
            price: '14'
          },
          {
            name: 'Toast Bellini',
            info: 'orange vodka. peach. orange juice. just peachy.',
            price: '14'
          },
          {
            name: 'Garden Mary',
            info: 'cucumber-dill vodka. zing zang. pickle. olive. lime. celery salt rim.',
            price: '12.50'
          },
          {
            name: 'Bacon Mary',
            info: 'bacon infused vodka. bloody mix. bacon. pickle. olive. salt pepper rim.',
            price: '13'
          },
          {
            name: 'The Original Bomb Mary',
            info: 'pearl vodka. house spicy mary mix. pickle. jalapeno. olive.',
            price: '12.50'
          }
        ]
      },
      brunch: {
        strt: [
          'STARTERS',
          {
            name: 'Biscuits and Gravy',
            info: 'house made biscuits. turkey sausage gravy.',
            price: '10'
          },
          {
            name: 'Avocado Toast',
            info: 'sourdough. avocado spread. cherry tomato. cojita. radish. pickled red onion. balsamic reduction. sprouts. ADD egg... 2',
            price: '10'
          },
          {
            name: 'Lox Bagel',
            info: 'everything bagel. fried caper. pickled red onion. whipped cream cheese. smoked salmon. balsamic.',
            price: '12'
          },
          {
            name: 'Cinnamon Roll',
            info: 'house-made caramel sauce. powdered sugar.',
            price: '6'
          },
          {
            name: 'Vegan Toast Delight',
            info: 'sourdough toast. vegan cream cheese. salted cucumber. pickled carrot. chives. nutritional yeast.',
            price: '10'
          }
        ],
        omlt: [
          'GOURMET OMELETS',
          {
            name: 'Petoskey',
            info: 'brie. bacon. caramelized onion. dried cherries.',
            price: '16'
          },
          {
            name: 'Parisian',
            info: 'spinach. caramelized onion. roasted tomato. chevre.',
            price: '15'
          },
          {
            name: 'Wild Mushroom',
            info: 'herb ricotta. wild mushrooms. herbs. truffle oil. crispy onion.',
            price: '15'
          },
          {
            name: 'Spicy Cali',
            info: 'tomato. herbs. pepper jack. guacamole. salsa. jalapeno.',
            price: '15'
          },
          {
            name: 'Wild Boar Sin',
            info: 'bacon. house boursin cheese. spinach. charred sweet onion. chives.',
            price: '15'
          },
          {
            name: 'Classic Two-Egg Breakfast',
            info: 'eggs any style. choice of bacon, pork links, or ham. choice of side and toast.',
            price: '15'
          }
        ],
        swts: [
          'TASTY SWEETS',
          {
            name: 'Apples and Cookies French Toast',
            info: 'challah. apple butter. caramel sauce. caramel apples. snickerdoodle cookie crumble. powdered sugar. whipped cream.',
            price: '15'
          },
          {
            name: 'Plain Jane French Toast',
            info: 'cinnamon challah. powdered sugar.',
            price: '13'
          },
          {
            name: 'Stashio Waffle',
            info: 'malted waffle. pistachio butter. candied pistachio. black berries. whipped cream. powdered sugar.',
            price: '14'
          },
          {
            name: 'Malted Waffle',
            info: 'powdered sugar. ADD berries... 2.',
            price: '11'
          },
          {
            name: 'Buttermilk Pancakes',
            info: 'ADD blueberries or chocolate chips... 2.',
            price: '12'
          },
          {
            name: 'Bacon Banana Brule',
            info: 'banana pancake. brown sugar brule. candied bacon. caramel sauce. cinnamon butter. whipped cream. powdered sugar.',
            price: '15.50'
          },
          {
            name: 'Strawberry Cheesecake Waffle',
            info: 'malted waffle. cream cheese frosting. strawberry. graham cracker crumble. whipped cream. powdered sugar.',
            price: '14'
          }
        ],
        favs: [
          'TOAST FAVORITES',
          {
            name: 'Bacon-Fried Rice',
            info: 'our award winning dish! jasmine rice. bacon. green onion. garlic. tamari. GF soy sauce. sunny-side up egg. avocado. pickled onion. pickled jalapeno. spinach. crispy onion.',
            price: '17.50'
          },
          {
            name: 'Trashy Hashy',
            info: 'shredded potato. bacon. onion. green pepper. tomato. jalapeno. pepper jack. turkey sausage gravy. over easy egg. choice of toast.',
            price: '18.50'
          },
          {
            name: 'Corned Beef Hash',
            info: "sy ginsberg's corned beef. onion. green pepper. shredded potato. cheddar. poached eggs. toast.",
            price: '18'
          },
          {
            name: 'Horrible Decision Burrito',
            info: 'scrambled eggs. cheddar. biscuit. chorizo. jalapeno. turkey sausage gravy. flour tortilla.',
            price: '15.50'
          },
          {
            name: 'Huevos Rancheros',
            info: 'over medium eggs. corn tortillas. black beans. chipotle. cotija. mexi slaw. guacamole. lime cream. ADD chorizo... 2.',
            price: '14'
          },
          {
            name: 'Chicken-n-Waffle',
            info: 'malted waffle. pickle brined chicken breast fried with old bay crispy coating. house made hot sauce. honey. turkey sausage gravy. served with your choice of home fries, grits, or bacon fried rice.',
            price: '21'
          },
          {
            name: 'Pierogi Bowl',
            info: 'pierogi of the day, deep fried. sauerkraut. home fries. pork sausage links. sour cream. choice of toast.',
            price: '16'
          }
        ],
        // bene: [
        //   'HOW YA BENNY?'
        // ],
        soup: [
          'SOUP',
          {
            name: 'Tomato Soup',
            info: 'parmesan. herbs.',
            price: '5 / 6.50'
          },
          {
            name: 'Broccoli Cheddar Soup',
            info: 'herbs.',
            price: '5 / 6.50'
          }
        ],
        sand: [
          'SANDWICH',
          {
            name: 'Bacon Grilled Cheese',
            info: 'gouda. havarti. bacon. caramelized onions. challah. served with tomato soup.',
            price: '15'
          },
          {
            name: 'The Ultimate BLT',
            info: 'applewood smoked bacon. fried egg. spinach. tomato. avocado spread. jalapeno garlic aioli. toasted sourdough.',
            price: '15'
          }
        ]
      }
    }
  };

  export default menu;