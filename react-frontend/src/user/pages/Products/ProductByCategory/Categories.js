import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { data } from "jquery";

const Categories = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        setLoading(true);
        axios.get("http://127.0.0.1:8000/api/selectallcategory")
        .then(res => {
            console.log(res)
            setDatas(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
    
    return(
        <div>
            <ul>
                {datas.map(data => (
                    <li key={data.category_id}>{data.category_root_name.replace("-", " ")}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default Categories;