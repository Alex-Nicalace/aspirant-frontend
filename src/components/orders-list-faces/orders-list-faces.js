import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import OrdersList from "../orders-list";
import OrderFaces from "../order-faces";

const OrdersListFaces = () => {
    const [orderId, setOrderId] = useState(null);

    return (
        <Grid container>
            <Grid item>
                <OrdersList changeSelected={setOrderId} />
            </Grid>
            <Grid item>
                <OrderFaces orderId={orderId} />
            </Grid>
        </Grid>
    );
};

export default OrdersListFaces;