# README

<a href="https://robins-jacket.herokuapp.com/#/">RobinsJacket</a> is a single page app clone of Robinhood Markets. On home, the user is greeted with a cloned splash page that displays products the benefits of choosing RobinsJacket!

![](https://media.giphy.com/media/utoJg2CkN9HD1j3FJQ/giphy.gif)

When a user is signed in, they are greeted with a stock graph and trending news. The graph pulls live market data defaulted to a three month period (obtained by <a href="https://iexcloud.io/">IEX Cloud</a> )

![](https://media.giphy.com/media/OeEowxRxHvQCfd7gln/giphy.gif)

Hurdles:
During the initial week of app creation, I was able to significantly solidify my understanding of the React/Redux cycle and was able to create modals and various widgets that would enhance the user view, while keeping code DRY and readable. A quick snippet of the toggle feature on the splash page.

```Javascript
  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  chooseBenefit(choice) {
    this.setState({selected: choice})
  }

  toggle(direction){
    if (this.state.selected === 2 && direction === 1)
      this.setState({selected: 0})
    else if (this.state.selected === 0 && direction === -1)
      this.setState({selected: 2})
    else
      this.setState({selected: this.state.selected + direction});
  }

  interval(){
    this.intervalId = setInterval( () => {
      this.toggle(1);
    }, 4000 )
  }
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
