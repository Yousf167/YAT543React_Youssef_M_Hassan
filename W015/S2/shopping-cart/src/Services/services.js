export function getCart() {
      let arr = []
      for (let i = 0; i < localStorage.length; i++) {
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
      return arr
}

export function addToCart(item, cart, setCart) {
      localStorage.setItem(cart.length, JSON.stringify(item));
      setCart([...cart, item]);
}

export function removeFromCart(item, cart, setCart) {
      let newCart = cart.filter(element => element.id !== item.id)
      console.log(newCart);
      localStorage.removeItem(item.id)
      setCart(newCart)
}

export function deleteCart(setCart){
      localStorage.clear()
      setCart([])
}