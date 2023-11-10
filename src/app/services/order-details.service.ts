import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http:HttpClient) { } 
  
  apiCall()
  {
    return this.http.get
  }
  

  //food details
  
  foodDetails = [
    {
      id:1,
      foodName:"Chicken Grilled Sandwich",
      foodDetails:"Made with boiled chicken along with lettuce, bell pepper and seasonings like tangy chat masala with creamy mayonnaise.",
      foodPrice:200,
      foodImg:"https://justbakedcake.com/wp-content/uploads/2021/09/Chicken-Grilled-sandwich-1.jpg"
    },
    {
      id:2,
      foodName:"Veggie Supreme Pizza",
      foodDetails:"Onion, Green Capsicum, Mushroom, Black olives, Sweet corn, Red Paprika topped with Cheese",
      foodPrice:369,
      foodImg:"https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?resize=720%2C480&ssl=1"
    },
    {
      id:3,
      foodName:"Beef Burger",
      foodDetails:"High quality beef medium to well with all the fixings, cheese, lettuce, tomato, onions, special sauce and mayonnaise.",
      foodPrice:149,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sbwAyF4ru28qsnkoGSW5a2rpmJCc0pUtxg&usqp=CAU"
    },
    {
      id:4,
      foodName:"Paneer Masala Roll",
      foodDetails:"Made with Indian flatbread called paratha, then stuffed with paneer (cheese) that has been marinated in yogurt and spices, as well as onions and peppers.",
      foodPrice:140,
      foodImg:"https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg"
    },
    {
      id:5,
      foodName:"Easy Veggie Spaghetti",
      foodDetails:"Quick and easy vegetable spaghetti that tastes so good, you won’t even realize it’s loaded with nutritious veggies. ",
      foodPrice:300,
      foodImg:"https://www.inspiredtaste.net/wp-content/uploads/2023/03/Veggie-Spaghetti-Recipe-Video.jpg"
    },
    {
      id:6,
      foodName:"Chilli Meatballs with Tortilla Chips",
      foodDetails:"These perfectly spiced and seasoned Meatballs comes with an Adobo-flavored tomato sauce with the perfect balance of sweet, tangy, and smoky with a touch of heat.",
      foodPrice:360,
      foodImg:"https://img.delicious.com.au/p3x2BRPI/del/2021/07/chilli-con-carne-meatballs-with-smoky-veg-and-beans-154887-2.jpg"
    },
    {
      id:7,
      foodName:"Cherry Tomato Pasta",
      foodDetails:"Bright cherry tomatoes, olive oil, and a bit of garlic come together to make a quick, flavorful Pasta treat",
      foodPrice:260,
      foodImg:"https://assets.epicurious.com/photos/55f72d733c346243461d496e/1:1/w_2560%2Cc_limit/09112015_15minute_pastasauce_tomato.jpg"
    },
    {
      id:8,
      foodName:"Crème caramel",
      foodDetails:"Crème caramel uses the bain marie cooking method, creating a delicious treat for everyone to enjoy.",
      foodPrice:160,
      foodImg:"https://realfood.tesco.com/media/images/RFO-1400x919-Classic-creme-caramel-c33041fa-1997-429f-97ef-52fc8314db35-0-1400x919.jpg"
    },
    {
      id:9,
      foodName:"Frozen strawberry trifle",
      foodDetails:"It's got everything you need from a trifle-creamy custard, sweet jam, fresh fruit and soft sponge fingers-frozen in a loaf tin for an easy-to-serve, refreshing summer showstopper.",
      foodPrice:160,
      foodImg:"https://realfood.tesco.com/media/images/RFO-1400x919-FrozenStrawberryTrifle-8687e3e0-0037-4592-babb-87c37d5e2969-0-1400x919.jpg"
    },
    {
      id:10,
      foodName:"Classic chocolate mousse",
      foodDetails:"Creamy chocolate mousse is an absolute classic, served with whipped cream and chocolate shards. ",
      foodPrice:190,
      foodImg:"https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg"
    },
    {
      id:11,
      foodName:"Blueberry Cheesecake",
      foodDetails:"The light and creamy cheesecake sits on top of a biscuit layer and is topped by layer of blueberries.",
      foodPrice:550,
      foodImg:"https://www.thecountrycook.net/wp-content/uploads/2022/05/thumbnail-Blueberry-Cheesecake-scaled.jpg"
    },
    {
      id:12,
      foodName:"Oreo Desperado",
      foodDetails:"Oreo milkshake topped with crunched oreo, cream, vanila ice cream, chocochips, nuts, etc.",
      foodPrice:160,
      foodImg:"https://i3.wp.com/funmoneymom.com/wp-content/uploads/2022/06/Oreo-Milkshake-8.jpg"
    }
  ]
  
}
