import {  Switch, Route } from "react-router-dom"
import { APP_CONSTANTS } from "../appconsts"
import CategoryCreate from "../pages/category-create"
import ProductCreate from "../pages/product-create"
import Products from "../pages/products"

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path={APP_CONSTANTS.ROUTES.PRODUCTS} component={Products} />
            <Route exact path={APP_CONSTANTS.ROUTES.PRODUCT_CREATE} component={ProductCreate} />
            <Route path={APP_CONSTANTS.ROUTES.CATEGORY_CREATE} component={CategoryCreate} />
        </Switch>
    )
}

export default AppRoutes