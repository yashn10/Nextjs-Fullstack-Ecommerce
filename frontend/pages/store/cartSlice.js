import { createSlice } from '@reduxjs/toolkit';

// Function to load initial state from localStorage if in the browser
const loadCartFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }
    return []; // Return an empty array if on the server
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: loadCartFromLocalStorage(), // Initialize with saved cart
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity; // Update quantity
            } else {
                state.push(action.payload); // Add new item
            }
            // Save to localStorage in a safe manner
            if (typeof window !== 'undefined') {
                localStorage.setItem('cart', JSON.stringify(state));
            }
        },
        removeFromCart: (state, action) => {
            const newState = state.filter(item => item.id !== action.payload);
            // Update localStorage in a safe manner
            if (typeof window !== 'undefined') {
                localStorage.setItem('cart', JSON.stringify(newState));
            }
            return newState;
        },
        clearCart: (state) => {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('cart'); // Clear localStorage
            }
            return [];
        }
    },
});

// Export actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
