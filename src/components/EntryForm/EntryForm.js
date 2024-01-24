import React, { useContext, useState } from "react";
import ProductContext from "../../utils/ProductContext";
import "./EntryForm.css";
const EntryForm = () => {
  const [tshirt, settshirt] = useState("");
  const [tshirtDescription, settshirtDescription] = useState("");
  const [price, setprice] = useState(0);
  const [smallItems, setsmallItems] = useState(0);
  const [mediumItems, setmediumItems] = useState(0);
  const [largeItems, setlargeItems] = useState(0);

  const productContext = useContext(ProductContext);
  console.log(productContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const productDetails = {
      Tshirt: tshirt,
      tshirtDescription: tshirtDescription,
      price: price,
      largeQuantity: largeItems,
      mediumQuantity: mediumItems,
      smallQuantity: smallItems,
    };

    productContext.addProduct(productDetails);

    console.log(productContext);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form-items">
          <div>
            <label>Tshirt:</label>
            <input
              type="text"
              value={tshirt}
              onChange={(e) => {
                settshirt(e.target.value);
              }}
            ></input>
          </div>

          <div>
            <label>Description:</label>
            <input
              type="text"
              value={tshirtDescription}
              onChange={(e) => {
                settshirtDescription(e.target.value);
              }}
            ></input>
          </div>

          <div>
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
            ></input>
          </div>
        </div>

        <div className="form-items">
          <div>
            <label>Quantity:Large</label>

            <input
              type="number"
              value={largeItems}
              onChange={(e) => {
                setlargeItems(e.target.value);
              }}
            ></input>
          </div>

          <div>
            <label>Meduim</label>
            <input
              type="number"
              value={mediumItems}
              onChange={(e) => {
                setmediumItems(e.target.value);
              }}
            ></input>
          </div>

          <div>
            <label>Small</label>
            <input
              type="number"
              value={smallItems}
              onChange={(e) => {
                setsmallItems(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <hr></hr>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default EntryForm;
