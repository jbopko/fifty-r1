import '../Cart.css'

function updateCart(count: number) {
  const root = document.querySelector("#root")
  if (root) {
    const cart = root.querySelector("#cart")
    if (cart) {
      const element = cart.querySelector("#itemsInCart")
      if (element) {
        if (count <= 0) {
          if (root.classList.contains("hasItems")) {
            root.classList.remove("hasItems")
          }
          if (cart.classList.contains("hasItems")) {
            cart.classList.remove("hasItems")
          }
        } else {
          if (!root.classList.contains("hasItems")) {
            root.classList.add("hasItems")
          }
          if (!cart.classList.contains("hasItems")) {
            cart.classList.add("hasItems")
          }
          element.innerHTML = String(count)
          const avatarBadge = root.querySelector('#cart-avatar-badge')!
          avatarBadge.innerHTML = String(count)
        }
      }
    }
  }
}

function addToCart(event: MouseEvent) {
  // Each component has its own version of state
  // with this mechanism

  // this is mock code: will come from the event
  // get item(s) to add from event or state
  // add to cart
  //  -update the cart state
  const root = document.querySelector("#root")
  if (root) {
    const cart = root.querySelector("#cart")
    if (cart) {
      const element = cart.querySelector("#itemsInCart")
      if (element) {
        const count = Number(element.textContent)
        updateCart(count + 1)
      }
    }
  }
  if (event) {
    event.stopPropagation()
  }
}

const AddToCart = () => {
  return (
    <button
      onClick={(event) => addToCart(event as unknown as MouseEvent)}
    >Add To Cart</button>
  )
}
export default AddToCart

// export class Cart2 extends Component {
//   setCartCount(count: number) {
//     const root = document.querySelector("#root")
//     if (root) {
//       const cart = root.querySelector("#cart")
//       if (cart) {
//         const element = cart.querySelector("#itemsInCart")
//         if (element) {
//           if (count <= 0) {
//             if (root.classList.contains("hasItems")) {
//               root.classList.remove("hasItems")
//             }
//             if (cart.classList.contains("hasItems")) {
//               cart.classList.remove("hasItems")
//             }
//             element.innerHTML = '0'
//           } else {
//             if (!root.classList.contains("hasItems")) {
//               root.classList.add("hasItems")
//             }
//             if (!cart.classList.contains("hasItems")) {
//               cart.classList.add("hasItems")
//             }
//             element.innerHTML = String(count)
//           }
//         }
//       }
//     }
//   }
//
//   render() {
//     return <div id='cart'>
//       <div id='itemsInCart'>0</div>
//     </div>;
//   }
// }
//
