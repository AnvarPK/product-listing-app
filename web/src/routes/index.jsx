import {  Switch, Route } from "react-router-dom"
import { APP_CONSTANTS } from "../appconsts"
import CategoryCreate from "../pages/category/create"
import CategoryView from "../pages/category/view"
import ProductCreate from "../pages/product/create"
import Products from "../pages/product/list"

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path={APP_CONSTANTS.ROUTES.PRODUCTS} component={Products} />
            <Route exact path={APP_CONSTANTS.ROUTES.PRODUCT_CREATE} component={ProductCreate} />
            <Route exact path={APP_CONSTANTS.ROUTES.CATEGORY_CREATE} component={CategoryCreate} />
            <Route exact path={APP_CONSTANTS.ROUTES.CATEGORY} component={CategoryView} />
        </Switch>
    )
}

export default AppRoutes