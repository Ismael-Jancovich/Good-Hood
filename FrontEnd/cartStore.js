import create from 'zustand';

const useCart = create((set) => ({
  cart: [],
  add: (product) => set((state) => {
    console.log(product);
    console.log(state);
    const existingProduct = state.cart.find(item => item.id_producto === product.id_producto);
    if (existingProduct) {
      console.log("algo");
      return {
        cart: state.cart.map(item =>
          item.id_producto === product.id_producto ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    } else {
      console.log("coso");
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }
  }),
  remove: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id_producto !== productId)
  })),
  decreaseOne: (productId) => set((state) => ({
    cart: state.cart.map(item =>
      item.id_producto === productId ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0)
  })),
}));

export default useCart;
