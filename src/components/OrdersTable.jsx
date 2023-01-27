import React, { useState, useEffect } from "react";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
    Avatar,
  TableFooter,
  Badge,
  Pagination,
} from "@windmill/react-ui";
import {useDispatch, useSelector} from "react-redux";
import {getAllOrdersAction} from "../redux/Actions/adminAction.js";

const OrdersTable = ({  filter }) =>
{
  const {orders, totalItems} = useSelector(state => state.getAdminOdersReducer)
  const [page, setPage] = useState(1);
  const dispatch = useDispatch()
  // const [data, setData] = useState([]);

  // pagination setup
  // const totalResults = response.length;

  // pagination change control
  function onPageChange(p)
  {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() =>
  {
    dispatch(getAllOrdersAction(page))

    // If Filters Applied
    // if (filter === "paid")
    // {
    //     orders
    //       .filter((order) => order.status === "Paid")
    //       .slice((page - 1) * resultsPerPage, page * resultsPerPage)
    // }
    // if (filter === "un-paid")
    // {
    //     orders
    //       .filter((order) => order.status === "Un-paid")
    //       .slice((page - 1) * resultsPerPage, page * resultsPerPage)
    // }
    // if (filter === "completed")
    // {
    //     orders
    //       .filter((order) => order.status === "Completed")
    //       .slice((page - 1) * resultsPerPage, page * resultsPerPage)
    // }
    //
    // // if filters doesen't applied
    // if (filter === "all" || !filter)
    // {
    //     orders.slice((page - 1) * resultsPerPage, page * resultsPerPage)
    // }
  }, [page, totalItems, filter]);

  console.log(totalItems)
  return (
    <div>
      {/* Table */}
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Client</TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {orders?.map((order, index) =>
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    {/*<img*/}
                    {/*    // src={`http://127.0.0.1:8000/${order?.images[0]?.image}`}*/}
                    {/*    //TODO: REVIEW THE THE REASON*/}
                    {/*    src={order?.customer?.avatar}*/}
                    {/*    alt={order?.name}*/}
                    {/*    className=" object-center object-contain cursor-pointer"*/}
                    {/*/>*/}
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={order?.customer?.avatar}
                      alt="User image"
                    />
                    <div>
                      <p className="font-semibold">{order?.customer?.nickname}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">#{order?.order_reference}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {order?.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type={order?.status === "Processing" ? "primary" : "success"}>
                    {order?.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                      {order?.paid_at?.slice(0,10)}
                  </span>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalItems}
            // resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
    </div>
  );
};

export default OrdersTable;
