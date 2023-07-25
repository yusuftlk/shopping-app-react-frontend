import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products:[],
    productsStatus: STATUS.IDLE,
    productDetail : [],
    productDetailStatus: STATUS.IDLE
}

export const getProducts = createAsyncThunk('getProducts', async() => {
    const respone = await fetch('/products')
    const data = respone.json()
    return data
})

export const getProductsByName = createAsyncThunk('getProductByName', async(category) => {
    const respone = await fetch(`/products?categoryName=${category}`)
    console.log(category)
    const data = respone.json()
    return data
})

export const getProductDetail = createAsyncThunk('getProduct', async(id) => {
    const respone = await fetch(`/products/${id}`)
    const data = respone.json()
    return data
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers : (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.productsStatus = STATUS.LOADİNG
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.productsStatus = STATUS.SUCCESS;
            state.products = action.payload

        })
        .addCase(getProducts.rejected, (state, action) => {
            state.productsStatus = STATUS.FAIL
        })
        .addCase(getProductDetail.pending, (state, action) => {
            state.productDetailStatus = STATUS.LOADİNG
        })
        .addCase(getProductDetail.fulfilled, (state, action) => {
            state.productDetailStatus = STATUS.SUCCESS;
            state.productDetail = action.payload

        })
        .addCase(getProductDetail.rejected, (state, action) => {
            state.productDetailStatus = STATUS.FAIL
        })
        .addCase(getProductsByName.pending, (state, action) => {
            state.productsStatus = STATUS.LOADİNG
        })
        .addCase(getProductsByName.fulfilled, (state, action) => {
            state.productsStatus = STATUS.SUCCESS;
            state.products = action.payload

        })
        .addCase(getProductsByName.rejected, (state, action) => {
            state.productsStatus = STATUS.FAIL
        })
    }
})

export default productSlice.reducer;