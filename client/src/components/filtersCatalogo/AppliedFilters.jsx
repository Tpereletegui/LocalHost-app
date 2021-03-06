import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter, filterProducts } from "../../redux/actions/filters.actions";
import { getProducts } from "../../redux/actions/products.actions";
import styles from "./filtersCatalogo.module.css";

const AppliedFilters = ({ filters }) => {

    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(resetFilter(e.target.value))
        dispatch(getProducts({ ...filters, [e.target.value]: "" }))
    }

    return (
        <div className={styles.bcsContainer}>
            {
                filters.name &&
                <div className={styles.appliedContainer}>
                    <h5 className={styles.h5}>{filters.name.toUpperCase()}  <button className={styles.x} value="name" onClick={handleClick}>X</button></h5>

                </div>
            }
            {
                filters.brand &&
                <div className={styles.appliedContainer}>
                    <h5 className={styles.h5}>{filters.brand.toUpperCase()}  <button className={styles.x} value="brand" onClick={handleClick}>X</button></h5>

                </div>
            }
            {
                filters.category &&
                <div className={styles.appliedContainer}>
                    <h5 className={styles.h5}>{filters.category.toUpperCase()}  <button className={styles.x} value="category" onClick={handleClick}>X</button></h5>

                </div>
            }
            {
                filters.subcategory &&
                <div className={styles.appliedContainer}>
                    <h5 className={styles.h5}>{filters.subcategory.toUpperCase()}  <button className={styles.x} value="subcategory" onClick={handleClick}>X</button></h5>

                </div>
            }
        </div>
    )
}

export default AppliedFilters;