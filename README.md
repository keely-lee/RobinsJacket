# README

<a href="https://robins-jacket.herokuapp.com/#/">RobinsJacket</a> is a single page app clone of Robinhood Markets. On home, the user is greeted with a cloned splash page that displays products the benefits of choosing RobinsJacket!

![](https://media.giphy.com/media/utoJg2CkN9HD1j3FJQ/giphy.gif)

When a user is signed in, they are greeted with a stock graph and trending news. The graph pulls live market data defaulted to a three month period (obtained by <a href="https://rapidapi.com">Rapid</a> )

![](https://media.giphy.com/media/OeEowxRxHvQCfd7gln/giphy.gif)

```Javascript
function intervalReducer(state, action) {
  let selected;
  switch (action.type) {
    case "choice":
      return { selected: action.choice };
    case "up":
      selected = state.selected === 0 ? 2 : state.selected - 1;
      return { selected };
    case "down":
      selected = state.selected === 2 ? 0 : state.selected + 1;
      return { selected };
    default:
      return { selected: state.selected };
  }
}

const [state, dispatch] = useReducer(intervalReducer, { selected: 0 });

useEffect(() => {
  const intervalId = setInterval(() => {
    dispatch({ type: "down" });
  }, 4000);
  return () => clearInterval(intervalId)
}, [])
```

Technologies Used:

- Ruby on Rails
- PostgreSQL
- Javascript
- React / Redux
- HTML / CSS
- <a href="https://rapidapi.com">Rapid API</a>
- <a href="https://recharts.org/en-US/">Recharts</a>
- <a href="https://fontawesome.com/">Font Awesome</a>

My intention is to continue to flesh out more features and functionality.
Future Endeavors:

- Graph toggle that toggles 1D, 1M, 3M, 1Y, 2Y
- User's transactions details
- User's portfolio that provides detailed transaction history
- Multi-step signup page prompting user to enter "financial info" and interests (for more targeted content on user home)
- Light/Dark mode toggle
- Optimize page for mobile and various window sizes
- Company specific corporate info and news
