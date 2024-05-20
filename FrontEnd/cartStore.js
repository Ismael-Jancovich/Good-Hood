import create from 'zustand';

const useCart = create((set) => ({
  cart: [],
  add: (product) => set((state) => {
    const existingProduct = state.cart.find(item => item.id === product.id);
    if (existingProduct) {
      return {
        cart: state.cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    } else {
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }
  }),
  remove: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId)
  })),
  decreaseOne: (productId) => set((state) => ({
    cart: state.cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0)
  })),
}));

export default useCart;
  